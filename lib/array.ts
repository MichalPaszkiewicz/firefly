class Grouping{

    Key: any;
    Values: any[];

    constructor(key: any, values: any[]){
        this.Key = key;
        this.Values = values;
    }

}

class GroupingCollection{

    Groupings: Grouping[];

    constructor(){
        this.Groupings = [];
    }

    push(grouping: Grouping){
        this.Groupings.push(grouping);
    }
    
    every(func: (item: Grouping) => boolean){
        return this.Groupings.every(func);
    }

    filter(func: (item: Grouping) => boolean){
        return this.Groupings.filter(func);
    }

    forEach(func: (item: Grouping) => void){
        return this.Groupings.forEach(func);
    }

    toObject(func?: (values) => any){
        var self = this;
        var obj = {};

        self.forEach(grouping => {
            obj[grouping.Key] = func ? func(grouping.Values) : grouping.Values;
        });

        return obj;
    }


}

export class ArrayMethods{

    static GroupBy(items: any[], func: (item: any) => any){
        var groupings : GroupingCollection = new GroupingCollection();

        items.forEach(item => {
            var itemResult = func(item);
            if(groupings.every(g => g.Key != itemResult)){
                groupings.push(new Grouping(itemResult, []));
            }
            groupings.filter(g => g.Key == itemResult)[0].Values.push(item);
        });
        return groupings;
    }

}