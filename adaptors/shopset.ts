export enum ShopSet{
    Osiris,
    Persephone,
    Regina,
    Silverhold,
    SpaceBazaar,
    Meridian,
    Beaumonde
}

export function GetShopSet(num: number): ShopSet{
    return num - 20;
}

export function ShopSetToString(shopSet: ShopSet){
    switch(shopSet){
        case ShopSet.Osiris:
            return "Osiris";
        case ShopSet.Persephone:
            return "Persephone";
        case ShopSet.Regina:
            return "Regina";
        case ShopSet.Silverhold:
            return "Silverhold";
        case ShopSet.SpaceBazaar:
            return "Space Bazaar";
        case ShopSet.Meridian:
            return "Meridian";
        case ShopSet.Beaumonde:
            return "Beaumonde";
        default: 
            return "Unknown";
    }
}