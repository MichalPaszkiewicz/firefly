import {DriveCore} from "./drivecore";

export class Ship{

    Name: string;
    MaxCrew: number;
    Cost: number;
    DriveCore: DriveCore;
    CanChangeDriveCore: boolean;
    UpgradeSlots: number;
    MaxDoubleCargo: number;
    MaxDoubleStash: number;
    MaxSingleCargo: number;
    MaxSingleStash: number;
    Details: string;

    constructor(name: string, maxCrew: number, cost: number, 
                maxDoubleCargo: number, maxDoubleStash: number, maxSingleCargo: number, maxSingleStash: number, 
                details: string, startingDriveCore: DriveCore, upgradeSlots: number, canChangeDriveCore = true){
        var self = this;
        self.Name = name;
        self.MaxCrew = maxCrew;
        self.Cost = cost;
        self.MaxDoubleCargo = maxDoubleCargo;
        self.MaxDoubleStash = maxDoubleStash;
        self.MaxSingleCargo = maxSingleCargo;
        self.MaxSingleStash = maxSingleStash;
        self.Details = details;
        self.DriveCore = startingDriveCore;
        self.CanChangeDriveCore = canChangeDriveCore;
        self.UpgradeSlots = upgradeSlots;
    }

    totalHold(){
        var self = this;
        return  2 * self.MaxDoubleCargo + 
                2 * self.MaxDoubleStash +
                self.MaxSingleCargo +
                self.MaxSingleStash;
    }

}