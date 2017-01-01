import {ShopCardType} from "../adaptors/cardtypeset";
import {ProfessionType} from "../adaptors/professionset";

export class ShopCard{

    Type: ShopCardType;
    Description: string;
    KeyWords: string[];
    Cost: number;
    Fight: number;
    Tech: number;
    Negotiate: number;
    Title: string;
    Professions: ProfessionType[];
    FlavourText: string;
    Range: number;
    Moral: boolean;
    Wanted: boolean;

    constructor(type: ShopCardType, description: string, cost: number, fight: number, tech: number, negotiate: number, title: string, flavourText: string, range: number, moral: boolean, wanted: boolean){
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

}