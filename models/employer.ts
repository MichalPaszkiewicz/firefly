import {Job} from "./job";

export class Employer{

    Name: string;
    Jobs: Job[];
    ContrabandPrice: number;
    CargoPrice: number;
    
    constructor(name: string, contrabandPrice: number, cargoPrice: number){
        var self = this;
        self.Name = name;
        self.ContrabandPrice = contrabandPrice;
        self.CargoPrice = cargoPrice;
    }

    totalJobs(){
        return this.Jobs.length;
    }
}