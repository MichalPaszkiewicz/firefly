(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var BoxSet;
(function (BoxSet) {
    BoxSet[BoxSet["Base"] = 0] = "Base";
    BoxSet[BoxSet["BreakinAtmo"] = 1] = "BreakinAtmo";
    BoxSet[BoxSet["Promo"] = 2] = "Promo";
    BoxSet[BoxSet["PiratesAndBountyHunters"] = 3] = "PiratesAndBountyHunters";
    BoxSet[BoxSet["BlueSun"] = 4] = "BlueSun";
    BoxSet[BoxSet["Kalidasa"] = 5] = "Kalidasa";
    BoxSet[BoxSet["Esmeralda"] = 6] = "Esmeralda";
    BoxSet[BoxSet["Jetwash"] = 7] = "Jetwash";
})(BoxSet = exports.BoxSet || (exports.BoxSet = {}));
function GetBoxSet(num) {
    return num;
}
exports.GetBoxSet = GetBoxSet;
function BoxSetToString(boxSet) {
    switch (boxSet) {
        case BoxSet.Base:
            return "Base";
        case BoxSet.BreakinAtmo:
            return "Breakin Atmo";
        case BoxSet.Promo:
            return "Promo";
        case BoxSet.PiratesAndBountyHunters:
            return "Pirates and Bounty Hunters";
        case BoxSet.BlueSun:
            return "Blue Sun";
        case BoxSet.Kalidasa:
            return "Kalidasa";
        case BoxSet.Esmeralda:
            return "Esmeralda";
        case BoxSet.Jetwash:
            return "Jetwash";
        default:
            return "Unknown";
    }
}
exports.BoxSetToString = BoxSetToString;

},{}],2:[function(require,module,exports){
"use strict";
var ShopCardType;
(function (ShopCardType) {
    ShopCardType[ShopCardType["Crew"] = 0] = "Crew";
    ShopCardType[ShopCardType["Gear"] = 1] = "Gear";
    ShopCardType[ShopCardType["ShipUpgrade"] = 2] = "ShipUpgrade";
    ShopCardType[ShopCardType["DriveCore"] = 3] = "DriveCore";
})(ShopCardType = exports.ShopCardType || (exports.ShopCardType = {}));
function GetCardType(num) {
    return num - 10;
}
exports.GetCardType = GetCardType;
function ShopCardTypeToString(shopCardType) {
    switch (shopCardType) {
        case ShopCardType.Crew:
            return "Crew";
        case ShopCardType.Gear:
            return "Gear";
        case ShopCardType.ShipUpgrade:
            return "Ship Upgrade";
        case ShopCardType.DriveCore:
            return "Drive Core";
        default:
            return "Unknown";
    }
}
exports.ShopCardTypeToString = ShopCardTypeToString;

},{}],3:[function(require,module,exports){
"use strict";
var KeyWordSet;
(function (KeyWordSet) {
    KeyWordSet[KeyWordSet["Explosives"] = 0] = "Explosives";
    KeyWordSet[KeyWordSet["FakeID"] = 1] = "FakeID";
    KeyWordSet[KeyWordSet["FancyDuds"] = 2] = "FancyDuds";
    KeyWordSet[KeyWordSet["Firearm"] = 3] = "Firearm";
    KeyWordSet[KeyWordSet["HackingRig"] = 4] = "HackingRig";
    KeyWordSet[KeyWordSet["SniperRifle"] = 5] = "SniperRifle";
    KeyWordSet[KeyWordSet["Transport"] = 6] = "Transport";
})(KeyWordSet = exports.KeyWordSet || (exports.KeyWordSet = {}));
function GetKeyWordSet(num) {
    return num - 30;
}
exports.GetKeyWordSet = GetKeyWordSet;
function KeyWordSetToString(keyWordSet) {
    switch (keyWordSet) {
        case KeyWordSet.Explosives:
            return "Explosives";
        case KeyWordSet.FakeID:
            return "Fake ID";
        case KeyWordSet.FancyDuds:
            return "Fancy Duds";
        case KeyWordSet.Firearm:
            return "Firearm";
        case KeyWordSet.HackingRig:
            return "Hacking Rig";
        case KeyWordSet.SniperRifle:
            return "Sniper Rifle";
        case KeyWordSet.Transport:
            return "Transport";
    }
}
exports.KeyWordSetToString = KeyWordSetToString;

},{}],4:[function(require,module,exports){
"use strict";
var ProfessionType;
(function (ProfessionType) {
    ProfessionType[ProfessionType["Companion"] = 0] = "Companion";
    ProfessionType[ProfessionType["Grifter"] = 1] = "Grifter";
    ProfessionType[ProfessionType["HillFolk"] = 2] = "HillFolk";
    ProfessionType[ProfessionType["Mechanic"] = 3] = "Mechanic";
    ProfessionType[ProfessionType["Medic"] = 4] = "Medic";
    ProfessionType[ProfessionType["Merc"] = 5] = "Merc";
    ProfessionType[ProfessionType["Pilot"] = 6] = "Pilot";
    ProfessionType[ProfessionType["Soldier"] = 7] = "Soldier";
    ProfessionType[ProfessionType["Lawman"] = 8] = "Lawman";
    ProfessionType[ProfessionType["Mudder"] = 9] = "Mudder";
})(ProfessionType = exports.ProfessionType || (exports.ProfessionType = {}));
function GetProfessionType(num) {
    return num - 40;
}
exports.GetProfessionType = GetProfessionType;
function ProfessionTypeToString(professionType) {
    switch (professionType) {
        case ProfessionType.Companion:
            return "Companion";
        case ProfessionType.Grifter:
            return "Grifter";
        case ProfessionType.HillFolk:
            return "Hill Folk";
        case ProfessionType.Mechanic:
            return "Mechanic";
        case ProfessionType.Medic:
            return "Medic";
        case ProfessionType.Merc:
            return "Merc";
        case ProfessionType.Pilot:
            return "Pilot";
        case ProfessionType.Soldier:
            return "Soldier";
        case ProfessionType.Lawman:
            return "Lawman";
        case ProfessionType.Mudder:
            return "Mudder";
        default:
            return "Unknown";
    }
}
exports.ProfessionTypeToString = ProfessionTypeToString;

},{}],5:[function(require,module,exports){
"use strict";
var ShopSet;
(function (ShopSet) {
    ShopSet[ShopSet["Osiris"] = 0] = "Osiris";
    ShopSet[ShopSet["Persephone"] = 1] = "Persephone";
    ShopSet[ShopSet["Regina"] = 2] = "Regina";
    ShopSet[ShopSet["Silverhold"] = 3] = "Silverhold";
    ShopSet[ShopSet["SpaceBazaar"] = 4] = "SpaceBazaar";
    ShopSet[ShopSet["Meridian"] = 5] = "Meridian";
    ShopSet[ShopSet["Beaumonde"] = 6] = "Beaumonde";
})(ShopSet = exports.ShopSet || (exports.ShopSet = {}));
function GetShopSet(num) {
    return num - 20;
}
exports.GetShopSet = GetShopSet;
function ShopSetToString(shopSet) {
    switch (shopSet) {
        case ShopSet.Osiris:
            return "Osiris";
        case ShopSet.Persephone:
            return "Persephone";
        case ShopSet.Regina:
            return "Regina";
        case ShopSet.Silverhold:
            return "Silverhold";
        case ShopSet.SpaceBazaar:
            return "Space Bazaar";
        case ShopSet.Meridian:
            return "Meridian";
        case ShopSet.Beaumonde:
            return "Beaumonde";
        default:
            return "Unknown";
    }
}
exports.ShopSetToString = ShopSetToString;

},{}],6:[function(require,module,exports){
"use strict";
exports.cardData = [{ "id": 1, "name": "Alliance Ident Card", "type": 11, "set": 0, "shop": 20, "cost": 1600, "fight": 0, "tech": 0, "negotiate": 2, "keywords": [31], "professions": [], "title": "", "description": "Counts as Solid with Harken.\nCrew carrying ignores Wanted Crew Roll.", "flavourText": "" }, { "id": 2, "name": "\"Bona Fide\" Credentials", "type": 11, "set": 0, "shop": 20, "cost": 1000, "fight": 0, "tech": 0, "negotiate": 1, "keywords": [31], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 3, "name": "Enhanced Graviton Accelerator", "type": 13, "set": 0, "shop": 20, "cost": 2400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "range": 6, "title": "", "description": "", "flavourText": "" }, { "id": 4, "name": "Expanded Crew Quarters", "type": 12, "set": 0, "shop": 20, "cost": 600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "+3 to Ship's Max Crew.", "flavourText": "" }, { "id": 5, "name": "Expanded Crew Quarters", "type": 12, "set": 0, "shop": 20, "cost": 600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "+3 to Ship's Max Crew.", "flavourText": "" }, { "id": 6, "name": "Exterior Cargo Pods", "type": 12, "set": 0, "shop": 20, "cost": 600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "2 Additional Cargo Hold areas.", "flavourText": "" }, { "id": 7, "name": "Exterior Cargo Pods", "type": 12, "set": 0, "shop": 20, "cost": 600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "2 Additional Cargo Hold areas.", "flavourText": "" }, { "id": 8, "name": "Full Tune-Up & Retro-Fit", "type": 12, "set": 0, "shop": 20, "cost": 800, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Ignore all Breakdowns.", "flavourText": "" }, { "id": 9, "name": "Fully Equipped Med Bay", "type": 12, "set": 0, "shop": 20, "cost": 600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "May re-roll Medic Checks.", "flavourText": "" }, { "id": 10, "name": "Fully Equipped Med Bay", "type": 12, "set": 0, "shop": 20, "cost": 600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "May re-roll Medic Checks.", "flavourText": "" }, { "id": 11, "name": "Hyper Efficient Radion Accelerator Mark III", "type": 13, "set": 0, "shop": 20, "cost": 800, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "range": 4, "title": "", "description": "No Fuel required to initiate Full Burn.", "flavourText": "" }, { "id": 12, "name": "Hyper Efficient Radion Accelerator Mark III", "type": 13, "set": 0, "shop": 20, "cost": 800, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "range": 4, "title": "", "description": "No Fuel required to initiate Full Burn.", "flavourText": "" }, { "id": 13, "name": "Inara", "type": 10, "set": 0, "shop": 20, "cost": 300, "fight": 0, "tech": 0, "negotiate": 3, "keywords": [32], "professions": [40], "moral": true, "wanted": false, "title": "Ambassador", "description": "May re-roll [Negotiate Test]s.", "flavourText": "\"What exactly was our net profit on the famous wobbly-headed doll caper?\"" }, { "id": 14, "name": "Interrogator", "type": 10, "set": 0, "shop": 20, "cost": 100, "fight": 0, "tech": 0, "negotiate": 1, "keywords": [], "professions": [44], "moral": false, "wanted": true, "title": "", "description": "", "flavourText": "" }, { "id": 15, "name": "Med Staff", "type": 10, "set": 0, "shop": 20, "cost": 200, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [44], "moral": true, "wanted": false, "title": "", "description": "", "flavourText": "" }, { "id": 16, "name": "Med Staff", "type": 10, "set": 0, "shop": 20, "cost": 200, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [44], "moral": true, "wanted": false, "title": "", "description": "", "flavourText": "" }, { "id": 17, "name": "Med Staff", "type": 10, "set": 0, "shop": 20, "cost": 200, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [44], "moral": true, "wanted": false, "title": "", "description": "", "flavourText": "" }, { "id": 18, "name": "Med Staff", "type": 10, "set": 0, "shop": 20, "cost": 200, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [44], "moral": true, "wanted": false, "title": "", "description": "", "flavourText": "" }, { "id": 19, "name": "Modified Radion Accelerator Mark II", "type": 13, "set": 0, "shop": 20, "cost": 1200, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "range": 6, "title": "", "description": "1 Fuel to initiate Full Burn.", "flavourText": "" }, { "id": 20, "name": "Modified Radion Accelerator Mark II", "type": 13, "set": 0, "shop": 20, "cost": 1200, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "range": 6, "title": "", "description": "1 Fuel to initiate Full Burn.", "flavourText": "" }, { "id": 21, "name": "Official Lookin' Vehicle", "type": 11, "set": 0, "shop": 20, "cost": 1400, "fight": 0, "tech": 0, "negotiate": 2, "keywords": [36], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 22, "name": "Security Interface Pad", "type": 11, "set": 0, "shop": 20, "cost": 1000, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [34], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 23, "name": "Shiny New State-of-the-Art Compression Coils", "type": 12, "set": 0, "shop": 20, "cost": 1600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "May Mosey up to 2 Sectors.\nIgnore all Breakdowns.", "flavourText": "" }, { "id": 24, "name": "Simon's Surgical Kit", "type": 11, "set": 0, "shop": 20, "cost": 800, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "+1 to Medic Checks.", "flavourText": "" }, { "id": 25, "name": "Yolonda", "type": 10, "set": 0, "shop": 20, "cost": 300, "fight": 0, "tech": 1, "negotiate": 2, "keywords": [], "professions": [40, 41], "moral": false, "wanted": false, "title": "Deceptive", "description": "If Saffron or Bridgit are hired by anyone, Remove Yolonda from Play.", "flavourText": "\"Did you think I was a princess? ... You're a rutting fool.\"" }, { "id": 26, "name": "4WD Mule", "type": 11, "set": 0, "shop": 21, "cost": 1000, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [36], "professions": [], "title": "", "description": "After completing a Crime Job, Load 1 Cargo.", "flavourText": "" }, { "id": 27, "name": "4WD Mule", "type": 11, "set": 0, "shop": 21, "cost": 1000, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [36], "professions": [], "title": "", "description": "After completing a Crime Job, Load 1 Cargo.", "flavourText": "" }, { "id": 28, "name": "A Very Fine Hat", "type": 11, "set": 0, "shop": 21, "cost": 1000, "fight": 0, "tech": 0, "negotiate": 1, "keywords": [32], "professions": [], "title": "", "description": "When Dealing with Contacts, you may Consider up to 4 Jobs.", "flavourText": "" }, { "id": 29, "name": "Billy", "type": 10, "set": 0, "shop": 21, "cost": 200, "fight": 0, "tech": 2, "negotiate": 0, "keywords": [], "professions": [43], "moral": false, "wanted": true, "title": "Salvage Pro", "description": "+1 Cargo from Salvage Ops.", "flavourText": "" }, { "id": 30, "name": "\"Bona Fide\" Credentials", "type": 11, "set": 0, "shop": 21, "cost": 1000, "fight": 0, "tech": 0, "negotiate": 1, "keywords": [31], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 31, "name": "Bree", "type": 10, "set": 0, "shop": 21, "cost": 200, "fight": 0, "tech": 2, "negotiate": 0, "keywords": [], "professions": [43], "moral": false, "wanted": true, "title": "Black Market Ties", "description": "May sell Parts to any Solid Contact for $300.", "flavourText": "\"It's a wreck ... It's parts. A lot of cheap parts we'll never unload.\"" }, { "id": 32, "name": "Cry Baby", "type": 12, "set": 0, "shop": 21, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "When in a Sector with Alliance Cruiser, discard to ignore Alliance Cruiser's effects and move the Cruiser 1 Sector within Alliance Space.", "flavourText": "" }, { "id": 33, "name": "Cry Baby", "type": 12, "set": 0, "shop": 21, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "When in a Sector with Alliance Cruiser, discard to ignore Alliance Cruiser's effects and move the Cruiser 1 Sector within Alliance Space.", "flavourText": "" }, { "id": 34, "name": "Emma", "type": 10, "set": 0, "shop": 21, "cost": 200, "fight": 0, "tech": 0, "negotiate": 2, "keywords": [], "professions": [41], "moral": true, "wanted": false, "title": "Morale Booster", "description": "You may use an Action on your turn to remove Disgruntled from a Crew other than Emma.", "flavourText": "" }, { "id": 35, "name": "Enforcer", "type": 10, "set": 0, "shop": 21, "cost": 200, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": false, "title": "Intimidating", "description": "+[Negotiate] when Carrying a Firearm.", "flavourText": "" }, { "id": 36, "name": "Enforcer", "type": 10, "set": 0, "shop": 21, "cost": 200, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": false, "title": "Intimidating", "description": "+[Negotiate] when Carrying a Firearm.", "flavourText": "" }, { "id": 37, "name": "Explosive Charge", "type": 11, "set": 0, "shop": 21, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [30], "professions": [], "title": "", "description": "Discard to count as [EXPLOSIVES].\n--OR--\nDiscard to add +[Fight] to a [Fight Test], after rolling.", "flavourText": "" }, { "id": 38, "name": "Gun Hand", "type": 10, "set": 0, "shop": 21, "cost": 100, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": false, "title": "Expendable", "description": "When Killed, discard instead of Removing from Play.", "flavourText": "\"There's just an acre of you fellas, isn't there?\" --Mal" }, { "id": 39, "name": "Gun Hand", "type": 10, "set": 0, "shop": 21, "cost": 100, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": false, "title": "Expendable", "description": "When Killed, discard instead of Removing from Play.", "flavourText": "\"There's just an acre of you fellas, isn't there?\" --Mal" }, { "id": 40, "name": "Hastily Forged Documents", "type": 11, "set": 0, "shop": 21, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [31], "professions": [], "title": "", "description": "Discard to count as [FAKE ID].\n--OR--\nDiscard to add +[Negotiate] to a [Negotiate Test], after rolling.", "flavourText": "" }, { "id": 41, "name": "Improvised Hacking Rig", "type": 11, "set": 0, "shop": 21, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [34], "professions": [], "title": "", "description": "Discard to count as [HACKING RIG].\n--OR--\nDiscard to add +[Tech] to a [Tech Test], after rolling.", "flavourText": "" }, { "id": 42, "name": "Kaylee's Fluffy Pink Dress", "type": 11, "set": 0, "shop": 21, "cost": 1000, "fight": 0, "tech": 0, "negotiate": 1, "keywords": [32], "professions": [], "title": "", "description": "When Buying from Suppliers, you may Buy up to 3 cards.", "flavourText": "" }, { "id": 43, "name": "Knife", "type": 11, "set": 0, "shop": 21, "cost": 200, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to add +[Fight] to a [Fight Test], after rolling.", "flavourText": "" }, { "id": 44, "name": "River Tam", "type": 10, "set": 0, "shop": 21, "cost": 0, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "moral": true, "wanted": true, "title": "Gifted", "description": "Before each Test, roll:\n1-2: Return to Ship\n3: 2[Fight]\n4: 2[Tech]\n5: 2[Negotiate]\n6: 3 of any chosen Skill.", "flavourText": "" }, { "id": 45, "name": "Scrapper", "type": 10, "set": 0, "shop": 21, "cost": 200, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [43], "moral": false, "wanted": false, "title": "Low Life Vulture", "description": "+1 Part from Salvage Ops.", "flavourText": "" }, { "id": 46, "name": "Scrapper", "type": 10, "set": 0, "shop": 21, "cost": 200, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [43], "moral": false, "wanted": false, "title": "Low Life Vulture", "description": "+1 Part from Salvage Ops.", "flavourText": "" }, { "id": 47, "name": "Scrapper", "type": 10, "set": 0, "shop": 21, "cost": 200, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [43], "moral": false, "wanted": false, "title": "Low Life Vulture", "description": "+1 Part from Salvage Ops.", "flavourText": "" }, { "id": 48, "name": "Security Interface Pad", "type": 11, "set": 0, "shop": 21, "cost": 1000, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [34], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 49, "name": "Shepherd Book", "type": 10, "set": 0, "shop": 21, "cost": 0, "fight": 1, "tech": 0, "negotiate": 1, "keywords": [31], "professions": [47], "moral": true, "wanted": false, "title": "Secret Past", "description": "If Working Immoral Job, Shepherd Book must stay Onboard Ship.", "flavourText": "\"Wasn't born a Shepherd, Mal.\"" }, { "id": 50, "name": "Simon Tam", "type": 10, "set": 0, "shop": 21, "cost": 200, "fight": 0, "tech": 2, "negotiate": 0, "keywords": [32], "professions": [44], "moral": true, "wanted": true, "title": "\"I am Very Smart\"", "description": "+2 to Medic Checks.\n+2 to River Tam's \"Gifted\" rolls.", "flavourText": "" }, { "id": 51, "name": "Bester", "type": 10, "set": 0, "shop": 22, "cost": 100, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [43], "moral": false, "wanted": false, "title": "\"Genius\" Mechanic", "description": "On [Tech Tests], \"Thrillin' Heroics\" bonus dice do not apply.", "flavourText": "\"Genius. No one's ever called me that before. Shiny!\"" }, { "id": 52, "name": "Bridgit", "type": 10, "set": 0, "shop": 22, "cost": 300, "fight": 0, "tech": 1, "negotiate": 2, "keywords": [], "professions": [40, 41], "moral": false, "wanted": false, "title": "Deceptive", "description": "If Yolanda or Saffron are hired by anyone, Remove Bridgit from Play.", "flavourText": "\"But face it, Hubby. I'm really hot.\"" }, { "id": 53, "name": "Concealed Smuggling Compartments", "type": 12, "set": 0, "shop": 22, "cost": 1000, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "2 Additional Stash areas.\nUp to 2 Crew Onboard Ship may Ignore Alliance Wanted Crew rolls.", "flavourText": "" }, { "id": 54, "name": "Concealed Smuggling Compartments", "type": 12, "set": 0, "shop": 22, "cost": 1000, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "2 Additional Stash areas.\nUp to 2 Crew Onboard Ship may Ignore Alliance Wanted Crew rolls.", "flavourText": "" }, { "id": 55, "name": "Crow", "type": 10, "set": 0, "shop": 22, "cost": 200, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": true, "title": "Knife Fighter", "description": "+[Fight] When Carrying a Knife.\nMay not Carry a Firearm.", "flavourText": "\"You entered into an arrangement with Mister Niska. There is no mind-changing.\"" }, { "id": 56, "name": "Crow's Knife", "type": 11, "set": 0, "shop": 22, "cost": 200, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to add +2[Fight] to a [Fight Test], after rolling.", "flavourText": "" }, { "id": 57, "name": "Cry Baby", "type": 12, "set": 0, "shop": 22, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "When in a Sector with Alliance Cruiser, discard to ignore Alliance Cruiser's effects and move the Cruiser 1 Sector within Alliance Space.", "flavourText": "" }, { "id": 58, "name": "Fast Horses", "type": 11, "set": 0, "shop": 22, "cost": 200, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [36], "professions": [], "title": "", "description": "Discard to count as [TRANSPORT].", "flavourText": "" }, { "id": 59, "name": "Fast Horses", "type": 11, "set": 0, "shop": 22, "cost": 200, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [36], "professions": [], "title": "", "description": "Discard to count as [TRANSPORT].", "flavourText": "" }, { "id": 60, "name": "Glucklich Jia 642X", "type": 11, "set": 0, "shop": 22, "cost": 800, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [33, 35], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 61, "name": "Grange Brothers", "type": 10, "set": 0, "shop": 22, "cost": 200, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": true, "title": "Two of a Kind", "description": "May Carry 2 Gear.\nMust pass 2 Alliance Wanted Crew rolls to dodge capture.", "flavourText": "" }, { "id": 62, "name": "Gun Hand", "type": 10, "set": 0, "shop": 22, "cost": 100, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": false, "title": "Expendable", "description": "When Killed, discard instead of Removing from Play.", "flavourText": "\"There's just an acre of you fellas, isn't there?\" --Mal" }, { "id": 63, "name": "Gun Hand", "type": 10, "set": 0, "shop": 22, "cost": 100, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": false, "title": "Expendable", "description": "When Killed, discard instead of Removing from Play.", "flavourText": "\"There's just an acre of you fellas, isn't there?\" --Mal" }, { "id": 64, "name": "Kaylee", "type": 10, "set": 0, "shop": 22, "cost": 300, "fight": 0, "tech": 3, "negotiate": 0, "keywords": [], "professions": [43], "moral": true, "wanted": false, "title": "Natural Know How", "description": "May re-roll [Tech Tests].", "flavourText": "\"Don't know how. Machines just got workings and they talk to me.\"" }, { "id": 65, "name": "Kaylee's Reprogrammer", "type": 11, "set": 0, "shop": 22, "cost": 1000, "fight": 0, "tech": 2, "negotiate": 0, "keywords": [34], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 66, "name": "Lucy", "type": 10, "set": 0, "shop": 22, "cost": 200, "fight": 0, "tech": 0, "negotiate": 2, "keywords": [], "professions": [41], "moral": true, "wanted": false, "title": "Morale Booster", "description": "You may use an Action on your turn to remove Disgruntled from a Crew other than Lucy.", "flavourText": "" }, { "id": 67, "name": "Lund", "type": 10, "set": 0, "shop": 22, "cost": 200, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [], "professions": [47], "moral": false, "wanted": false, "title": "Cheap Shot", "description": "May use Gear in [Kosherized] [Fight Tests].", "flavourText": "\"I said you're a coward and a pisspot. Now what're you gonna do about it?\"" }, { "id": 68, "name": "Onboard Chop Shop", "type": 12, "set": 0, "shop": 22, "cost": 1600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "After any Salvage Op, take $500 and Load 1 Contraband.", "flavourText": "" }, { "id": 69, "name": "Onboard Chop Shop", "type": 12, "set": 0, "shop": 22, "cost": 1600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "After any Salvage Op, take $500 and Load 1 Contraband.", "flavourText": "" }, { "id": 70, "name": "Overcharged Grav Thruster", "type": 12, "set": 0, "shop": 22, "cost": 1000, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "+1 to Full Burn Range.", "flavourText": "" }, { "id": 71, "name": "Pistol", "type": 11, "set": 0, "shop": 22, "cost": 400, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [33], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 72, "name": "Pistol", "type": 11, "set": 0, "shop": 22, "cost": 400, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [33], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 73, "name": "Sky Hook", "type": 12, "set": 0, "shop": 22, "cost": 600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [36], "professions": [], "title": "", "description": "Requires Pilot to use.\nCounts as [TRANSPORT].\nAfter completing a Crime Job, Load 1 Contraband.", "flavourText": "" }, { "id": 74, "name": "Sky Hook", "type": 12, "set": 0, "shop": 22, "cost": 600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [36], "professions": [], "title": "", "description": "Requires Pilot to use.\nCounts as [TRANSPORT].\nAfter completing a Crime Job, Load 1 Contraband.", "flavourText": "" }, { "id": 75, "name": "Two-Fry", "type": 10, "set": 0, "shop": 22, "cost": 200, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": true, "title": "Dead-Eye", "description": "When Carrying a Sniper Rifle on Jobs, draw 1 fewer Misbehave Card, down to a minimum of 1.", "flavourText": "\"Always makes it quick and clean.\" --Patience" }, { "id": 76, "name": "Burgess's Hovering Bad-Ass Space Jeep", "type": 11, "set": 0, "shop": 23, "cost": 1600, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [33, 36], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 77, "name": "Burgess's Laser", "type": 11, "set": 0, "shop": 23, "cost": 1800, "fight": 3, "tech": 0, "negotiate": 0, "keywords": [30, 33], "professions": [], "title": "", "description": "Requires [Tech] to Carry.", "flavourText": "" }, { "id": 78, "name": "Doralee", "type": 10, "set": 0, "shop": 23, "cost": 100, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [42, 44], "moral": true, "wanted": false, "title": "Angry Mob", "description": "+[Fight] when you have at least 3 Hill Folk in Crew.", "flavourText": "\"Life sometimes takes you places you weren't expectin' to go.\"" }, { "id": 79, "name": "Explosive Charge", "type": 11, "set": 0, "shop": 23, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [30], "professions": [], "title": "", "description": "Discard to count as [EXPLOSIVES].\n--OR--\nDiscard to add +[Fight] to a [Fight Test], after rolling.", "flavourText": "" }, { "id": 80, "name": "Explosive Charge", "type": 11, "set": 0, "shop": 23, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [30], "professions": [], "title": "", "description": "Discard to count as [EXPLOSIVES].\n--OR--\nDiscard to add +[Fight] to a [Fight Test], after rolling.", "flavourText": "" }, { "id": 81, "name": "Fast Horses", "type": 11, "set": 0, "shop": 23, "cost": 200, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [36], "professions": [], "title": "", "description": "Discard to count as [TRANSPORT].", "flavourText": "" }, { "id": 82, "name": "Fast Horses", "type": 11, "set": 0, "shop": 23, "cost": 200, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [36], "professions": [], "title": "", "description": "Discard to count as [TRANSPORT].", "flavourText": "" }, { "id": 83, "name": "Fendris", "type": 10, "set": 0, "shop": 23, "cost": 100, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [47], "moral": false, "wanted": false, "title": "Henchman #2", "description": "If your Leader becomes Disgruntled, Disgruntle Fendris instead.", "flavourText": "" }, { "id": 84, "name": "GJ Flashkill Pod Grenades", "type": 11, "set": 0, "shop": 23, "cost": 1000, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [30], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 85, "name": "GJ Flashkill Pod Grenades", "type": 11, "set": 0, "shop": 23, "cost": 1000, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [30], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 86, "name": "Glucklich Jia 642X", "type": 11, "set": 0, "shop": 23, "cost": 800, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [33, 35], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 87, "name": "Glucklich Jia 642X", "type": 11, "set": 0, "shop": 23, "cost": 800, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [33, 35], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 88, "name": "Hill Folk", "type": 10, "set": 0, "shop": 23, "cost": 0, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [42], "moral": true, "wanted": false, "title": "Angry Mob", "description": "+[Fight] when you have at least 3 Hill Folk in Crew.", "flavourText": "" }, { "id": 89, "name": "Hill Folk", "type": 10, "set": 0, "shop": 23, "cost": 0, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [42], "moral": true, "wanted": false, "title": "Angry Mob", "description": "+[Fight] when you have at least 3 Hill Folk in Crew.", "flavourText": "" }, { "id": 90, "name": "Jayne", "type": 10, "set": 0, "shop": 23, "cost": 300, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": true, "title": "Public Relations", "description": "May Carry 3 Gear.", "flavourText": "\"Time for some thrillin' heroics.\"" }, { "id": 91, "name": "Knife", "type": 11, "set": 0, "shop": 23, "cost": 200, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 92, "name": "Pistol", "type": 11, "set": 0, "shop": 23, "cost": 400, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [33], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 93, "name": "Pistol", "type": 11, "set": 0, "shop": 23, "cost": 400, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [33], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 94, "name": "Saffron", "type": 10, "set": 0, "shop": 23, "cost": 300, "fight": 0, "tech": 1, "negotiate": 2, "keywords": [], "professions": [40, 41], "moral": false, "wanted": false, "title": "Deceptive", "description": "If Bridgit or Yolonda are hired by anyone, Remove Saffron from Play.", "flavourText": "\"You're assuming the payoff is the point.\"" }, { "id": 95, "name": "Skunk", "type": 10, "set": 0, "shop": 23, "cost": 200, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [47], "moral": false, "wanted": false, "title": "Firebug", "description": "+[Negotiate] when Carrying Explosives.", "flavourText": "\"Who needs that kind of paperwork? Skunk, light him on fire.\" --Womack" }, { "id": 96, "name": "Stark", "type": 10, "set": 0, "shop": 23, "cost": 100, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [42], "moral": true, "wanted": false, "title": "Angry Mob", "description": "+[Fight] when you have at least 3 Hill Folk in Crew.", "flavourText": "\"Look at what we got! It's a doctor! Got ourselves a doctor!\"" }, { "id": 97, "name": "Stitch", "type": 10, "set": 0, "shop": 23, "cost": 300, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": true, "title": "Cantankerous", "description": "Once per Job, may treat a [Negotiate Test] as a [Fight Test].", "flavourText": "\"You tell me, boy, or I'm a' cut off every last bit a' your good looks.\"" }, { "id": 98, "name": "The Patron", "type": 10, "set": 0, "shop": 23, "cost": 200, "fight": 1, "tech": 0, "negotiate": 1, "keywords": [], "professions": [42], "moral": true, "wanted": false, "title": "Angry Mob", "description": "+[Fight] when you have at least 3 Hill Folk in Crew.", "flavourText": "\"We will purge the Devil from her!\"" }, { "id": 99, "name": "\"Vera\"", "type": 11, "set": 0, "shop": 23, "cost": 1600, "fight": 2, "tech": 0, "negotiate": 1, "keywords": [33, 35], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 100, "name": "Zoe", "type": 10, "set": 0, "shop": 23, "cost": 300, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [], "professions": [47], "moral": true, "wanted": true, "title": "Dust Devil", "description": "May re-roll [Fight Tests].", "flavourText": "\"You're losing the higher ground here, sweet cakes.\"" }, { "id": 101, "name": "4WD Mule", "type": 11, "set": 0, "shop": 24, "cost": 1000, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [36], "professions": [], "title": "", "description": "After completing a Crime Job, Load 1 Cargo.", "flavourText": "" }, { "id": 102, "name": "\"Bona Fide\" Credentials", "type": 11, "set": 0, "shop": 24, "cost": 1000, "fight": 0, "tech": 0, "negotiate": 1, "keywords": [31], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 103, "name": "Cry Baby", "type": 12, "set": 0, "shop": 24, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "When in a Sector with Alliance Cruiser, discard to ignore Alliance Cruiser's effects and move the Cruiser 1 Sector within Alliance Space.", "flavourText": "" }, { "id": 104, "name": "Cry Baby", "type": 12, "set": 0, "shop": 24, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "When in a Sector with Alliance Cruiser, discard to ignore Alliance Cruiser's effects and move the Cruiser 1 Sector within Alliance Space.", "flavourText": "" }, { "id": 105, "name": "Enforcer", "type": 10, "set": 0, "shop": 24, "cost": 200, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": false, "title": "Intimidating", "description": "+[Negotiate] when Carrying a Firearm.", "flavourText": "" }, { "id": 106, "name": "Enforcer", "type": 10, "set": 0, "shop": 24, "cost": 200, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": false, "title": "Intimidating", "description": "+[Negotiate] when Carrying a Firearm.", "flavourText": "" }, { "id": 107, "name": "Explosive Charge", "type": 11, "set": 0, "shop": 24, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [30], "professions": [], "title": "", "description": "Discard to count as [EXPLOSIVES].\n--OR--\nDiscard to add +[Fight] to a [Fight Test], after rolling.", "flavourText": "" }, { "id": 108, "name": "Gun Hand", "type": 10, "set": 0, "shop": 24, "cost": 100, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": false, "title": "Expendable", "description": "When Killed, discard instead of Removing from Play.", "flavourText": "\"There's just an acre of you fellas, isn't there?\" --Mal" }, { "id": 109, "name": "Gun Hand", "type": 10, "set": 0, "shop": 24, "cost": 100, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": false, "title": "Expendable", "description": "When Killed, discard instead of Removing from Play.", "flavourText": "\"There's just an acre of you fellas, isn't there?\" --Mal" }, { "id": 110, "name": "Gun Hand", "type": 10, "set": 0, "shop": 24, "cost": 100, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": false, "title": "Expendable", "description": "When Killed, discard instead of Removing from Play.", "flavourText": "\"There's just an acre of you fellas, isn't there?\" --Mal" }, { "id": 111, "name": "Gun Hand", "type": 10, "set": 0, "shop": 24, "cost": 100, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": false, "title": "Expendable", "description": "When Killed, discard instead of Removing from Play.", "flavourText": "\"There's just an acre of you fellas, isn't there?\" --Mal" }, { "id": 112, "name": "Hastily Forged Documents", "type": 11, "set": 0, "shop": 24, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [31], "professions": [], "title": "", "description": "Discard to count as [FAKE ID].\n--OR--Discard to add +[Negotiate] to a [Negotiate Test], after rolling.", "flavourText": "" }, { "id": 113, "name": "Helen", "type": 10, "set": 0, "shop": 24, "cost": 200, "fight": 1, "tech": 0, "negotiate": 1, "keywords": [], "professions": [41], "moral": true, "wanted": true, "title": "Morale Booster", "description": "You may use an Action on your turn to remove Disgruntled from a Crew other than Helen.", "flavourText": "" }, { "id": 114, "name": "Improvised Hacking Rig", "type": 11, "set": 0, "shop": 24, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [34], "professions": [], "title": "", "description": "Discard to count as [HACKING RIG].\n--OR--\nDiscard to add +[Tech] to a [Tech Test], after rolling.", "flavourText": "" }, { "id": 115, "name": "Jayne's \"Cunning\" Hat", "type": 11, "set": 0, "shop": 24, "cost": 0, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "When Misbehaving, re-roll any Test result of 1.\nDoes not count towards Gear Limit.", "flavourText": "\"A man walks down the street in that hat, people know he's not afraid of anything.\" --Wash" }, { "id": 116, "name": "Jesse", "type": 10, "set": 0, "shop": 24, "cost": 200, "fight": 1, "tech": 1, "negotiate": 0, "keywords": [], "professions": [46], "moral": false, "wanted": true, "title": "Opportunist", "description": "+1 Contraband from Salvage Ops.", "flavourText": "" }, { "id": 117, "name": "Knife", "type": 11, "set": 0, "shop": 24, "cost": 200, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to add +[Fight] to a [Fight Test], after rolling.", "flavourText": "" }, { "id": 118, "name": "Pistol", "type": 11, "set": 0, "shop": 24, "cost": 400, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [33], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 119, "name": "Scrapper", "type": 10, "set": 0, "shop": 24, "cost": 200, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [46], "moral": false, "wanted": true, "title": "Dirty Leech", "description": "+2 Fuel from Salvage Ops.", "flavourText": "" }, { "id": 120, "name": "Scrapper", "type": 10, "set": 0, "shop": 24, "cost": 200, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [46], "moral": false, "wanted": true, "title": "Dirty Leech", "description": "+2 Fuel from Salvage Ops.", "flavourText": "" }, { "id": 121, "name": "Scrapper", "type": 10, "set": 0, "shop": 24, "cost": 200, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [46], "moral": false, "wanted": true, "title": "Dirty Leech", "description": "+2 Fuel from Salvage Ops.", "flavourText": "" }, { "id": 122, "name": "Security Interface Pad", "type": 11, "set": 0, "shop": 24, "cost": 1000, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [34], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 123, "name": "Shiny Neck Tie", "type": 11, "set": 0, "shop": 24, "cost": 800, "fight": 0, "tech": 0, "negotiate": 1, "keywords": [32], "professions": [], "title": "", "description": "", "flavourText": "" }, { "id": 124, "name": "Tracey", "type": 10, "set": 0, "shop": 24, "cost": 100, "fight": 1, "tech": 0, "negotiate": 1, "keywords": [], "professions": [41], "moral": false, "wanted": true, "title": "Unlucky", "description": "Whenever a Crew is Killed, Tracey must be Killed first.", "flavourText": "\"Oh, you're helping lots! Cause I needed a chest wound ...\"" }, { "id": 125, "name": "Wash", "type": 10, "set": 0, "shop": 24, "cost": 200, "fight": 0, "tech": 1, "negotiate": 1, "keywords": [], "professions": [46], "moral": true, "wanted": false, "title": "Hard Burn", "description": "+1 to Full Burn Range.", "flavourText": "\"Whoo! This kind of flyin' really wakes up a guy.\"" }, { "id": 126, "name": "Alliance Body Armor", "type": 11, "set": 1, "shop": 20, "cost": 400, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "If Crew carrying Armor is Killed, roll:\n1-3: Crew is Killed.\n4-6: Crew is not Killed.", "flavourText": "" }, { "id": 127, "name": "Alliance Body Armor", "type": 11, "set": 1, "shop": 20, "cost": 400, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "If Crew carrying Armor is Killed, roll:\n1-3: Crew is Killed.\n4-6: Crew is not Killed.", "flavourText": "" }, { "id": 128, "name": "Helmsman", "type": 10, "set": 1, "shop": 20, "cost": 200, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [46], "moral": true, "wanted": false, "title": "Alliance Training", "description": "Counts as Solid with Harken.", "flavourText": "" }, { "id": 129, "name": "Helmsman", "type": 10, "set": 1, "shop": 20, "cost": 200, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [46], "moral": true, "wanted": false, "title": "Alliance Training", "description": "Counts as Solid with Harken.", "flavourText": "" }, { "id": 130, "name": "Universal Encyclopedia", "type": 11, "set": 1, "shop": 20, "cost": 1200, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "From any location, you may use a Deal Action to look at the top 3 cards of the Misbehave Deck. Replace them in any order.", "flavourText": "" }, { "id": 131, "name": "Accountant", "type": 10, "set": 1, "shop": 21, "cost": 300, "fight": 0, "tech": 1, "negotiate": 1, "keywords": [], "professions": [41], "moral": false, "wanted": false, "title": "Cooking the Books", "description": "Whenever you take a Goal token, take $500.", "flavourText": "" }, { "id": 132, "name": "Cortex Uplink", "type": 11, "set": 1, "shop": 21, "cost": 1200, "fight": 0, "tech": 1, "negotiate": 1, "keywords": [], "professions": [], "title": "", "description": "From any location, you may use a Deal Action to Consider the top, face down card from any Contact. Accept or discard the Job as normal.", "flavourText": "" }, { "id": 133, "name": "Cortex Uplink", "type": 11, "set": 1, "shop": 21, "cost": 1200, "fight": 0, "tech": 1, "negotiate": 1, "keywords": [], "professions": [], "title": "", "description": "From any location, you may use a Deal Action to Consider the top, face down card from any Contact. Accept or discard the Job as normal.", "flavourText": "" }, { "id": 134, "name": "Gentleman's Dueling Sword", "type": 11, "set": 1, "shop": 21, "cost": 1000, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [32], "professions": [], "title": "", "description": "Counts as a Knife:\nDiscard to add +[Fight] to a [Fight Test], after rolling.", "flavourText": "" }, { "id": 135, "name": "The Fixer", "type": 10, "set": 1, "shop": 21, "cost": 300, "fight": 0, "tech": 1, "negotiate": 1, "keywords": [31], "professions": [41], "moral": false, "wanted": true, "title": "Shady Connections", "description": "", "flavourText": "" }, { "id": 136, "name": "Mud Dog ATV", "type": 11, "set": 1, "shop": 22, "cost": 1000, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [36], "professions": [], "title": "", "description": "After completing a Smuggling Job, Load 1 Contraband.", "flavourText": "" }, { "id": 137, "name": "Mud Dog ATV", "type": 11, "set": 1, "shop": 22, "cost": 1000, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [36], "professions": [], "title": "", "description": "After completing a Smuggling Job, Load 1 Contraband.", "flavourText": "" }, { "id": 138, "name": "Nandi's Gun Collection", "type": 11, "set": 1, "shop": 22, "cost": 1200, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [32, 33], "professions": [], "title": "", "description": "Reroll any [Negotiate Test] results of 1.", "flavourText": "" }, { "id": 139, "name": "The Specialist", "type": 10, "set": 1, "shop": 22, "cost": 300, "fight": 1, "tech": 1, "negotiate": 0, "keywords": [33, 35], "professions": [47], "moral": false, "wanted": true, "title": "Wet Work", "description": "May not Carry Gear.", "flavourText": "" }, { "id": 140, "name": "Two-Fry's Carbine", "type": 11, "set": 1, "shop": 22, "cost": 1200, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [33, 35], "professions": [], "title": "", "description": "Reroll any [Fight Test] results of 1.", "flavourText": "" }, { "id": 141, "name": "Elder Gommen", "type": 10, "set": 1, "shop": 23, "cost": 0, "fight": 0, "tech": 0, "negotiate": 2, "keywords": [], "professions": [42], "moral": true, "wanted": false, "title": "Devout", "description": "If Working Immoral Job, Elder Gommen must stay Onboard Ship.", "flavourText": "" }, { "id": 142, "name": "Head Goon", "type": 10, "set": 1, "shop": 23, "cost": 300, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": false, "title": "Goon Squad", "description": "+2[Negotiate] when you have at least 3 Mercs in Crew.", "flavourText": "" }, { "id": 143, "name": "\"The Best in the House\"", "type": 11, "set": 1, "shop": 23, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to remove Disgruntled from all Crew.", "flavourText": "" }, { "id": 144, "name": "Vehicle Mounted BFG", "type": 11, "set": 1, "shop": 23, "cost": 600, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [33], "professions": [], "title": "", "description": "Requires Transport.", "flavourText": "" }, { "id": 145, "name": "Vehicle Mounted BFG", "type": 11, "set": 1, "shop": 23, "cost": 600, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [33], "professions": [], "title": "", "description": "Requires Transport.", "flavourText": "" }, { "id": 146, "name": "Breaching Tool", "type": 11, "set": 1, "shop": 24, "cost": 1200, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [30], "professions": [], "title": "", "description": "+1 Contraband from Salvage Ops.", "flavourText": "" }, { "id": 147, "name": "Breaching Tool", "type": 11, "set": 1, "shop": 24, "cost": 1200, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [30], "professions": [], "title": "", "description": "+1 Contraband from Salvage Ops.", "flavourText": "" }, { "id": 148, "name": "Merchant", "type": 10, "set": 1, "shop": 24, "cost": 200, "fight": 0, "tech": 1, "negotiate": 1, "keywords": [], "professions": [], "moral": false, "wanted": false, "title": "Shrewd Trader", "description": "Whenever you sell Cargo to a Contact, take an extra $100 per Cargo.", "flavourText": "" }, { "id": 149, "name": "Merchant", "type": 10, "set": 1, "shop": 24, "cost": 200, "fight": 0, "tech": 1, "negotiate": 1, "keywords": [], "professions": [], "moral": false, "wanted": false, "title": "Shrewd Trader", "description": "Whenever you sell Cargo to a Contact, take an extra $100 per Cargo.", "flavourText": "" }, { "id": 150, "name": "Tall Playing Cards", "type": 11, "set": 1, "shop": 24, "cost": 0, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "[GAMBLING]\nDiscard to Use: Pay the Bank $500. Draw 5 Misbehave Cards. If at least 3 of the 5 cards have matching suits, take $1500.", "flavourText": "" }, { "id": 151, "name": "Mal's Pretty Floral Bonnet", "type": 11, "set": 2, "shop": 23, "cost": 0, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Crew carrying Bonnet ignores Wanted Crew Rolls.\nDoes not count towards Gear Limit.", "flavourText": "\"... if your hand touches metal, I swear by my pretty floral bonnet, I will end you.\" --Mal" }, { "id": 152, "name": "Wash's Lucky Dinosaurs", "type": 11, "set": 2, "shop": 24, "cost": 0, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "When Flying, re-roll any Test result of 1.\nDoes not count towards Gear Limit.", "flavourText": "\"This is a fertile land and we will thrive. We will rule over all this land and we will call it ... This Land.\" --Stegosaurus" }, { "id": 153, "name": "Agent McGinnis", "type": 10, "set": 3, "shop": 20, "cost": 0, "fight": 0, "tech": 1, "negotiate": 1, "keywords": [], "professions": [48], "moral": false, "wanted": false, "title": "Fed", "description": "Whenever you lose a [Showdown], Warrant Issued to Rival.\nBounty Bonus: +$500\nWill not work Illegal Jobs.", "flavourText": "\"By the authority of the Union of Allied Planets, you are hereby bound by law.\"" }, { "id": 154, "name": "Alliance Sonic Rifle", "type": 11, "set": 3, "shop": 20, "cost": 800, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Rivals using [Fight] in [Showdowns] must follow [Kosherized] rules.", "flavourText": "" }, { "id": 155, "name": "Alliance Sonic Rifle", "type": 11, "set": 3, "shop": 20, "cost": 800, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Rivals using [Fight] in [Showdowns] must follow [Kosherized] rules.", "flavourText": "" }, { "id": 156, "name": "Electronic Defense Suite", "type": 12, "set": 3, "shop": 20, "cost": 800, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Rivals boarding your ship may not use [Tech] Skill for Boarding Tests.\nSpend 1 Fuel to Evade Reaver Cutter. Ignore the effects of either the Reaver Cutter Nav Card or Contact Event.", "flavourText": "" }, { "id": 157, "name": "Electronic Defense Suite", "type": 12, "set": 3, "shop": 20, "cost": 800, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Rivals boarding your ship may not use [Tech] Skill for Boarding Tests.\nSpend 1 Fuel to Evade Reaver Cutter. Ignore the effects of either the Reaver Cutter Nav Card or Contact Event.", "flavourText": "" }, { "id": 158, "name": "The Guardian", "type": 10, "set": 3, "shop": 20, "cost": 300, "fight": 1, "tech": 1, "negotiate": 0, "keywords": [], "professions": [44, 47], "moral": false, "wanted": false, "title": "Security Pro", "description": "May re-roll [Showdown] Tests.", "flavourText": "\"We're all clear here, Councilor.\"" }, { "id": 159, "name": "Booby Traps", "type": 12, "set": 3, "shop": 21, "cost": 600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [30], "professions": [], "title": "", "description": "-2 to Rival's [Tech] Boarding Tests.\nIf Rival rolls a 1 when Boarding your ship, 1 of their Crew is Killed.\nDiscard to count as [EXPLOSIVES].", "flavourText": "" }, { "id": 160, "name": "Booby Traps", "type": 12, "set": 3, "shop": 21, "cost": 600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [30], "professions": [], "title": "", "description": "-2 to Rival's [Tech] Boarding Tests.\nIf Rival rolls a 1 when Boarding your ship, 1 of their Crew is Killed.\nDiscard to count as [EXPLOSIVES].", "flavourText": "" }, { "id": 161, "name": "Cryo Statis Unit", "type": 12, "set": 3, "shop": 21, "cost": 600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Rivals may not Jump your Bounties.\n1 Crew aboard ship may ignore Alliance Wanted Crew rolls.", "flavourText": "" }, { "id": 162, "name": "Dobson", "type": 10, "set": 3, "shop": 21, "cost": 0, "fight": 1, "tech": 1, "negotiate": 0, "keywords": [], "professions": [48], "moral": false, "wanted": false, "title": "Mole", "description": "In Alliance Space, you may move Alliance Cruiser to your Sector as a Fly Action.\nBounty Bonus: +$500\nWill not work Illegal Jobs.", "flavourText": "\"The Cruiser's en route for intercept so talk all you want. You got about 20 minutes.\"" }, { "id": 163, "name": "Dobson's Vector Pistol", "type": 11, "set": 3, "shop": 21, "cost": 600, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [33], "professions": [], "title": "", "description": "May be used in [Kosherized] Fights.\nDoes not count towards Gear Limit.", "flavourText": "" }, { "id": 164, "name": "Scan-Proof Shades", "type": 11, "set": 3, "shop": 21, "cost": 1000, "fight": 0, "tech": 0, "negotiate": 1, "keywords": [32], "professions": [], "title": "", "description": "Crew carrying Scan-Proof Shades may ignore Alliance Wanted Crew rolls.", "flavourText": "" }, { "id": 165, "name": "Bandit", "type": 10, "set": 3, "shop": 22, "cost": 200, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": true, "title": "Bird-Doggin'", "description": "When you complete a Piracy Job, steal $200 from the targeted Rival.", "flavourText": "" }, { "id": 166, "name": "Bandit", "type": 10, "set": 3, "shop": 22, "cost": 200, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": true, "title": "Bird-Doggin'", "description": "When you complete a Piracy Job, steal $200 from the targeted Rival.", "flavourText": "" }, { "id": 167, "name": "Deputy", "type": 10, "set": 3, "shop": 22, "cost": 0, "fight": 0, "tech": 0, "negotiate": 1, "keywords": [], "professions": [48], "moral": true, "wanted": false, "title": "Posse", "description": "+[Fight] in [Showdown]\nBounty Bonus: $300\nWill not work Illegal Jobs.", "flavourText": "\"If I ever find those people, they ain't never gonna see the inside of a jail.\" --Sheriff Bourne" }, { "id": 168, "name": "Mag-Grappler Launchers", "type": 12, "set": 3, "shop": 22, "cost": 800, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "+3[Tech] for Boarding Tests.\nAfter all Salvage Ops, Roll:\n[Tech Test] 8:\n1-7: Nothing Shiny.\n8+: Take 1 Ship Upgrade from any discard pile.", "flavourText": "" }, { "id": 169, "name": "\"Sash's\" Hand Cannon", "type": 11, "set": 3, "shop": 22, "cost": 800, "fight": 1, "tech": 0, "negotiate": 1, "keywords": [33], "professions": [], "title": "", "description": "Before rolling [Showdown], Disgruntle Rival's Leader.", "flavourText": "" }, { "id": 170, "name": "Sheriff Bourne", "type": 10, "set": 3, "shop": 22, "cost": 0, "fight": 0, "tech": 0, "negotiate": 2, "keywords": [], "professions": [48], "moral": true, "wanted": false, "title": "Jurisdiction", "description": "+2[Fight] for all Tests while in Border Space.\nBounty Bonus: $500\nWill not work Illegal Jobs.", "flavourText": "\"Alliance ain't much use to us out here on the border planets.\"" }, { "id": 171, "name": "Bandit", "type": 10, "set": 3, "shop": 23, "cost": 200, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": true, "title": "Bird-Doggin'", "description": "When you complete a Piracy Job, steal $200 from the targeted Rival.", "flavourText": "" }, { "id": 172, "name": "Bandit", "type": 10, "set": 3, "shop": 23, "cost": 200, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": true, "title": "Bird-Doggin'", "description": "When you complete a Piracy Job, steal $200 from the targeted Rival.", "flavourText": "" }, { "id": 173, "name": "Chari", "type": 10, "set": 3, "shop": 23, "cost": 200, "fight": 0, "tech": 0, "negotiate": 2, "keywords": [], "professions": [41], "moral": false, "wanted": false, "title": "Turncoat", "description": "In a [Showdown], you may force Rival to re-roll.", "flavourText": "\"Earned yourself quite a bag of silver, little kitten.\" --Rance Burgess" }, { "id": 174, "name": "Fed Marshal", "type": 10, "set": 3, "shop": 23, "cost": 0, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [48], "moral": false, "wanted": false, "title": "Posse", "description": "+[Fight] in [Showdown]\nBounty Bonus: +$300\nWill not work Illegal Jobs.", "flavourText": "\"You're under arrest for aiding and abetting federal fugitives.\" --Agent McGinnis" }, { "id": 175, "name": "\"Friendly\" Game of Cards", "type": 11, "set": 3, "shop": 23, "cost": 0, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "[GAMBLING]\nDiscard to Use: Pay Bank $300. Name a Suit. Flip over 3 Misbehave Cards. Take $500 and remove 1 Disgruntled token for each card that matches the named suit.", "flavourText": "" }, { "id": 176, "name": "Meadows", "type": 10, "set": 3, "shop": 23, "cost": 0, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "moral": true, "wanted": false, "title": "Hero Worship", "description": "Any time a Crew is Killed, Apprehended, or Seized by the Alliance, you may Kill Meadows instead.", "flavourText": "\"Don't you understand? He's come back! It's Jayne!\"" }, { "id": 177, "name": "Dalin", "type": 10, "set": 3, "shop": 24, "cost": 200, "fight": 0, "tech": 1, "negotiate": 1, "keywords": [], "professions": [], "moral": false, "wanted": true, "title": "Intel Broker", "description": "Once per Work Action, you may pay $200 to discard and re-draw a Misbehave Card.", "flavourText": "\"Our long ranges picked up a read on the other side of the world ...\"" }, { "id": 178, "name": "Early's Combat Armor", "type": 11, "set": 3, "shop": 24, "cost": 1000, "fight": 1, "tech": 1, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "If Crew carrying Armor is Killed, roll:\n1-3: Crew is Killed.\n4-6: Crew is not Killed.", "flavourText": "" }, { "id": 179, "name": "Early's Datascope", "type": 11, "set": 3, "shop": 24, "cost": 1000, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [34], "professions": [], "title": "", "description": "As a Work Action, you may reveal the top 3 cards of your current location's Supply Deck and place them all in the discard pile.", "flavourText": "" }, { "id": 180, "name": "Early's Pistol", "type": 11, "set": 3, "shop": 24, "cost": 600, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [33], "professions": [], "title": "", "description": "+2[Fight] in [Showdown]", "flavourText": "" }, { "id": 181, "name": "EVA Suit", "type": 12, "set": 3, "shop": 24, "cost": 600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "+[Tech] for Boarding Tests.\n+1 Cargo from Salvage Ops.\n1 Crew abord ship may ignore Alliance Wanted Crew rolls.", "flavourText": "" }, { "id": 182, "name": "EVA Suit", "type": 12, "set": 3, "shop": 24, "cost": 600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "+[Tech] for Boarding Tests.\n+1 Cargo from Salvage Ops.\n1 Crew abord ship may ignore Alliance Wanted Crew rolls.", "flavourText": "" }, { "id": 183, "name": "Cortland", "type": 10, "set": 4, "shop": 25, "cost": 300, "fight": 1, "tech": 1, "negotiate": 0, "keywords": [], "professions": [43, 47], "moral": false, "wanted": false, "title": "Laws Are for the Poor", "description": "May pay Bribes before any [Negiotiate Test].\nBribes may not be used in [Showdowns]", "flavourText": "" }, { "id": 184, "name": "Fruity Oaty Bar", "type": 11, "set": 4, "shop": 25, "cost": 100, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard before rolling to add +1 to any test result.\n--OR--\nDiscard to remove Disgruntled from the owner.", "flavourText": "" }, { "id": 185, "name": "Fruity Oaty Bar", "type": 11, "set": 4, "shop": 25, "cost": 100, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard before rolling to add +1 to any test result.\n--OR--\nDiscard to remove Disgruntled from the owner.", "flavourText": "" }, { "id": 186, "name": "Gun Hand", "type": 10, "set": 4, "shop": 25, "cost": 100, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": false, "title": "Expendable", "description": "When Killed, discard instead of Removing from Play.", "flavourText": "\"There's just an acre of you fellas, isn't there?\" --Mal" }, { "id": 187, "name": "Gun Hand", "type": 10, "set": 4, "shop": 25, "cost": 100, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": false, "title": "Expendable", "description": "When Killed, discard instead of Removing from Play.", "flavourText": "\"There's just an acre of you fellas, isn't there?\" --Mal" }, { "id": 188, "name": "Head Goon", "type": 10, "set": 4, "shop": 25, "cost": 300, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [], "professions": [45], "moral": false, "wanted": false, "title": "Goon Squad", "description": "+2[Negotiate] when you have at least 3 Mercs in Crew.", "flavourText": "" }, { "id": 189, "name": "Heist Intel", "type": 11, "set": 4, "shop": 25, "cost": 500, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "On your turn, discard to look at the top 3 cards of the Misbehave deck. Return them to the top of the deck, in any order, or discard all of them.", "flavourText": "" }, { "id": 190, "name": "Hull-Mounted Flak Gun", "type": 12, "set": 4, "shop": 25, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "When in a Sector with a Reaver Cutter, discard to ignore Reaver Cutter's effects and move that Reaver Cutter 1 Sector within Rim or Border Space.", "flavourText": "" }, { "id": 191, "name": "Hull-Mounted Flak Gun", "type": 12, "set": 4, "shop": 25, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "When in a Sector with a Reaver Cutter, discard to ignore Reaver Cutter's effects and move that Reaver Cutter 1 Sector within Rim or Border Space.", "flavourText": "" }, { "id": 192, "name": "Kaylee's Parasol", "type": 11, "set": 4, "shop": 25, "cost": 0, "fight": 0, "tech": 0, "negotiate": 1, "keywords": [], "professions": [], "title": "", "description": "Does not count towards Gear Limit.", "flavourText": "" }, { "id": 193, "name": "Long-Range Scanner Array", "type": 12, "set": 4, "shop": 25, "cost": 800, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "During a Fly Action you may resolve Reaver or Alliance Alert Tokens in adjacent Sectors.", "flavourText": "" }, { "id": 194, "name": "Love bot", "type": 11, "set": 4, "shop": 25, "cost": 1200, "fight": 0, "tech": 0, "negotiate": 1, "keywords": [], "professions": [40], "title": "", "description": "Counts as [Companion].\nYou may use an Action on your turn to remove Disgruntled from a Crew.", "flavourText": "" }, { "id": 195, "name": "Mal's Brown Coat", "type": 11, "set": 4, "shop": 25, "cost": 800, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Disgruntle Owner to add their [Fight] to a [Negotiate Test].\nDoes not count towards Gear Limit.", "flavourText": "" }, { "id": 196, "name": "Mal's Frontier Model B", "type": 11, "set": 4, "shop": 25, "cost": 800, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [33], "professions": [], "title": "", "description": "Before each [Fight Test[, remove Disgruntled from the Owner.", "flavourText": "" }, { "id": 197, "name": "Maque Tiles", "type": 11, "set": 4, "shop": 25, "cost": 200, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "[GAMBLING]\nDiscard to Use:\nChoose red or black.\nDraw 2 Misbehave Cards.\nIf both suits match choice, take $1200.", "flavourText": "" }, { "id": 198, "name": "MF-813 Flying Mule", "type": 11, "set": 4, "shop": 25, "cost": 1400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [36], "professions": [], "title": "", "description": "After completing a Crime Job, Load 6 Goods, minus 1 per Crew Working the Job.", "flavourText": "" }, { "id": 199, "name": "Modded Fuel Catalyzer", "type": 12, "set": 4, "shop": 25, "cost": 600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "When initiating a Full Burn, Spend 1 additional Fuel to add +2 to your Drive Core's Max Range this turn.", "flavourText": "" }, { "id": 200, "name": "Reaver-Flage", "type": 12, "set": 4, "shop": 25, "cost": 600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Ship may move into a Sector occupied by a Reaver Ship.\nDiscard after losing any Crew to the Reavers.", "flavourText": "" }, { "id": 201, "name": "Reaver-Flage", "type": 12, "set": 4, "shop": 25, "cost": 600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Ship may move into a Sector occupied by a Reaver Ship.\nDiscard after losing any Crew to the Reavers.", "flavourText": "" }, { "id": 202, "name": "Sheydra", "type": 10, "set": 4, "shop": 25, "cost": 300, "fight": 0, "tech": 1, "negotiate": 2, "keywords": [32], "professions": [40], "moral": true, "wanted": false, "title": "Composure", "description": "Once per Job, may treat a [Fight Test] as a [Negotiate Test].", "flavourText": "\"I'm not the one who had a torrid affair with a pirate.\"" }, { "id": 203, "name": "Simon's Sonic Stun Baton", "type": 11, "set": 4, "shop": 25, "cost": 1000, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [31], "professions": [], "title": "", "description": "Discard, after a [Fight Test], to count the roll as a 6 and add Thrillin' Heroics bonus roll.", "flavourText": "" }, { "id": 204, "name": "The Middleman", "type": 10, "set": 4, "shop": 25, "cost": 200, "fight": 1, "tech": 0, "negotiate": 1, "keywords": [], "professions": [41], "moral": false, "wanted": true, "title": "Facilitator", "description": "Whenever you sell Contraband to a Contact, take an extra $100 per Contraband sold.", "flavourText": "\"I'd advise we all just lay low for the moment.\"" }, { "id": 205, "name": "The Operative's Sword", "type": 11, "set": 4, "shop": 25, "cost": 1000, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Counts as a Knife.\nDiscard to count as an \"Ace\" for any Misbehave Card: Proceed.", "flavourText": "" }, { "id": 206, "name": "The Salesman", "type": 10, "set": 4, "shop": 25, "cost": 200, "fight": 0, "tech": 0, "negotiate": 1, "keywords": [], "professions": [41], "moral": false, "wanted": false, "title": "Wholesaler", "description": "As a Buy Action, discard to purchase a Ship Upgrade or Drive Core from any discard pile, at half price. This may be done from any location.", "flavourText": "" }, { "id": 207, "name": "Xunsu Whisper X11", "type": 13, "set": 4, "shop": 25, "cost": 1600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "range": 6, "title": "", "description": "1 Fuel to initiate Full Burn.\nWhenever a Reaver or Alliance Ship enters your current Sector, you may immediately roll a Dice:\n1-2: No effect.\n3-6: Evade.", "flavourText": "" }, { "id": 208, "name": "Med Foam", "type": 11, "set": 5, "shop": 20, "cost": 300, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to count as having made a successful Medic Check.", "flavourText": "" }, { "id": 209, "name": "Med Foam", "type": 11, "set": 5, "shop": 20, "cost": 300, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to count as having made a successful Medic Check.", "flavourText": "" }, { "id": 210, "name": "Nav Charts: Alliance Space", "type": 11, "set": 5, "shop": 20, "cost": 300, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to look at the top 5 Cards of the Alliance Space Nav Deck. Return the cards to the top of the Deck in any order.", "flavourText": "" }, { "id": 211, "name": "Nav Charts: Alliance Space", "type": 11, "set": 5, "shop": 20, "cost": 300, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to look at the top 5 Cards of the Alliance Space Nav Deck. Return the cards to the top of the Deck in any order.", "flavourText": "" }, { "id": 212, "name": "Yolanda's Pistol", "type": 11, "set": 5, "shop": 20, "cost": 400, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [33], "professions": [], "title": "", "description": "Discard to re-roll a [Fight Test]", "flavourText": "" }, { "id": 213, "name": "Hydraulic Docking Clamps", "type": 12, "set": 5, "shop": 21, "cost": 600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Crime Jobs also count as Salvage Ops.", "flavourText": "" }, { "id": 214, "name": "Mudder", "type": 10, "set": 5, "shop": 21, "cost": 100, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [49], "moral": false, "wanted": true, "title": "Indentured", "description": "Remove from Play at Harvest, Red Sun to take $500. This counts as Immoral.", "flavourText": "" }, { "id": 215, "name": "Mudder", "type": 10, "set": 5, "shop": 21, "cost": 100, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [49], "moral": false, "wanted": true, "title": "Indentured", "description": "Remove from Play at Harvest, Red Sun to take $500. This counts as Immoral.", "flavourText": "" }, { "id": 216, "name": "Nav Charts: Rim Space", "type": 11, "set": 5, "shop": 21, "cost": 300, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to look at the top 5 Cards of the Rim Space Nav Deck. Return the cards to the top of the Deck in any order.", "flavourText": "" }, { "id": 217, "name": "Nav Charts: Rim Space", "type": 11, "set": 5, "shop": 21, "cost": 300, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to look at the top 5 Cards of the Rim Space Nav Deck. Return the cards to the top of the Deck in any order.", "flavourText": "" }, { "id": 218, "name": "Border Space Nav Charts", "type": 11, "set": 5, "shop": 22, "cost": 300, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to look at the top 5 cards of the Border Space Nav Deck. Return the cards to the top of the Deck in any order.", "flavourText": "" }, { "id": 219, "name": "Border Space Nav Charts", "type": 11, "set": 5, "shop": 22, "cost": 300, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to look at the top 5 cards of the Border Space Nav Deck. Return the cards to the top of the Deck in any order.", "flavourText": "" }, { "id": 220, "name": "Emissions Recycler", "type": 12, "set": 5, "shop": 22, "cost": 800, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "+1 to Full Burn Range.\nIf you draw 2 'Big Black' Nav Cards in a row while Full Burning, you may take 1 Fuel. Limit once per Fly Action.", "flavourText": "" }, { "id": 221, "name": "Mudder", "type": 10, "set": 5, "shop": 22, "cost": 100, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [49], "moral": false, "wanted": true, "title": "Indentured", "description": "Remove from Play at Harvest, Red Sun to take $500. This counts as Immoral.", "flavourText": "" }, { "id": 222, "name": "Mudder", "type": 10, "set": 5, "shop": 22, "cost": 100, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [49], "moral": false, "wanted": true, "title": "Indentured", "description": "Remove from Play at Harvest, Red Sun to take $500. This counts as Immoral.", "flavourText": "" }, { "id": 223, "name": "Barkeep", "type": 10, "set": 5, "shop": 23, "cost": 200, "fight": 1, "tech": 0, "negotiate": 1, "keywords": [], "professions": [49], "moral": false, "wanted": true, "title": "Good Times", "description": "Giving your Crew Shore Leave at Supply Planets is free.", "flavourText": "" }, { "id": 224, "name": "Extra Ammo Clips", "type": 11, "set": 5, "shop": 23, "cost": 200, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to re-roll a [Fight Test].", "flavourText": "" }, { "id": 225, "name": "Extra Ammo Clips", "type": 11, "set": 5, "shop": 23, "cost": 200, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to re-roll a [Fight Test].", "flavourText": "" }, { "id": 226, "name": "Mudder", "type": 10, "set": 5, "shop": 23, "cost": 100, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [49], "moral": false, "wanted": true, "title": "Indentured", "description": "Remove from Play at Harvest, Red Sun to take $500. This counts as Immoral.", "flavourText": "" }, { "id": 227, "name": "Mudder", "type": 10, "set": 5, "shop": 23, "cost": 100, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [49], "moral": false, "wanted": true, "title": "Indentured", "description": "Remove from Play at Harvest, Red Sun to take $500. This counts as Immoral.", "flavourText": "" }, { "id": 228, "name": "Emissions Recycler", "type": 12, "set": 5, "shop": 24, "cost": 800, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "+1 to Full Burn Range.\nIf you draw 2 'Big Black' Nav Cards in a row while Full Burning, you may take 1 Fuel. Limit once per Fly Action.", "flavourText": "" }, { "id": 229, "name": "Nav Charts: Alliance Space", "type": 11, "set": 5, "shop": 24, "cost": 300, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to look at the top 5 cards of the Alliance Space Nav Deck. Return the cards to the top of the Deck in any order.", "flavourText": "" }, { "id": 230, "name": "Nav Charts: Border Space", "type": 11, "set": 5, "shop": 24, "cost": 300, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to look at the top 5 cards of the Border Space Nav Deck. Return the cards to the top of the Deck in any order.", "flavourText": "" }, { "id": 231, "name": "Nav Charts: Rim Space", "type": 11, "set": 5, "shop": 24, "cost": 300, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to look at the top 5 cards of the Rim Space Nav Deck. Return the cards to the top of the Deck in any order.", "flavourText": "" }, { "id": 232, "name": "Wash's Hawaiian Shirt", "type": 11, "set": 5, "shop": 24, "cost": 300, "fight": 0, "tech": 0, "negotiate": 1, "keywords": [], "professions": [], "title": "", "description": "Discard to reshuffle any 1 Nav Deck.", "flavourText": "" }, { "id": 233, "name": "Barkeep", "type": 10, "set": 5, "shop": 26, "cost": 200, "fight": 1, "tech": 0, "negotiate": 1, "keywords": [], "professions": [41], "moral": false, "wanted": true, "title": "Good Times", "description": "Giving your Crew Shore Leave at Supply Planets is free.", "flavourText": "" }, { "id": 234, "name": "Billiards Betting", "type": 11, "set": 5, "shop": 26, "cost": 500, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "[GAMBLING]\nWhen you Buy this card, roll two dice. Take $100 times the total of the dice and discard this card.", "flavourText": "" }, { "id": 235, "name": "Board Game Collection", "type": 12, "set": 5, "shop": 26, "cost": 200, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "You may use a Buy Action to give your Crew Shore Leave in any Sector.", "flavourText": "" }, { "id": 236, "name": "Busker", "type": 10, "set": 5, "shop": 26, "cost": 200, "fight": 0, "tech": 0, "negotiate": 1, "keywords": [], "professions": [41, 49], "moral": false, "wanted": true, "title": "Work the Crowd", "description": "When you Make-Work, take an extra $100.", "flavourText": "" }, { "id": 237, "name": "Emissions Recycler", "type": 12, "set": 5, "shop": 26, "cost": 800, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "+1 to Full Burn Range.\nIf you draw 2 \"Big Black\" Nav Cards in a row while Full Burning, you may take 1 Fuel. Limit once per Fly Action.", "flavourText": "" }, { "id": 238, "name": "Extra Ammo Clips", "type": 11, "set": 5, "shop": 26, "cost": 200, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to re-roll a [Fight Test].", "flavourText": "" }, { "id": 239, "name": "Fan Dancer", "type": 10, "set": 5, "shop": 26, "cost": 300, "fight": 0, "tech": 0, "negotiate": 2, "keywords": [], "professions": [41], "moral": false, "wanted": false, "title": "Mesmerize", "description": "Discard to ignore a Warrant Issued.", "flavourText": "" }, { "id": 240, "name": "Fess", "type": 10, "set": 5, "shop": 26, "cost": 300, "fight": 0, "tech": 2, "negotiate": 0, "keywords": [34], "professions": [], "moral": false, "wanted": false, "title": "Phone Home", "description": "From any location, you may use a Deal Action to Deal with Higgins. Accept or discard the Jobs normally.", "flavourText": "" }, { "id": 241, "name": "Foreman", "type": 10, "set": 5, "shop": 26, "cost": 200, "fight": 1, "tech": 1, "negotiate": 0, "keywords": [], "professions": [43, 49], "moral": false, "wanted": false, "title": "Mudder Manager", "description": "+2[Fight] when you have at least 3 Mudders in your crew.", "flavourText": "" }, { "id": 242, "name": "Grimey", "type": 10, "set": 5, "shop": 26, "cost": 0, "fight": 0, "tech": 0, "negotiate": 1, "keywords": [], "professions": [49], "moral": false, "wanted": false, "title": "Errand Boy", "description": "When you discard a Gear Card, roll a die. If you roll a 6, keep the Gear Card. Otherwise, discard it normally.", "flavourText": "" }, { "id": 243, "name": "Holder", "type": 10, "set": 5, "shop": 26, "cost": 200, "fight": 1, "tech": 1, "negotiate": 0, "keywords": [], "professions": [46], "moral": false, "wanted": true, "title": "Shanghai", "description": "When you Make-Work, you may also take a Fugitive Token.", "flavourText": "\"Stronger locks, thicker doors, keep everybody where they're s'posed to be.\" --Wright" }, { "id": 244, "name": "Hydraulic Docking Clamps", "type": 12, "set": 5, "shop": 26, "cost": 600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Crime Jobs also count as Salvage Ops.", "flavourText": "" }, { "id": 245, "name": "Inara's Bow", "type": 10, "set": 5, "shop": 26, "cost": 500, "fight": 2, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "When carried by a Companion, re-roll 1s in all [Fight Tests].", "flavourText": "" }, { "id": 246, "name": "Inara's Guild Papers", "type": 11, "set": 5, "shop": 26, "cost": 1000, "fight": 0, "tech": 0, "negotiate": 2, "keywords": [], "professions": [40], "title": "", "description": "Counts as [Companion].", "flavourText": "" }, { "id": 247, "name": "Jayne's Holdout Pistol", "type": 11, "set": 5, "shop": 26, "cost": 500, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [33], "professions": [], "title": "", "description": "May be used in [Kosherized] fights. Does not count towards Gear Limit.", "flavourText": "" }, { "id": 248, "name": "Labor Contract: Persephone", "type": 11, "set": 5, "shop": 26, "cost": 500, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "From any location, you may use a Buy Action to Hire 1 Crew from the Persephone Discard Pile for free.", "flavourText": "" }, { "id": 249, "name": "Labor Contract: Regina", "type": 11, "set": 5, "shop": 26, "cost": 500, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "From any location, you may use a Buy Action to Hire 1 Crew from the Regina Discard Pile for free.", "flavourText": "" }, { "id": 250, "name": "Labor Contract: Silverhold", "type": 11, "set": 5, "shop": 26, "cost": 500, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "From any location, you may use a Buy Action to Hire 1 Crew from the Silverhold Discard Pile for free.", "flavourText": "" }, { "id": 251, "name": "Labor Contract: Space Bazaar", "type": 11, "set": 5, "shop": 26, "cost": 500, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "From any location, you may use a Buy Action to Hire 1 Crew from the Space Bazaar Discard Pile for free.", "flavourText": "" }, { "id": 252, "name": "Mal's Sniper Rifle", "type": 11, "set": 5, "shop": 26, "cost": 800, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [33, 35], "professions": [], "title": "", "description": "Before each [Fight Test], remove Disgruntled from the Owner.", "flavourText": "" }, { "id": 253, "name": "Med Foam", "type": 11, "set": 5, "shop": 26, "cost": 300, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to count as having made a successful Medic Check.", "flavourText": "" }, { "id": 254, "name": "Roberta", "type": 10, "set": 5, "shop": 26, "cost": 300, "fight": 1, "tech": 0, "negotiate": 2, "keywords": [31], "professions": [40], "moral": false, "wanted": false, "title": "Make Nice", "description": "You may discard Roberta instead of losing Solid Rep with a Contact.", "flavourText": "" }, { "id": 255, "name": "Wash's Nav Charts", "type": 11, "set": 5, "shop": 26, "cost": 300, "fight": 0, "tech": 1, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard to look at the top 5 cards of ANY Nav Deck. Return the cards to the top of the Deck in any order.", "flavourText": "" }, { "id": 256, "name": "Zoe's Flak Jacket", "type": 11, "set": 5, "shop": 26, "cost": 200, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "If the Crew carrying this is Killed, discard this card instead.", "flavourText": "" }, { "id": 257, "name": "Zoe's Mare's Leg Rifle", "type": 11, "set": 5, "shop": 26, "cost": 800, "fight": 1, "tech": 0, "negotiate": 0, "keywords": [33], "professions": [], "title": "", "description": "When making a [Fight Test], roll two dice and use the highest.", "flavourText": "" }, { "id": 258, "name": "Caravan Pods", "type": 12, "set": 6, "shop": 21, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "2 Additional Cargo Hold areas. May only hold Passengers/Fugitives.\n+1 to Ship's Max Crew.", "flavourText": "" }, { "id": 259, "name": "Caravan Pods", "type": 12, "set": 6, "shop": 21, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "2 Additional Cargo Hold areas. May only hold Passengers/Fugitives.\n+1 to Ship's Max Crew.", "flavourText": "" }, { "id": 260, "name": "Full Mess Deck", "type": 12, "set": 6, "shop": 21, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "During your Fly Action you may discard a Cargo or Contraband to remove Disgruntled from all your Crew.", "flavourText": "" }, { "id": 261, "name": "Decoy Nav Sat Cluster", "type": 12, "set": 7, "shop": 24, "cost": 400, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard at the start of a Move Action to treat all Nav Cards that would normally move a Reaver or Alliance Ship as a \"Big Black\" card instead.", "flavourText": "" }, { "id": 262, "name": "Xunsu Emergency Ram Jets", "type": 12, "set": 7, "shop": 24, "cost": 600, "fight": 0, "tech": 0, "negotiate": 0, "keywords": [], "professions": [], "title": "", "description": "Discard and use an Action to initiate a Full Burn.\nMay be used in addition to a standard Move Action.", "flavourText": "" }];

},{}],7:[function(require,module,exports){
"use strict";
var option_1 = require("../models/option");
var flight_1 = require("../models/flight");
var boxset_1 = require("../adaptors/boxset");
var keywordset_1 = require("../adaptors/keywordset");
var job_1 = require("../models/job");
var professionset_1 = require("../adaptors/professionset");
// does not include spending cargo/ digsruntling
//keep flying is not considered an option here, this is only for analysing use of keywords, scores etc
// same with cruiser, patrol, etc
exports.flightData = [
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight('"Family" Dinner', boxset_1.BoxSet.Base, flight_1.Space.Alliance, [new option_1.Option()]),
    new flight_1.Flight("Alliance Entanglements", boxset_1.BoxSet.Base, flight_1.Space.Alliance, [option_1.Option.employerOnly("Harken")]),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("Alliance Cruiser", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("Abandoned Ship", boxset_1.BoxSet.Base, flight_1.Space.Alliance, [option_1.Option.jobTypeOnly(job_1.JobType.SalvageOp)]),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("Cruiser Patrol", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("What's Going on in The Engine Room", boxset_1.BoxSet.Base, flight_1.Space.Alliance, [option_1.Option.breakDown(7)]),
    new flight_1.Flight("Customs Inspection", boxset_1.BoxSet.Base, flight_1.Space.Alliance, [option_1.Option.employerOnly("Harken")]),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("Distress Signal", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("If'n the Coil Busts, We're Driftin'", boxset_1.BoxSet.Base, flight_1.Space.Alliance, [option_1.Option.breakDown(8)]),
    new flight_1.Flight("Cruiser Patrol", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("Cruiser Patrol", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("Cruiser Patrol", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("Minor Technical Difficulty", boxset_1.BoxSet.Base, flight_1.Space.Alliance, [option_1.Option.breakDown(5)]),
    new flight_1.Flight("Freighter Convoy", boxset_1.BoxSet.Base, flight_1.Space.Alliance, [option_1.Option.fight(8)]),
    new flight_1.Flight("Customs Inspection", boxset_1.BoxSet.Base, flight_1.Space.Alliance, [option_1.Option.employerOnly("Harken")]),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Alliance, []),
    new flight_1.Flight("Derelict Ship", boxset_1.BoxSet.Base, flight_1.Space.Border, [option_1.Option.jobTypeOnly(job_1.JobType.SalvageOp)]),
    new flight_1.Flight("Reaver Bait", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("Nav Hazard: Asteroid", boxset_1.BoxSet.Base, flight_1.Space.Border, [option_1.Option.professionOnly(professionset_1.ProfessionType.Pilot)]),
    new flight_1.Flight("Nav Hazard: Debris Field", boxset_1.BoxSet.Base, flight_1.Space.Border, [option_1.Option.professionOnly(professionset_1.ProfessionType.Pilot), new option_1.Option(null, job_1.JobType.SalvageOp, false, null, null, null, 6, null)]),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("Reavers on the hunt", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("Reavers on the hunt", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("Punctured fuel lines", boxset_1.BoxSet.Base, flight_1.Space.Border, [option_1.Option.breakDown(5)]),
    new flight_1.Flight("What's that noise", boxset_1.BoxSet.Base, flight_1.Space.Border, [option_1.Option.breakDown(6)]),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("Ghost ship", boxset_1.BoxSet.Base, flight_1.Space.Border, [new option_1.Option(null, job_1.JobType.SalvageOp, false, null, null, 7, null, null)]),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("Ruttin's drive core's blown", boxset_1.BoxSet.Base, flight_1.Space.Border, [option_1.Option.breakDown(8)]),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("Reavers on the hunt", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight('"Family" Dinner', boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("Reavers on the hunt", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("Derelict ship", boxset_1.BoxSet.Base, flight_1.Space.Border, [option_1.Option.jobTypeOnly(job_1.JobType.SalvageOp)]),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("Ship graveyard", boxset_1.BoxSet.Base, flight_1.Space.Border, [new option_1.Option(null, job_1.JobType.SalvageOp, false, null, null, null, 8, null)]),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("The Big Black", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("A rogue trader", boxset_1.BoxSet.Base, flight_1.Space.Border, [option_1.Option.fight(6)]),
    new flight_1.Flight("Reavers on the hunt", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("Reaver cutter", boxset_1.BoxSet.Base, flight_1.Space.Border, [option_1.Option.fight(8), option_1.Option.professionsOnly([professionset_1.ProfessionType.Pilot, professionset_1.ProfessionType.Mechanic])]),
    new flight_1.Flight("Reavers on the hunt", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("Reavers on the hunt", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("Reavers on the hunt", boxset_1.BoxSet.Base, flight_1.Space.Border, []),
    new flight_1.Flight("Scrapper ambush", boxset_1.BoxSet.Base, flight_1.Space.Border, [option_1.Option.tech(5), new option_1.Option(null, job_1.JobType.SalvageOp, false, null, null, 9, null, null)]),
    new flight_1.Flight("Alliance Interrogation", boxset_1.BoxSet.Kalidasa, flight_1.Space.Alliance, [option_1.Option.negotiate(8), option_1.Option.fight(8)]),
    new flight_1.Flight("Badger's Boys", boxset_1.BoxSet.Kalidasa, flight_1.Space.Alliance, [option_1.Option.negotiate(10), option_1.Option.fight(8)]),
    new flight_1.Flight("Persistent Pursuit", boxset_1.BoxSet.Kalidasa, flight_1.Space.Alliance, []),
    new flight_1.Flight("Persistent Pursuit", boxset_1.BoxSet.Kalidasa, flight_1.Space.Alliance, []),
    new flight_1.Flight("Regulated Salvage", boxset_1.BoxSet.Kalidasa, flight_1.Space.Alliance, [option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.FakeID)]),
    new flight_1.Flight("Alliance Checkpoint", boxset_1.BoxSet.Kalidasa, flight_1.Space.Alliance, [option_1.Option.employerOnly("Harken"), option_1.Option.negotiate(6)]),
    new flight_1.Flight("Broken Down Shuttle", boxset_1.BoxSet.Kalidasa, flight_1.Space.Alliance, []),
    new flight_1.Flight("Cruiser Patrol", boxset_1.BoxSet.Kalidasa, flight_1.Space.Alliance, []),
    new flight_1.Flight("Enhanced Enforcement", boxset_1.BoxSet.Kalidasa, flight_1.Space.Alliance, []),
    new flight_1.Flight("Fire in the Engine  Room", boxset_1.BoxSet.Kalidasa, flight_1.Space.Alliance, [option_1.Option.tech(8)]),
    new flight_1.Flight("He'll Come at You Sideways", boxset_1.BoxSet.Kalidasa, flight_1.Space.Alliance, []),
    new flight_1.Flight("Outbound Colonists", boxset_1.BoxSet.Kalidasa, flight_1.Space.Alliance, [option_1.Option.fight(6)]),
    new flight_1.Flight("Leave No Ground To Go To", boxset_1.BoxSet.Kalidasa, flight_1.Space.Alliance, []),
    new flight_1.Flight("Alliance Harassment", boxset_1.BoxSet.Kalidasa, flight_1.Space.Alliance, []),
    new flight_1.Flight("Persistent Pursuit", boxset_1.BoxSet.Kalidasa, flight_1.Space.Alliance, []),
    new flight_1.Flight("Persistent Pursuit", boxset_1.BoxSet.Kalidasa, flight_1.Space.Alliance, []),
    new flight_1.Flight("Passenger Unrest", boxset_1.BoxSet.Kalidasa, flight_1.Space.Alliance, [option_1.Option.professionOnly(professionset_1.ProfessionType.Soldier)]),
    new flight_1.Flight("Alliance Harassment", boxset_1.BoxSet.Kalidasa, flight_1.Space.Alliance, []),
    new flight_1.Flight("She's tore up plenty", boxset_1.BoxSet.Kalidasa, flight_1.Space.Border, [option_1.Option.breakDown(7), option_1.Option.professionOnly(professionset_1.ProfessionType.Mechanic)]),
    new flight_1.Flight("Space pox!", boxset_1.BoxSet.Kalidasa, flight_1.Space.Border, [option_1.Option.professionOnly(professionset_1.ProfessionType.Medic)]),
    new flight_1.Flight("An adrift transport", boxset_1.BoxSet.Kalidasa, flight_1.Space.Border, [option_1.Option.jobTypeOnly(job_1.JobType.SalvageOp)]),
    new flight_1.Flight("Hollowed out space liner", boxset_1.BoxSet.Kalidasa, flight_1.Space.Border, [option_1.Option.jobTypeOnly(job_1.JobType.SalvageOp)]),
    new flight_1.Flight("Leave No Ground To Go To", boxset_1.BoxSet.Kalidasa, flight_1.Space.Border, []),
    new flight_1.Flight("Persistent Pursuit", boxset_1.BoxSet.Kalidasa, flight_1.Space.Border, []),
    new flight_1.Flight("Persistent Pursuit", boxset_1.BoxSet.Kalidasa, flight_1.Space.Border, []),
    new flight_1.Flight("Enhanced enforcement", boxset_1.BoxSet.Kalidasa, flight_1.Space.Border, []),
    new flight_1.Flight("Enhanced enforcement", boxset_1.BoxSet.Kalidasa, flight_1.Space.Border, []),
    new flight_1.Flight("Patience's posse", boxset_1.BoxSet.Kalidasa, flight_1.Space.Border, [option_1.Option.employerOnly("Patience"), option_1.Option.negotiate(7), option_1.Option.fight(8)]),
    new flight_1.Flight("Reavers on the hunt", boxset_1.BoxSet.Kalidasa, flight_1.Space.Border, []),
    new flight_1.Flight("Persistent Pursuit", boxset_1.BoxSet.Kalidasa, flight_1.Space.Border, []),
    new flight_1.Flight("He'll Come at You Sideways", boxset_1.BoxSet.Kalidasa, flight_1.Space.Border, []),
    new flight_1.Flight("Reavers on the hunt", boxset_1.BoxSet.Kalidasa, flight_1.Space.Border, []),
    new flight_1.Flight("Persistent Pursuit", boxset_1.BoxSet.Kalidasa, flight_1.Space.Border, []),
    new flight_1.Flight("Dangerous salvage", boxset_1.BoxSet.Kalidasa, flight_1.Space.Border, [new option_1.Option(null, job_1.JobType.SalvageOp, false, null, null, null, 8, null)]),
    new flight_1.Flight("Storm's gettin' worse", boxset_1.BoxSet.Kalidasa, flight_1.Space.Border, [new option_1.Option(null, null, true, null, [professionset_1.ProfessionType.Pilot], null, 7, null)]),
    new flight_1.Flight("Fly by night casino ship", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, [option_1.Option.moral()]),
    new flight_1.Flight("Failure to communicate", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, [option_1.Option.professionOnly(professionset_1.ProfessionType.Soldier), option_1.Option.negotiate(7), option_1.Option.fight(8)]),
    new flight_1.Flight("Reaver cutter", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, [option_1.Option.professionsOnly([professionset_1.ProfessionType.Pilot, professionset_1.ProfessionType.Mechanic]), option_1.Option.fight(8)]),
    new flight_1.Flight("She's tore up plenty", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, [option_1.Option.breakDown(7), option_1.Option.professionOnly(professionset_1.ProfessionType.Mechanic)]),
    new flight_1.Flight("Enhanced enforcement", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, []),
    new flight_1.Flight("The big black", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, []),
    new flight_1.Flight("The big black", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, []),
    new flight_1.Flight("Reavers on the hunt", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, []),
    new flight_1.Flight("He'll come at you sideways", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, []),
    new flight_1.Flight("The big black", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, []),
    new flight_1.Flight("Persistent pursuit", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, []),
    new flight_1.Flight("Persistent pursuit", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, []),
    new flight_1.Flight("Persistent pursuit", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, []),
    new flight_1.Flight("Leave no ground to go to", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, []),
    new flight_1.Flight("Orphaned cargo pod", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, [option_1.Option.jobTypeOnly(job_1.JobType.SalvageOp)]),
    new flight_1.Flight("The big black", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, []),
    new flight_1.Flight("Alliance spy satellite", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, [option_1.Option.professionOnly(professionset_1.ProfessionType.Pilot)]),
    new flight_1.Flight("Persistent pursuit", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, []),
    new flight_1.Flight("Storm's gettin' worse", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, [new option_1.Option(null, null, true, null, [professionset_1.ProfessionType.Pilot], null, 7, null)]),
    new flight_1.Flight("The big black", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, []),
    new flight_1.Flight("The big black", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, []),
    new flight_1.Flight("The big black", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, []),
    new flight_1.Flight("Damaged spy satellite", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, [option_1.Option.jobTypeOnly(job_1.JobType.SalvageOp)]),
    new flight_1.Flight("First come first serve", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, [new option_1.Option(null, job_1.JobType.SalvageOp, false, null, null, null, 9, null)]),
    new flight_1.Flight("First rule of flying", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, [option_1.Option.moral(), option_1.Option.breakDown(null)]),
    new flight_1.Flight("Horowitz's trading scow", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, [option_1.Option.negotiate(10)]),
    new flight_1.Flight("The big black", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, []),
    new flight_1.Flight("Niska's ne'er-do-wells", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, [option_1.Option.employerOnly("Niska"), option_1.Option.negotiate(10), option_1.Option.fight(8)]),
    new flight_1.Flight("Reavers on the hunt", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, []),
    new flight_1.Flight("The big black", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, []),
    new flight_1.Flight("The big black", boxset_1.BoxSet.Kalidasa, flight_1.Space.Rim, []),
];

},{"../adaptors/boxset":1,"../adaptors/keywordset":3,"../adaptors/professionset":4,"../models/flight":17,"../models/job":18,"../models/option":20}],8:[function(require,module,exports){
"use strict";
var option_1 = require("../models/option");
var misbehave_1 = require("../models/misbehave");
var keywordset_1 = require("../adaptors/keywordset");
var professionset_1 = require("../adaptors/professionset");
exports.misbehaviourData = [
    new misbehave_1.MisbehaveCard("Old Vendetta", [option_1.Option.fight(6), option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.Transport)]),
    new misbehave_1.MisbehaveCard("Kill the Alarm", [option_1.Option.tech(5), option_1.Option.fight(7), option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.HackingRig)]),
    new misbehave_1.MisbehaveCard("The Sheriff's justice", [option_1.Option.negotiate(8), option_1.Option.fight(9), option_1.Option.professionOnly(professionset_1.ProfessionType.Companion)]),
    new misbehave_1.MisbehaveCard("Let's Go to the Crappy town where I'm a hero!", [option_1.Option.negotiate(6), option_1.Option.tech(6), option_1.Option.item("Jayne's Hat")]),
    new misbehave_1.MisbehaveCard("Ambush", [option_1.Option.fight(8), option_1.Option.crew(5), option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.SniperRifle)]),
    new misbehave_1.MisbehaveCard("A Rival Crew", [option_1.Option.fight(9)]),
    new misbehave_1.MisbehaveCard("Everything that's not Nailed Down", [option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.Transport)]),
    new misbehave_1.MisbehaveCard("Alliance Operatives", [option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.Transport), option_1.Option.fight(10), option_1.Option.item("River Tam")]),
    new misbehave_1.MisbehaveCard("Alliance Patrol", [option_1.Option.negotiate(8), option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.Transport), option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.FakeID)]),
    new misbehave_1.MisbehaveCard("Alliance Patrol", [option_1.Option.negotiate(8), option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.Transport), option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.FakeID)]),
    new misbehave_1.MisbehaveCard("It was the Best Day Ever", [option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.FancyDuds), option_1.Option.negotiate(6), option_1.Option.professionOnly(professionset_1.ProfessionType.Medic), option_1.Option.tech(6), option_1.Option.item("Simon Tam")]),
    new misbehave_1.MisbehaveCard("Knife Fight", [option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.Firearm), option_1.Option.fight(8), option_1.Option.item("Crow")]),
    new misbehave_1.MisbehaveCard("It Takes a Woman's Touch", [option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.FancyDuds), option_1.Option.negotiate(7), option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.HackingRig), option_1.Option.tech(7), option_1.Option.professionOnly(professionset_1.ProfessionType.Companion)]),
    new misbehave_1.MisbehaveCard("Kidnapped by Hill Folk", [option_1.Option.negotiate(8), option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.Firearm), option_1.Option.professionOnly(professionset_1.ProfessionType.HillFolk)]),
    new misbehave_1.MisbehaveCard("An Interesting Day", [option_1.Option.negotiate(12)]),
    new misbehave_1.MisbehaveCard("Locals in Need", [option_1.Option.fight(3)]),
    new misbehave_1.MisbehaveCard("Old Fashioned Shoot-Out", [option_1.Option.fight(8), option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.Transport)]),
    new misbehave_1.MisbehaveCard("Gun Play", [option_1.Option.fight(7)]),
    new misbehave_1.MisbehaveCard("Reaver Raid", [option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.Transport), option_1.Option.tech(5), option_1.Option.item("River Tam")]),
    new misbehave_1.MisbehaveCard("An Unexpected Opportunity", [option_1.Option.negotiate(7)]),
    new misbehave_1.MisbehaveCard("Tight Security", [option_1.Option.tech(7), option_1.Option.fight(9), option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.HackingRig)]),
    new misbehave_1.MisbehaveCard("The Local Law", [option_1.Option.negotiate(11), option_1.Option.fight(8)]),
    new misbehave_1.MisbehaveCard("A Formal Affair", [option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.FancyDuds), option_1.Option.negotiate(6), option_1.Option.professionOnly(professionset_1.ProfessionType.Companion)]),
    new misbehave_1.MisbehaveCard("We Need a Distraction", [option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.Explosives), option_1.Option.tech(7), option_1.Option.professionOnly(professionset_1.ProfessionType.Companion)]),
    new misbehave_1.MisbehaveCard("Denied Docking Rights", [option_1.Option.negotiate(9), option_1.Option.tech(6), option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.FakeID)]),
    new misbehave_1.MisbehaveCard("A Bit of Local Color", [option_1.Option.fight(6), option_1.Option.negotiate(6), option_1.Option.item("Wash")]),
    new misbehave_1.MisbehaveCard("Backwater Deputies", [option_1.Option.negotiate(9), option_1.Option.fight(7)]),
    new misbehave_1.MisbehaveCard("Alliance Patrol", [option_1.Option.negotiate(8), option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.Transport), option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.FakeID)]),
    new misbehave_1.MisbehaveCard("Time for Some Thrillin' Heroics", [option_1.Option.fight(7)]),
    new misbehave_1.MisbehaveCard("Kill the Alarm", [option_1.Option.tech(5), option_1.Option.fight(7), option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.HackingRig)]),
    new misbehave_1.MisbehaveCard("State of the Art Security System", [option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.HackingRig), option_1.Option.tech(9), option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.Explosives), option_1.Option.item("Alliance Ident Card")]),
    new misbehave_1.MisbehaveCard("Gun Play", [option_1.Option.fight(7)]),
    new misbehave_1.MisbehaveCard("A Little Job on the Side", [option_1.Option.tech(7)]),
    new misbehave_1.MisbehaveCard("Everything that's Not Nailed Down", [option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.Transport)]),
    new misbehave_1.MisbehaveCard("Keep a Low Profile", [option_1.Option.fight(6), option_1.Option.negotiate(9), option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.SniperRifle)]),
    new misbehave_1.MisbehaveCard("A Vote of No Confidence", []),
    new misbehave_1.MisbehaveCard("Tight Security", [option_1.Option.tech(7), option_1.Option.fight(9), option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.HackingRig)]),
    new misbehave_1.MisbehaveCard("Keep a Low Profile", [option_1.Option.fight(6), option_1.Option.negotiate(9), option_1.Option.keyWordOnly(keywordset_1.KeyWordSet.SniperRifle)]),
    new misbehave_1.MisbehaveCard("A Bit of Local Color", [option_1.Option.fight(6), option_1.Option.negotiate(6), option_1.Option.item("Wash")]),
    new misbehave_1.MisbehaveCard("The Local Law", [option_1.Option.negotiate(11), option_1.Option.fight(8)])
];

},{"../adaptors/keywordset":3,"../adaptors/professionset":4,"../models/misbehave":19,"../models/option":20}],9:[function(require,module,exports){
"use strict";
var Grouping = (function () {
    function Grouping(key, values) {
        this.Key = key;
        this.Values = values;
    }
    return Grouping;
}());
var GroupingCollection = (function () {
    function GroupingCollection() {
        this.Groupings = [];
    }
    GroupingCollection.prototype.push = function (grouping) {
        this.Groupings.push(grouping);
    };
    GroupingCollection.prototype.every = function (func) {
        return this.Groupings.every(func);
    };
    GroupingCollection.prototype.filter = function (func) {
        return this.Groupings.filter(func);
    };
    GroupingCollection.prototype.forEach = function (func) {
        return this.Groupings.forEach(func);
    };
    GroupingCollection.prototype.toObject = function (func) {
        var self = this;
        var obj = {};
        self.forEach(function (grouping) {
            obj[grouping.Key] = func ? func(grouping.Values) : grouping.Values;
        });
        return obj;
    };
    return GroupingCollection;
}());
var ArrayMethods = (function () {
    function ArrayMethods() {
    }
    ArrayMethods.GroupBy = function (items, func) {
        var groupings = new GroupingCollection();
        items.forEach(function (item) {
            var itemResult = func(item);
            if (groupings.every(function (g) { return g.Key != itemResult; })) {
                groupings.push(new Grouping(itemResult, []));
            }
            groupings.filter(function (g) { return g.Key == itemResult; })[0].Values.push(item);
        });
        return groupings;
    };
    return ArrayMethods;
}());
exports.ArrayMethods = ArrayMethods;

},{}],10:[function(require,module,exports){
"use strict";
function SplitBoxesToShops(boxes) {
    var shops = [];
    for (var i = 0; i < boxes.length; i++) {
        for (var j = 0; j < boxes[i].Shops.length; j++) {
            var currentShop = boxes[i].Shops[j];
            if (shops.every(function (sh) { return sh.Name != currentShop.Name; })) {
                shops.push(currentShop);
            }
            else {
                var existingShop = shops.filter(function (sh) { return sh.Name == currentShop.Name; })[0];
                existingShop.ShopCards = existingShop.ShopCards.concat(currentShop.ShopCards);
            }
        }
    }
    return shops;
}
exports.SplitBoxesToShops = SplitBoxesToShops;

},{}],11:[function(require,module,exports){
"use strict";
function getRandomColor() {
    var letters = '56789ABC';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 8)];
    }
    return color;
}
exports.getRandomColor = getRandomColor;

},{}],12:[function(require,module,exports){
"use strict";
var EnumTools = (function () {
    function EnumTools() {
    }
    EnumTools.getNamesAndValues = function (e) {
        return EnumTools.getNames(e).map(function (n) { return ({ name: n, value: e[n] }); });
    };
    EnumTools.getNames = function (e) {
        return EnumTools.getObjValues(e).filter(function (v) { return typeof v === "string"; });
    };
    EnumTools.getValues = function (e) {
        return EnumTools.getObjValues(e).filter(function (v) { return typeof v === "number"; });
    };
    EnumTools.getObjValues = function (e) {
        return Object.keys(e).map(function (k) { return e[k]; });
    };
    return EnumTools;
}());
exports.EnumTools = EnumTools;

},{}],13:[function(require,module,exports){
"use strict";
var Guid = (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());
exports.Guid = Guid;

},{}],14:[function(require,module,exports){
"use strict";
var boxset_1 = require("../adaptors/boxset");
var box_1 = require("../models/box");
var shopset_1 = require("../adaptors/shopset");
var shop_1 = require("../models/shop");
var cardtypeset_1 = require("../adaptors/cardtypeset");
var shopcard_1 = require("../models/shopcard");
var enum_1 = require("../lib/enum");
var ExternalCard = (function () {
    function ExternalCard() {
    }
    return ExternalCard;
}());
exports.ExternalCard = ExternalCard;
function LoadCardsFromJSON(cardsJSON) {
    var boxes = [];
    var values = enum_1.EnumTools.getValues(boxset_1.BoxSet);
    for (var i = 0; i < values.length; i++) {
        var boxSetName = boxset_1.BoxSetToString(i);
        boxes.push(new box_1.Box(boxSetName));
    }
    for (var i = 0; i < boxes.length; i++) {
        var shopValues = enum_1.EnumTools.getValues(shopset_1.ShopSet);
        var currentBox = boxes[i];
        for (var j = 0; j < shopValues.length; j++) {
            currentBox.addShop(new shop_1.Shop(shopset_1.ShopSetToString(shopValues[j])));
        }
    }
    for (var i = 0; i < cardsJSON.length; i++) {
        var relevantCard = cardsJSON[i];
        var relevantBox = boxes.filter(function (b) { return b.Name == boxset_1.BoxSetToString(boxset_1.GetBoxSet(relevantCard.set)); })[0];
        var relevantShop = relevantBox.Shops.filter(function (sh) { return sh.Name == shopset_1.ShopSetToString(shopset_1.GetShopSet(relevantCard.shop)); })[0];
        relevantShop.ShopCards.push(new shopcard_1.ShopCard(cardtypeset_1.GetCardType(relevantCard.type), relevantCard.description, relevantCard.cost, relevantCard.fight, relevantCard.tech, relevantCard.negotiate, relevantCard.title, relevantCard.flavourText, relevantCard.range, relevantCard.moral, relevantCard.wanted));
    }
    return boxes;
}
exports.LoadCardsFromJSON = LoadCardsFromJSON;

},{"../adaptors/boxset":1,"../adaptors/cardtypeset":2,"../adaptors/shopset":5,"../lib/enum":12,"../models/box":16,"../models/shop":21,"../models/shopcard":22}],15:[function(require,module,exports){
"use strict";
var cardloader_1 = require("./loaders/cardloader");
var boxes_1 = require("./lib/boxes");
var cardtypeset_1 = require("./adaptors/cardtypeset");
var array_1 = require("./lib/array");
var enum_1 = require("./lib/enum");
var guid_1 = require("./lib/guid");
var cards_1 = require("./data/cards");
var flights_1 = require("./data/flights");
var misbehaviours_1 = require("./data/misbehaviours");
var colour_1 = require("./lib/colour");
var flight_1 = require("./models/flight");
var professionset_1 = require("./adaptors/professionset");
var keywordset_1 = require("./adaptors/keywordset");
var job_1 = require("./models/job");
console.clear();
var boxes = cardloader_1.LoadCardsFromJSON(cards_1.cardData);
var shops = boxes_1.SplitBoxesToShops(boxes);
console.log("total cards by box:");
boxes.forEach(function (box) { return console.log(box.Name + ": " + box.totalCards()); });
console.log("\r\ntotal cost by box:");
boxes.forEach(function (box) { return console.log(box.Name + ": $" + box.totalCost()); });
console.log("\r\ntotal cards by shop:");
shops.forEach(function (shop) { return console.log(shop.Name + ": " + shop.ShopCards.length); });
console.log("\r\ntotal cost by shop:");
shops.forEach(function (shop) { return console.log(shop.Name + ": $" + shop.totalCost()); });
console.log("\r\naverage cost per card by shop:");
shops.forEach(function (shop) { return console.log(shop.Name + ": $" + (shop.totalCost() / shop.ShopCards.length)); });
function createSection(title, appendTo) {
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
var options = { colour: {} };
var cardTypeOptions = { colour: {} };
var shopCardTypes = enum_1.EnumTools.getValues(cardtypeset_1.ShopCardType);
shopCardTypes.forEach(function (type) { return cardTypeOptions.colour[cardtypeset_1.ShopCardTypeToString(type)] = colour_1.getRandomColor(); });
shops.forEach(function (shop) {
    countBarData[shop.Name] = shop.ShopCards.length;
    var colourSelection = colour_1.getRandomColor();
    options.colour[shop.Name] = colourSelection;
    costDistributions.push({ values: shop.ShopCards.map((function (sc) { return { x: sc.Cost }; })), colour: colourSelection });
    var cardDistribution = {
        shopName: shop.Name,
        cardTypeCount: array_1.ArrayMethods.GroupBy(shop.ShopCards, function (item) { return cardtypeset_1.ShopCardTypeToString(item.Type); }).toObject(function (vals) { return vals.length; })
    };
    cardDistributions.push(cardDistribution);
});
new Plot.Bar("countBar", countBarData, options);
new Plot.BoxAndWhisker("costDistributions", costDistributions, options);
function makePieBox(title, data, options, appendTo) {
    var graphBox = document.createElement("div");
    graphBox.className = "graph-box";
    var header = document.createElement("h3");
    header.innerText = title;
    graphBox.appendChild(header);
    var graphContainer = document.createElement("div");
    graphContainer.className = "graph-container";
    var canvas = document.createElement("canvas");
    var canvasId = guid_1.Guid.newGuid();
    canvas.id = canvasId;
    graphContainer.appendChild(canvas);
    graphBox.appendChild(graphContainer);
    appendTo.appendChild(graphBox);
    new Plot.Pie(canvasId, data, options);
}
var cardDistributionsDiv = createSection("Card type distributions", "deckresults");
cardDistributionsDiv.innerHTML = "";
cardDistributions.forEach(function (dist) { return makePieBox(dist.shopName, dist.cardTypeCount, cardTypeOptions, cardDistributionsDiv); });
var flightDistributionsDiv = createSection("Nav card distributions", "navresults");
var spaceGroups = array_1.ArrayMethods.GroupBy(flights_1.flightData, function (flight) { return flight_1.GetSpaceString(flight.Space); });
var flightSpaces = spaceGroups.toObject(function (vals) { return vals.length; });
makePieBox("Cards per deck", flightSpaces, { colour: { Rim: "red", Border: "orange", Alliance: "blue" } }, flightDistributionsDiv);
var allFlightOptionsSelected = flights_1.flightData.reduce(function (a, b) { return a.concat(b.Options); }, []).filter(function (f) { return !!f.SolidWithEmployer == true; });
var allSolidWithEmployerSelected = allFlightOptionsSelected.map(function (fo) { return fo.SolidWithEmployer; });
var data = array_1.ArrayMethods.GroupBy(allSolidWithEmployerSelected, function (s) { return s; }).toObject(function (vals) { return vals.length; });
makePieBox("Nav cards by solid rep", data, {}, flightDistributionsDiv);
var skillOptions = {
    colour: {
        Tech: "blue",
        Fight: "red",
        Negotiate: "green"
    }
};
var flightSkillDistributionsDiv = createSection("Nav cards by skillset", "navcardbreakdown");
spaceGroups.forEach(function (sg) {
    var data = {
        "Fight": sg.Values.filter(function (f) { return f.Options.filter(function (fo) { return fo.Fight; }).length; }).length,
        "Tech": sg.Values.filter(function (f) { return f.Options.filter(function (fo) { return fo.Tech; }).length; }).length,
        "Negotiate": sg.Values.filter(function (f) { return f.Options.filter(function (fo) { return fo.Negotiate; }).length; }).length,
    };
    makePieBox(sg.Key, data, skillOptions, flightSkillDistributionsDiv);
});
var professionOptions = {
    colour: {
        Companion: colour_1.getRandomColor(),
        Grifter: colour_1.getRandomColor(),
        "Hill Folk": colour_1.getRandomColor(),
        Mechanic: colour_1.getRandomColor(),
        Medic: colour_1.getRandomColor(),
        Merc: colour_1.getRandomColor(),
        Pilot: colour_1.getRandomColor(),
        Soldier: colour_1.getRandomColor(),
        Lawman: colour_1.getRandomColor(),
        Mudder: colour_1.getRandomColor()
    }
};
function optionsToProfessionDistribution(options) {
    var allProfessionsSelected = options.reduce(function (a, b) { return a.concat(b.Professions); }, [])
        .filter(function (a) { return a != null; });
    var data = array_1.ArrayMethods.GroupBy(allProfessionsSelected, function (ps) { return professionset_1.ProfessionTypeToString(ps); }).toObject(function (vals) { return vals.length; });
    return data;
}
var flightProfessionDistributionsDiv = createSection("Nav cards by profession", "navcardbreakdown");
spaceGroups.forEach(function (sg) {
    var allFlightOptionsSelected = sg.Values.reduce(function (a, b) { return a.concat(b.Options); }, []);
    makePieBox(sg.Key, optionsToProfessionDistribution(allFlightOptionsSelected), professionOptions, flightProfessionDistributionsDiv);
});
var keyWordSetOptions = {
    Explosives: colour_1.getRandomColor(),
    FakeID: colour_1.getRandomColor(),
    FancyDuds: colour_1.getRandomColor(),
    Firearm: colour_1.getRandomColor(),
    HackingRig: colour_1.getRandomColor(),
    SniperRifle: colour_1.getRandomColor(),
    Transport: colour_1.getRandomColor()
};
var breakdownVsSalvageopDiv = createSection("Salvage ops vs Breakdowns", "navcardbreakdown");
spaceGroups.forEach(function (sg) {
    var allFlightOptionsSelected = sg.Values.reduce(function (a, b) { return a.concat(b.Options); }, []);
    var data = {
        Breakdown: allFlightOptionsSelected.filter(function (f) { return f.IsBreakDown; }).length,
        "Salvage Op": allFlightOptionsSelected.filter(function (f) { return f.JobType == job_1.JobType.SalvageOp; }).length
    };
    makePieBox(sg.Key, data, { colour: { Breakdown: "blue", "Salvage Op": "red" } }, breakdownVsSalvageopDiv);
});
var misbehaveSection = createSection("Misbehave", "misbehaveresults");
var misbehaveProfessions = optionsToProfessionDistribution(misbehaviours_1.misbehaviourData.reduce(function (a, b) { return a.concat(b.Options); }, []));
makePieBox("Professions", misbehaveProfessions, professionOptions, misbehaveSection);
var misbehaveSkillsets = {
    "Fight": misbehaviours_1.misbehaviourData.reduce(function (a, mc) { return a + mc.Options.filter(function (o) { return o.Fight; }).length; }, 0),
    "Tech": misbehaviours_1.misbehaviourData.reduce(function (a, mc) { return a + mc.Options.filter(function (o) { return o.Tech; }).length; }, 0),
    "Negotiate": misbehaviours_1.misbehaviourData.reduce(function (a, mc) { return a + mc.Options.filter(function (o) { return o.Negotiate; }).length; }, 0)
};
makePieBox("Skill sets", misbehaveSkillsets, skillOptions, misbehaveSection);
var misbehaviourOptions = misbehaviours_1.misbehaviourData.reduce(function (a, b) { return a.concat(b.Options); }, []);
var misbehaveKeywords = array_1.ArrayMethods.GroupBy(misbehaviourOptions.filter(function (mo) { return mo.KeyWord; }), function (item) { return keywordset_1.KeyWordSetToString(item.KeyWord); }).toObject(function (vals) { return vals.length; });
makePieBox("Keywords", misbehaveKeywords, keyWordSetOptions, misbehaveSection);
var misbehaveItems = array_1.ArrayMethods.GroupBy(misbehaviourOptions.filter(function (mo) { return mo.Item; }), function (option) { return option.Item; }).toObject(function (vals) { return vals.length; });
makePieBox("Items", misbehaveItems, {}, misbehaveSection);

},{"./adaptors/cardtypeset":2,"./adaptors/keywordset":3,"./adaptors/professionset":4,"./data/cards":6,"./data/flights":7,"./data/misbehaviours":8,"./lib/array":9,"./lib/boxes":10,"./lib/colour":11,"./lib/enum":12,"./lib/guid":13,"./loaders/cardloader":14,"./models/flight":17,"./models/job":18}],16:[function(require,module,exports){
"use strict";
var Box = (function () {
    function Box(name) {
        var self = this;
        self.Name = name;
        self.Shops = [];
    }
    Box.prototype.addShop = function (shop) {
        this.Shops.push(shop);
    };
    Box.prototype.totalCards = function () {
        return this.Shops.reduce(function (a, b) { return a + b.ShopCards.length; }, 0);
    };
    Box.prototype.totalCost = function () {
        return this.Shops.reduce(function (a, b) { return a + b.totalCost(); }, 0);
    };
    return Box;
}());
exports.Box = Box;

},{}],17:[function(require,module,exports){
"use strict";
var Space;
(function (Space) {
    Space[Space["Alliance"] = 0] = "Alliance";
    Space[Space["Border"] = 1] = "Border";
    Space[Space["Rim"] = 2] = "Rim";
})(Space = exports.Space || (exports.Space = {}));
function GetSpaceString(space) {
    switch (space) {
        case Space.Alliance:
            return "Alliance";
        case Space.Border:
            return "Border";
        case Space.Rim:
            return "Rim";
    }
}
exports.GetSpaceString = GetSpaceString;
var Flight = (function () {
    function Flight(Name, BoxSet, Space, Options) {
        this.Name = Name;
        this.BoxSet = BoxSet;
        this.Space = Space;
        this.Options = Options;
    }
    return Flight;
}());
exports.Flight = Flight;

},{}],18:[function(require,module,exports){
"use strict";
var JobType;
(function (JobType) {
    JobType[JobType["SalvageOp"] = 0] = "SalvageOp";
})(JobType = exports.JobType || (exports.JobType = {}));
var Job = (function () {
    function Job() {
        var self = this;
        self.KeyWords = [];
    }
    return Job;
}());
exports.Job = Job;

},{}],19:[function(require,module,exports){
"use strict";
var boxset_1 = require("../adaptors/boxset");
var MisbehaveCard = (function () {
    function MisbehaveCard(Name, Options, boxSet) {
        if (boxSet === void 0) { boxSet = boxset_1.BoxSet.Base; }
        this.Name = Name;
        this.Options = Options;
        this.BoxSet = boxSet;
    }
    return MisbehaveCard;
}());
exports.MisbehaveCard = MisbehaveCard;

},{"../adaptors/boxset":1}],20:[function(require,module,exports){
"use strict";
var Option = (function () {
    function Option(SolidWithEmployer, JobType, IsBreakDown, KeyWord, Professions, fight, tech, negotiate) {
        if (IsBreakDown === void 0) { IsBreakDown = false; }
        this.SolidWithEmployer = SolidWithEmployer;
        this.JobType = JobType;
        this.IsBreakDown = IsBreakDown;
        this.KeyWord = KeyWord;
        this.Professions = Professions;
        this.Fight = fight;
        this.Tech = tech;
        this.Negotiate = negotiate;
    }
    Option.moral = function () {
        var option = new Option();
        option.Moral = true;
        return option;
    };
    Option.employerOnly = function (employer) {
        return new Option(employer);
    };
    Option.jobTypeOnly = function (jobType) {
        return new Option(null, jobType);
    };
    Option.keyWordOnly = function (keyWord) {
        return new Option(null, null, false, keyWord);
    };
    Option.professionOnly = function (profession) {
        return new Option(null, null, false, null, [profession]);
    };
    Option.professionsOnly = function (professions) {
        return new Option(null, null, false, null, professions);
    };
    Option.breakDown = function (techScore) {
        var option = new Option(null, null, true);
        option.Tech = techScore;
        return option;
    };
    Option.fight = function (fightScore) {
        var option = new Option();
        option.Fight = fightScore;
        return option;
    };
    Option.tech = function (techScore) {
        var option = new Option();
        option.Tech = techScore;
        return option;
    };
    Option.negotiate = function (negotiateScore) {
        var option = new Option();
        option.Negotiate = negotiateScore;
        return option;
    };
    Option.item = function (name) {
        var option = new Option();
        option.Item = name;
        return option;
    };
    Option.crew = function (count) {
        var option = new Option();
        option.CrewCount = count;
        return option;
    };
    return Option;
}());
exports.Option = Option;

},{}],21:[function(require,module,exports){
"use strict";
var Shop = (function () {
    function Shop(name) {
        var self = this;
        self.Name = name;
        self.ShopCards = [];
    }
    Shop.prototype.totalCost = function () {
        return this.ShopCards.reduce(function (a, b) { return a + b.Cost; }, 0);
    };
    return Shop;
}());
exports.Shop = Shop;

},{}],22:[function(require,module,exports){
"use strict";
var ShopCard = (function () {
    function ShopCard(type, description, cost, fight, tech, negotiate, title, flavourText, range, moral, wanted) {
        var self = this;
        self.Type = type;
        self.Description = description;
        self.KeyWords = [];
        self.Cost = cost;
        self.Fight = fight;
        self.Tech = tech;
        self.Negotiate = negotiate;
        self.Title = title;
        self.Professions = [];
        self.FlavourText = flavourText;
        self.Range = range;
        self.Moral = moral;
        self.Wanted = wanted;
    }
    return ShopCard;
}());
exports.ShopCard = ShopCard;

},{}]},{},[15]);
