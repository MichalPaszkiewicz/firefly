import {ExternalCard, LoadCardsFromJSON} from "./loaders/cardloader"
import {SplitBoxesToShops} from "./lib/boxes";
import {ShopCardTypeToString, ShopCardType} from "./adaptors/cardtypeset";
import {ShopCard} from "./models/shopcard";
import {ArrayMethods} from "./lib/array";
import {EnumTools} from "./lib/enum";
import {Guid} from "./lib/guid";
import {cardData} from "./data/cards";
import {flightData} from "./data/flights";
import {misbehaviourData} from "./data/misbehaviours";
import {getRandomColor} from "./lib/colour";
import {Option} from "./models/option";
import {MisbehaveCard} from "./models/misbehave";
import {Space, Flight, GetSpaceString} from "./models/flight";
import {ProfessionType, ProfessionTypeToString} from "./adaptors/professionset";
import {KeyWordSet, KeyWordSetToString} from "./adaptors/keywordset";
import {JobType} from "./models/job";

console.clear();

var boxes = LoadCardsFromJSON(cardData);
var shops = SplitBoxesToShops(boxes);

console.log("total cards by box:");
boxes.forEach(box => console.log(box.Name + ": " + box.totalCards()))

console.log("\r\ntotal cost by box:");
boxes.forEach(box => console.log(box.Name + ": $" + box.totalCost()));

console.log("\r\ntotal cards by shop:");
shops.forEach(shop => console.log(shop.Name + ": " + shop.ShopCards.length));

console.log("\r\ntotal cost by shop:");
shops.forEach(shop =>  console.log(shop.Name + ": $" + shop.totalCost() ));

console.log("\r\naverage cost per card by shop:");
shops.forEach(shop =>  console.log(shop.Name + ": $" + (shop.totalCost() / shop.ShopCards.length)));

function createSection(title: string, appendTo: string){
    var resultsDiv = document.getElementById(appendTo);
    resultsDiv.style.maxWidth = "1000px";
    resultsDiv.style.background = "230,230,0";
    resultsDiv.style.padding = "10px";
    resultsDiv.style.boxSizing = "border-box";
    var header = document.createElement("h2");
    header.innerText = title;
    resultsDiv.appendChild(header);
    var div = document.createElement("div");
    //div.id = id;
    resultsDiv.appendChild(div);
    return div;
}

var countBarData = {};
var costDistributions = [];
var cardDistributions = [];
var options = {colour:{}};
var cardTypeOptions = {colour:{}};

var shopCardTypes = EnumTools.getValues(ShopCardType)
shopCardTypes.forEach(type => cardTypeOptions.colour[ShopCardTypeToString(type)] = getRandomColor());

shops.forEach(shop => {
    countBarData[shop.Name] = shop.ShopCards.length;
    var colourSelection = getRandomColor();
    options.colour[shop.Name] = colourSelection; 
    costDistributions.push({values: shop.ShopCards.map((sc => {return {x:sc.Cost}})), colour: colourSelection});
    var cardDistribution = {
        shopName: shop.Name,
        cardTypeCount: ArrayMethods.GroupBy(shop.ShopCards, (item : ShopCard) => ShopCardTypeToString(item.Type)).toObject((vals) => vals.length)
    };
    cardDistributions.push(cardDistribution);
});

new Plot.Bar("countBar", countBarData, options);
new Plot.BoxAndWhisker("costDistributions", costDistributions, options);

function makePieBox(title, data, options, appendTo){
    var graphBox = document.createElement("div");
    graphBox.className = "graph-box";
    var header = document.createElement("h3");
    header.innerText = title;
    graphBox.appendChild(header);
    var graphContainer = document.createElement("div");    
    graphContainer.className = "graph-container";
    var canvas = document.createElement("canvas");
    var canvasId = Guid.newGuid();
    canvas.id = canvasId;
    graphContainer.appendChild(canvas);
    graphBox.appendChild(graphContainer);
    appendTo.appendChild(graphBox);
    new Plot.Pie(canvasId, data, options);
}

var cardDistributionsDiv = createSection("Card type distributions", "deckresults");
cardDistributionsDiv.innerHTML = "";
cardDistributions.forEach((dist) => makePieBox(dist.shopName, dist.cardTypeCount, cardTypeOptions, cardDistributionsDiv));

var flightDistributionsDiv = createSection("Nav card distributions", "navresults");
var spaceGroups = ArrayMethods.GroupBy(flightData, (flight: Flight) => GetSpaceString(flight.Space));
var flightSpaces = spaceGroups.toObject((vals: Flight[]) => vals.length);
makePieBox("Cards per deck", flightSpaces, {colour:{Rim:"red", Border:"orange", Alliance:"blue" }}, flightDistributionsDiv);

