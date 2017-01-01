import {ShopCard} from "./shopcard";

export class Shop{

    Name: string;
    ShopCards: ShopCard[];

    constructor(name: string){
        var self = this;
        self.Name = name;
        self.ShopCards = [];
    }

    totalCost(): number{
        return this.ShopCards.reduce((a,b) => a + b.Cost, 0);
    }

}