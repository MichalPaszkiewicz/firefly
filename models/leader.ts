import {ProfessionType} from "../adaptors/professionset"
import {BoxSet} from "../adaptors/boxset";

export class Leader{
    constructor(
        public BoxSet: BoxSet,
        public Name: string,
        public Title: string,        
        public Description: string,
        public KeyWords: string[],
        public Fight: number,
        public Tech: number,
        public Negotiate: number,
        public Professions: ProfessionType[],
        public FlavourText: string,
        public Moral: boolean
    ){

    }

}