export enum ProfessionType{
    Companion,
    Grifter,
    HillFolk,
    Mechanic,
    Medic,
    Merc,
    Pilot,
    Soldier,
    Lawman,
    Mudder    
}

export function GetProfessionType(num: number){
    return num - 40;
}

export function ProfessionTypeToString(professionType: ProfessionType){
    switch(professionType){
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