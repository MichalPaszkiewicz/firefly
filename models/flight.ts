import {BoxSet} from "../adaptors/boxset";
import {Option} from "./option";
import {IHaveOptions} from "../interfaces/ihaveoptions";

export enum Space{
    Alliance,
    Border,
    Rim
}

export function GetSpaceString(space: Space){
    switch(space){
        case Space.Alliance:
            return "Alliance";
        case Space.Border:
            return "Border";
        case Space.Rim:
            return "Rim";
    }
}


export class Flight implements IHaveOptions{
    constructor(public Name: string, public BoxSet: BoxSet, public Space: Space, public Options: Option[]){}
}