import {BoxSet} from "../adaptors/boxset";
import {KeyWordSet} from "../adaptors/keywordset";
import {ProfessionType} from "../adaptors/professionset";
import {JobType} from "./job";
import {Option} from "./option";
import {IHaveOptions} from "../interfaces/ihaveoptions";

export class MisbehaveCard implements IHaveOptions{

    BoxSet:  BoxSet;

    constructor(public Name: string, public Options: Option[], boxSet = BoxSet.Base){
        this.BoxSet = boxSet;
    }

}