var allFlightOptionsSelected: Option[] = flightData.reduce((a: Option[],b: Flight) => a.concat(b.Options), []).filter((f: Option) => !!f.SolidWithEmployer == true);
var allSolidWithEmployerSelected = allFlightOptionsSelected.map((fo: Option) => fo.SolidWithEmployer);
var data = ArrayMethods.GroupBy(allSolidWithEmployerSelected, (s: string) => s).toObject((vals) => vals.length);
makePieBox("Nav cards by solid rep", data, {}, flightDistributionsDiv);

var skillOptions = {
    colour: {
        Tech:"blue",
        Fight:"red",
        Negotiate:"green"
    }
};

var flightSkillDistributionsDiv = createSection("Nav cards by skillset", "navcardbreakdown")
spaceGroups.forEach(sg => {
    var data = {
        "Fight": sg.Values.filter((f: Flight) => f.Options.filter(fo => fo.Fight).length).length,
        "Tech": sg.Values.filter((f: Flight) => f.Options.filter(fo => fo.Tech).length).length,
        "Negotiate": sg.Values.filter((f: Flight) => f.Options.filter(fo => fo.Negotiate).length).length,
    };
    makePieBox( sg.Key, data, skillOptions, flightSkillDistributionsDiv);
});

var professionOptions = {
    colour: {
        Companion: getRandomColor(),
        Grifter: getRandomColor(),
        "Hill Folk": getRandomColor(),
        Mechanic: getRandomColor(),
        Medic: getRandomColor(),
        Merc: getRandomColor(),
        Pilot: getRandomColor(),
        Soldier: getRandomColor(),
        Lawman: getRandomColor(),
        Mudder: getRandomColor() 
    }
};

function optionsToProfessionDistribution(options: Option[]){
    var allProfessionsSelected: ProfessionType[] = options.reduce((a: ProfessionType[], b: Option) => a.concat(b.Professions), [])
                                                            .filter((a: ProfessionType) => a != null);
    var data = ArrayMethods.GroupBy(allProfessionsSelected, (ps: ProfessionType) => ProfessionTypeToString(ps)).toObject((vals) => vals.length);
    return data;
}

var flightProfessionDistributionsDiv = createSection("Nav cards by profession", "navcardbreakdown");
spaceGroups.forEach(sg => {
    var allFlightOptionsSelected: Option[] = sg.Values.reduce((a: Option[],b: Flight) => a.concat(b.Options), []);
    makePieBox(sg.Key, optionsToProfessionDistribution(allFlightOptionsSelected), professionOptions, flightProfessionDistributionsDiv);
});

var keyWordSetOptions = {
    Explosives: getRandomColor(),
    FakeID: getRandomColor(),
    FancyDuds: getRandomColor(),
    Firearm: getRandomColor(),
    HackingRig: getRandomColor(),
    SniperRifle: getRandomColor(),
    Transport: getRandomColor()
};

var breakdownVsSalvageopDiv = createSection("Salvage ops vs Breakdowns", "navcardbreakdown");
spaceGroups.forEach(sg => {
    var allFlightOptionsSelected: Option[] = sg.Values.reduce((a: Option[], b: Flight) => a.concat(b.Options), []);
    var data = {
        Breakdown: allFlightOptionsSelected.filter((f:Option) => f.IsBreakDown).length,
        "Salvage Op": allFlightOptionsSelected.filter((f: Option) => f.JobType == JobType.SalvageOp).length
    };
    makePieBox(sg.Key, data, {colour: {Breakdown:"blue","Salvage Op":"red"}}, breakdownVsSalvageopDiv );
});

var misbehaveSection = createSection("Misbehave", "misbehaveresults");
var misbehaveProfessions = optionsToProfessionDistribution(misbehaviourData.reduce((a: Option[], b: Flight) => a.concat(b.Options), []));
makePieBox("Professions", misbehaveProfessions, professionOptions, misbehaveSection);

var misbehaveSkillsets = {
    "Fight": misbehaviourData.reduce((a: number, mc: MisbehaveCard) => a + mc.Options.filter((o : Option) => o.Fight).length, 0),
    "Tech": misbehaviourData.reduce((a: number, mc: MisbehaveCard) => a + mc.Options.filter((o : Option) => o.Tech).length, 0),
    "Negotiate": misbehaviourData.reduce((a: number, mc: MisbehaveCard) => a + mc.Options.filter((o : Option) => o.Negotiate).length, 0)
}
makePieBox("Skill sets", misbehaveSkillsets, skillOptions, misbehaveSection);

var misbehaviourOptions = misbehaviourData.reduce((a: Option[], b: MisbehaveCard) => a.concat(b.Options), []);
var misbehaveKeywords = ArrayMethods.GroupBy(misbehaviourOptions.filter(mo => mo.KeyWord), (item: Option) => KeyWordSetToString(item.KeyWord)).toObject(vals => vals.length);
makePieBox("Keywords", misbehaveKeywords, keyWordSetOptions, misbehaveSection);

var misbehaveItems = ArrayMethods.GroupBy(misbehaviourOptions.filter(mo => mo.Item), (option: Option) => option.Item).toObject(vals => vals.length);
makePieBox("Items", misbehaveItems, {}, misbehaveSection);