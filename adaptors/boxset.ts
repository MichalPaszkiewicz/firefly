export enum BoxSet{
    Base,
    BreakinAtmo,
    Promo,
    PiratesAndBountyHunters,
    BlueSun,
    Kalidasa,
    Esmeralda,
    Jetwash
}

export function GetBoxSet(num: number): BoxSet{
    return num;
} 

export function BoxSetToString(boxSet: BoxSet){
    switch(boxSet){
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