import {Ship} from "./ship";
import {Captain} from "./captain";
import {DriveCore} from "./drivecore";
import {Employer} from "./employer";
import {Shop} from "./shop";

export class Box{

    Name: string;
    Ships: Ship[];
    Captains: Captain[];
    DriveCores: DriveCore[];
    Employers: Employer[];
    Shops: Shop[];

    constructor(name: string){
        var self = this;
        self.Name = name;
        self.Shops = [];
    }

    addShop(shop: Shop){
        this.Shops.push(shop);
    }

    totalCards(){
        return this.Shops.reduce((a,b) => a + b.ShopCards.length, 0);
    }

    totalCost(){
        return this.Shops.reduce((a,b) => a + b.totalCost(), 0);
    }

}