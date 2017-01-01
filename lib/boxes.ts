import {Box} from "../models/box";
import {Shop} from "../models/shop";

export function SplitBoxesToShops(boxes: Box[]): Shop[]{
    var shops: Shop[] = [];

    for(var i = 0; i < boxes.length; i++){
        for(var j = 0; j < boxes[i].Shops.length; j++){
            var currentShop = boxes[i].Shops[j];

            if(shops.every(sh => sh.Name != currentShop.Name)){
                shops.push(currentShop);
            }
            else{
                var existingShop = shops.filter(sh => sh.Name == currentShop.Name)[0];
                existingShop.ShopCards = existingShop.ShopCards.concat(currentShop.ShopCards);
            }
        }
    }

    return shops;
}
