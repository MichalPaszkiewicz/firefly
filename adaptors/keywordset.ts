export enum KeyWordSet{
    Explosives,
    FakeID,
    FancyDuds,
    Firearm,
    HackingRig,
    SniperRifle,
    Transport
}

export function GetKeyWordSet(num: number): KeyWordSet{
    return num - 30; 
}

export function KeyWordSetToString(keyWordSet: KeyWordSet){
    switch(keyWordSet){
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