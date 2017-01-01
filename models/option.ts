import {KeyWordSet} from "../adaptors/keywordset";
import {ProfessionType} from "../adaptors/professionset";
import {JobType} from "./job";

export class Option{

    Fight: number;
    Tech: number;
    Negotiate: number;
    Moral?: boolean;
    Item: string;
    CrewCount: number;

    constructor(public SolidWithEmployer?: string, 
                public JobType?: JobType, 
                public IsBreakDown: boolean = false, 
                public KeyWord?: KeyWordSet,
                public Professions? : ProfessionType[],
                fight?: number,
                tech?: number,
                negotiate?: number){
        this.Fight = fight;
        this.Tech = tech;
        this.Negotiate = negotiate;
    }

    static moral(){
        var option = new Option();
        option.Moral = true;
        return option;
    }

    static employerOnly(employer: string){
        return new Option(employer);
    }

    static jobTypeOnly(jobType: JobType){
        return new Option(null, jobType);
    }

    static keyWordOnly(keyWord: KeyWordSet){
        return new Option(null, null, false, keyWord);
    }

    static professionOnly(profession: ProfessionType){
        return new Option(null, null, false, null, [profession]);
    }

    static professionsOnly(professions: ProfessionType[]){
        return new Option(null, null, false, null, professions);
    }

    static breakDown(techScore: number){
        var option = new Option(null, null, true);
        option.Tech = techScore;
        return option;
    }

    static fight(fightScore: number){
        var option = new Option();
        option.Fight = fightScore;
        return option;
    }

    static tech(techScore: number){
        var option = new Option();
        option.Tech = techScore;
        return option;
    }

    static negotiate(negotiateScore: number){
        var option = new Option();
        option.Negotiate = negotiateScore;
        return option;
    }

    static item(name: string){
        var option = new Option();
        option.Item = name;
        return option;
    }

    static crew(count: number){
        var option = new Option();
        option.CrewCount = count;
        return option;
    }
} 