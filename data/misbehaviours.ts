import {Option} from "../models/option";
import {BoxSet} from "../adaptors/boxset";
import {MisbehaveCard} from "../models/misbehave";
import {KeyWordSet} from "../adaptors/keywordset";
import {ProfessionType} from "../adaptors/professionset";

export var misbehaviourData : MisbehaveCard[] = [
    new MisbehaveCard("Old Vendetta", [Option.fight(6), Option.keyWordOnly(KeyWordSet.Transport)]),
    new MisbehaveCard("Kill the Alarm", [Option.tech(5), Option.fight(7), Option.keyWordOnly(KeyWordSet.HackingRig)]),
    new MisbehaveCard("The Sheriff's justice", [Option.negotiate(8), Option.fight(9), Option.professionOnly(ProfessionType.Companion)]),
    new MisbehaveCard("Let's Go to the Crappy town where I'm a hero!", [Option.negotiate(6), Option.tech(6), Option.item("Jayne's Hat")]),
    new MisbehaveCard("Ambush", [Option.fight(8), Option.crew(5), Option.keyWordOnly(KeyWordSet.SniperRifle)] ),
    new MisbehaveCard("A Rival Crew", [Option.fight(9)]),
    new MisbehaveCard("Everything that's not Nailed Down", [Option.keyWordOnly(KeyWordSet.Transport)]),
    new MisbehaveCard("Alliance Operatives", [Option.keyWordOnly(KeyWordSet.Transport), Option.fight(10), Option.item("River Tam")]),
    new MisbehaveCard("Alliance Patrol", [Option.negotiate(8), Option.keyWordOnly(KeyWordSet.Transport), Option.keyWordOnly(KeyWordSet.FakeID)]),
    new MisbehaveCard("Alliance Patrol", [Option.negotiate(8), Option.keyWordOnly(KeyWordSet.Transport), Option.keyWordOnly(KeyWordSet.FakeID)]),
    new MisbehaveCard("It was the Best Day Ever", [Option.keyWordOnly(KeyWordSet.FancyDuds), Option.negotiate(6), Option.professionOnly(ProfessionType.Medic), Option.tech(6), Option.item("Simon Tam")]),
    new MisbehaveCard("Knife Fight", [Option.keyWordOnly(KeyWordSet.Firearm), Option.fight(8), Option.item("Crow")]),
    new MisbehaveCard("It Takes a Woman's Touch", [Option.keyWordOnly(KeyWordSet.FancyDuds), Option.negotiate(7), Option.keyWordOnly(KeyWordSet.HackingRig), Option.tech(7), Option.professionOnly(ProfessionType.Companion)]),
    new MisbehaveCard("Kidnapped by Hill Folk", [Option.negotiate(8), Option.keyWordOnly(KeyWordSet.Firearm), Option.professionOnly(ProfessionType.HillFolk)]),
    new MisbehaveCard("An Interesting Day", [Option.negotiate(12)]),
    new MisbehaveCard("Locals in Need", [Option.fight(3)]),
    new MisbehaveCard("Old Fashioned Shoot-Out", [Option.fight(8), Option.keyWordOnly(KeyWordSet.Transport)]),
    new MisbehaveCard("Gun Play", [Option.fight(7)]),
    new MisbehaveCard("Reaver Raid", [Option.keyWordOnly(KeyWordSet.Transport), Option.tech(5), Option.item("River Tam")]),
    new MisbehaveCard("An Unexpected Opportunity", [Option.negotiate(7)]),
    new MisbehaveCard("Tight Security", [Option.tech(7), Option.fight(9), Option.keyWordOnly(KeyWordSet.HackingRig)]),
    new MisbehaveCard("The Local Law", [Option.negotiate(11), Option.fight(8)]),
    new MisbehaveCard("A Formal Affair", [Option.keyWordOnly(KeyWordSet.FancyDuds), Option.negotiate(6), Option.professionOnly(ProfessionType.Companion)]),
    new MisbehaveCard("We Need a Distraction", [Option.keyWordOnly(KeyWordSet.Explosives), Option.tech(7), Option.professionOnly(ProfessionType.Companion)]),
    new MisbehaveCard("Denied Docking Rights", [Option.negotiate(9), Option.tech(6), Option.keyWordOnly(KeyWordSet.FakeID)]),
    new MisbehaveCard("A Bit of Local Color", [Option.fight(6), Option.negotiate(6), Option.item("Wash")]),
    new MisbehaveCard("Backwater Deputies", [Option.negotiate(9), Option.fight(7)]),
    new MisbehaveCard("Alliance Patrol", [Option.negotiate(8), Option.keyWordOnly(KeyWordSet.Transport), Option.keyWordOnly(KeyWordSet.FakeID)]),
    new MisbehaveCard("Time for Some Thrillin' Heroics", [Option.fight(7)]),
    new MisbehaveCard("Kill the Alarm", [Option.tech(5), Option.fight(7), Option.keyWordOnly(KeyWordSet.HackingRig)]),
    new MisbehaveCard("State of the Art Security System", [Option.keyWordOnly(KeyWordSet.HackingRig), Option.tech(9), Option.keyWordOnly(KeyWordSet.Explosives), Option.item("Alliance Ident Card")]),
    new MisbehaveCard("Gun Play", [Option.fight(7)]),
    new MisbehaveCard("A Little Job on the Side", [Option.tech(7)]),
    new MisbehaveCard("Everything that's Not Nailed Down", [Option.keyWordOnly(KeyWordSet.Transport)]),
    new MisbehaveCard("Keep a Low Profile", [Option.fight(6), Option.negotiate(9), Option.keyWordOnly(KeyWordSet.SniperRifle)]),
    new MisbehaveCard("A Vote of No Confidence", []),
    new MisbehaveCard("Tight Security", [Option.tech(7), Option.fight(9), Option.keyWordOnly(KeyWordSet.HackingRig)]),
    new MisbehaveCard("Keep a Low Profile", [Option.fight(6), Option.negotiate(9), Option.keyWordOnly(KeyWordSet.SniperRifle)]),
    new MisbehaveCard("A Bit of Local Color", [Option.fight(6), Option.negotiate(6), Option.item("Wash")]),
    new MisbehaveCard("The Local Law", [Option.negotiate(11), Option.fight(8)])        
];

