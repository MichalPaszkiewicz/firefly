export enum ShopCardType{
    Crew,
    Gear,
    ShipUpgrade,
    DriveCore
}

export function GetCardType(num: number){
    return num - 10;
}

export function ShopCardTypeToString(shopCardType: ShopCardType){
    switch(shopCardType){
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