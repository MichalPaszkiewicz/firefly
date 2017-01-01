import {BoxSet, BoxSetToString, GetBoxSet} from "../adaptors/boxset";
import {Box} from "../models/box";
import {ShopSet, GetShopSet, ShopSetToString} from "../adaptors/shopset";
import {Shop} from "../models/shop";
import {GetCardType, ShopCardTypeToString, ShopCardType} from "../adaptors/cardtypeset";
import {ShopCard} from "../models/shopcard";
import {EnumTools} from "../lib/enum";

export class ExternalCard{
    id: number;
    name: string;
    type: number;
    set: number;
    shop: number;
    cost: number;
    fight: number;
    tech: number;
    negotiate: number;
    keywords: string[];
    professions: string[];
    title: string;
    description: string;
    flavourText: string;
    range: number;
    moral: boolean;
    wanted: boolean;
}

export function LoadCardsFromJSON(cardsJSON: ExternalCard[]){
    var boxes: Box[] = [];
    var values: number[] = EnumTools.getValues(BoxSet);

    for(var i = 0; i < values.length; i++){
        var boxSetName = BoxSetToString(i);
        boxes.push(new Box(boxSetName));
    }

    for(var i = 0; i < boxes.length; i++){
        var shopValues: number[] = EnumTools.getValues(ShopSet);
        var currentBox = boxes[i];
        for(var j = 0; j < shopValues.length; j++){
            currentBox.addShop(new Shop(ShopSetToString(shopValues[j])));
        }
    }

    for(var i = 0; i < cardsJSON.length; i++){
        var relevantCard = cardsJSON[i];
        var relevantBox = boxes.filter(b => b.Name == BoxSetToString(GetBoxSet(relevantCard.set)))[0];
        var relevantShop = relevantBox.Shops.filter(sh => sh.Name == ShopSetToString(GetShopSet(relevantCard.shop)))[0];

        relevantShop.ShopCards.push(
            new ShopCard(GetCardType(relevantCard.type), 
            relevantCard.description,
            relevantCard.cost,
            relevantCard.fight,
            relevantCard.tech,
            relevantCard.negotiate,
            relevantCard.title,
            relevantCard.flavourText,
            relevantCard.range,
            relevantCard.moral,
            relevantCard.wanted));
    }

    return boxes;
}