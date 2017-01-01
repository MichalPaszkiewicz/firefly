import {Option} from "../models/option";
import {Flight, Space} from "../models/flight";
import {BoxSet} from "../adaptors/boxset";
import {KeyWordSet} from "../adaptors/keywordset";
import {JobType} from "../models/job";
import {ProfessionType} from "../adaptors/professionset";

// does not include spending cargo/ digsruntling
//keep flying is not considered an option here, this is only for analysing use of keywords, scores etc
// same with cruiser, patrol, etc

export var flightData: Flight[] = [
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight('"Family" Dinner', BoxSet.Base, Space.Alliance, [new Option()]),
    new Flight("Alliance Entanglements", BoxSet.Base, Space.Alliance, [Option.employerOnly("Harken")]),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("Alliance Cruiser", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("Abandoned Ship", BoxSet.Base, Space.Alliance, [Option.jobTypeOnly(JobType.SalvageOp)]),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),    
    new Flight("Cruiser Patrol", BoxSet.Base, Space.Alliance, []),
    new Flight("What's Going on in The Engine Room", BoxSet.Base, Space.Alliance, [Option.breakDown(7)]),
    new Flight("Customs Inspection", BoxSet.Base, Space.Alliance, [Option.employerOnly("Harken")]),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("Distress Signal", BoxSet.Base, Space.Alliance, []),
    new Flight("If'n the Coil Busts, We're Driftin'", BoxSet.Base, Space.Alliance, [Option.breakDown(8)]),
    new Flight("Cruiser Patrol", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("Cruiser Patrol", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("Cruiser Patrol", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("Minor Technical Difficulty", BoxSet.Base, Space.Alliance, [Option.breakDown(5)]),
    new Flight("Freighter Convoy", BoxSet.Base, Space.Alliance, [Option.fight(8)]),
    new Flight("Customs Inspection", BoxSet.Base, Space.Alliance, [Option.employerOnly("Harken")]),
    new Flight("The Big Black", BoxSet.Base, Space.Alliance, []),
    new Flight("Derelict Ship", BoxSet.Base, Space.Border, [Option.jobTypeOnly(JobType.SalvageOp)]),
    new Flight("Reaver Bait", BoxSet.Base, Space.Border, []),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("Nav Hazard: Asteroid", BoxSet.Base, Space.Border, [Option.professionOnly(ProfessionType.Pilot)]),
    new Flight("Nav Hazard: Debris Field", BoxSet.Base, Space.Border, [Option.professionOnly(ProfessionType.Pilot), new Option(null, JobType.SalvageOp, false, null, null, null, 6, null)]),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("Reavers on the hunt", BoxSet.Base, Space.Border, []),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("Reavers on the hunt", BoxSet.Base, Space.Border, []),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("Punctured fuel lines", BoxSet.Base, Space.Border, [Option.breakDown(5)]),
    new Flight("What's that noise", BoxSet.Base, Space.Border, [Option.breakDown(6)]),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("Ghost ship", BoxSet.Base, Space.Border, [new Option(null, JobType.SalvageOp, false, null, null, 7, null, null)]),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("Ruttin's drive core's blown", BoxSet.Base, Space.Border, [Option.breakDown(8)]),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("Reavers on the hunt", BoxSet.Base, Space.Border, []),
    new Flight('"Family" Dinner', BoxSet.Base, Space.Border, []),
    new Flight("Reavers on the hunt", BoxSet.Base, Space.Border, []),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("Derelict ship", BoxSet.Base, Space.Border, [Option.jobTypeOnly(JobType.SalvageOp)]),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("Ship graveyard", BoxSet.Base, Space.Border, [new Option(null, JobType.SalvageOp, false, null, null, null, 8, null)]),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("The Big Black", BoxSet.Base, Space.Border, []),
    new Flight("A rogue trader", BoxSet.Base, Space.Border, [Option.fight(6)]),
    new Flight("Reavers on the hunt", BoxSet.Base, Space.Border, []),
    new Flight("Reaver cutter", BoxSet.Base, Space.Border, [Option.fight(8), Option.professionsOnly([ProfessionType.Pilot, ProfessionType.Mechanic])]),
    new Flight("Reavers on the hunt", BoxSet.Base, Space.Border, []),
    new Flight("Reavers on the hunt", BoxSet.Base, Space.Border, []),
    new Flight("Reavers on the hunt", BoxSet.Base, Space.Border, []),
    new Flight("Scrapper ambush", BoxSet.Base, Space.Border, [Option.tech(5), new Option(null, JobType.SalvageOp, false, null, null, 9, null, null)]),

    new Flight("Alliance Interrogation", BoxSet.Kalidasa, Space.Alliance, [Option.negotiate(8), Option.fight(8)]),
    new Flight("Badger's Boys", BoxSet.Kalidasa, Space.Alliance, [Option.negotiate(10), Option.fight(8)]),
    new Flight("Persistent Pursuit", BoxSet.Kalidasa, Space.Alliance, []),
    new Flight("Persistent Pursuit", BoxSet.Kalidasa, Space.Alliance, []),
    new Flight("Regulated Salvage", BoxSet.Kalidasa, Space.Alliance, [Option.keyWordOnly(KeyWordSet.FakeID)]),
    new Flight("Alliance Checkpoint", BoxSet.Kalidasa, Space.Alliance, [Option.employerOnly("Harken"), Option.negotiate(6)]),
    new Flight("Broken Down Shuttle", BoxSet.Kalidasa, Space.Alliance, []),
    new Flight("Cruiser Patrol", BoxSet.Kalidasa, Space.Alliance, []),
    new Flight("Enhanced Enforcement", BoxSet.Kalidasa, Space.Alliance, []),
    new Flight("Fire in the Engine  Room", BoxSet.Kalidasa, Space.Alliance, [Option.tech(8)]),
    new Flight("He'll Come at You Sideways", BoxSet.Kalidasa, Space.Alliance, []),
    new Flight("Outbound Colonists", BoxSet.Kalidasa, Space.Alliance, [Option.fight(6)]),
    new Flight("Leave No Ground To Go To", BoxSet.Kalidasa, Space.Alliance, []),
    new Flight("Alliance Harassment", BoxSet.Kalidasa, Space.Alliance, []),
    new Flight("Persistent Pursuit", BoxSet.Kalidasa, Space.Alliance, []),
    new Flight("Persistent Pursuit", BoxSet.Kalidasa, Space.Alliance, []),
    new Flight("Passenger Unrest", BoxSet.Kalidasa, Space.Alliance, [Option.professionOnly(ProfessionType.Soldier)]),
    new Flight("Alliance Harassment", BoxSet.Kalidasa, Space.Alliance, []),
    new Flight("She's tore up plenty", BoxSet.Kalidasa, Space.Border, [Option.breakDown(7), Option.professionOnly(ProfessionType.Mechanic)]),
    new Flight("Space pox!", BoxSet.Kalidasa, Space.Border, [Option.professionOnly(ProfessionType.Medic)]),
    new Flight("An adrift transport", BoxSet.Kalidasa, Space.Border, [Option.jobTypeOnly(JobType.SalvageOp)]),
    new Flight("Hollowed out space liner", BoxSet.Kalidasa, Space.Border, [Option.jobTypeOnly(JobType.SalvageOp)]),
    new Flight("Leave No Ground To Go To", BoxSet.Kalidasa, Space.Border, []),
    new Flight("Persistent Pursuit", BoxSet.Kalidasa, Space.Border, []),
    new Flight("Persistent Pursuit", BoxSet.Kalidasa, Space.Border, []),
    new Flight("Enhanced enforcement", BoxSet.Kalidasa, Space.Border, []),
    new Flight("Enhanced enforcement", BoxSet.Kalidasa, Space.Border, []),
    new Flight("Patience's posse", BoxSet.Kalidasa, Space.Border, [Option.employerOnly("Patience"), Option.negotiate(7), Option.fight(8)]),
    new Flight("Reavers on the hunt", BoxSet.Kalidasa, Space.Border, []),
    new Flight("Persistent Pursuit", BoxSet.Kalidasa, Space.Border, []),
    new Flight("He'll Come at You Sideways", BoxSet.Kalidasa, Space.Border, []),
    new Flight("Reavers on the hunt", BoxSet.Kalidasa, Space.Border, []),
    new Flight("Persistent Pursuit", BoxSet.Kalidasa, Space.Border, []),
    new Flight("Dangerous salvage", BoxSet.Kalidasa, Space.Border, [new Option(null, JobType.SalvageOp, false, null, null, null, 8, null)]),
    new Flight("Storm's gettin' worse", BoxSet.Kalidasa, Space.Border, [new Option(null, null, true, null, [ProfessionType.Pilot], null, 7, null)]),
    new Flight("Fly by night casino ship", BoxSet.Kalidasa, Space.Rim, [Option.moral()]),
    new Flight("Failure to communicate", BoxSet.Kalidasa, Space.Rim, [Option.professionOnly(ProfessionType.Soldier), Option.negotiate(7), Option.fight(8)]),
    new Flight("Reaver cutter", BoxSet.Kalidasa, Space.Rim, [Option.professionsOnly([ProfessionType.Pilot, ProfessionType.Mechanic]), Option.fight(8)]),
    new Flight("She's tore up plenty", BoxSet.Kalidasa, Space.Rim, [Option.breakDown(7), Option.professionOnly(ProfessionType.Mechanic)]),
    new Flight("Enhanced enforcement", BoxSet.Kalidasa, Space.Rim, []),
    new Flight("The big black", BoxSet.Kalidasa, Space.Rim, []),
    new Flight("The big black", BoxSet.Kalidasa, Space.Rim, []),
    new Flight("Reavers on the hunt", BoxSet.Kalidasa, Space.Rim, []),
    new Flight("He'll come at you sideways", BoxSet.Kalidasa, Space.Rim, []),
    new Flight("The big black", BoxSet.Kalidasa, Space.Rim, []),
    new Flight("Persistent pursuit", BoxSet.Kalidasa, Space.Rim, []),
    new Flight("Persistent pursuit", BoxSet.Kalidasa, Space.Rim, []),
    new Flight("Persistent pursuit", BoxSet.Kalidasa, Space.Rim, []),
    new Flight("Leave no ground to go to", BoxSet.Kalidasa, Space.Rim, []),
    new Flight("Orphaned cargo pod", BoxSet.Kalidasa, Space.Rim, [Option.jobTypeOnly(JobType.SalvageOp)]),
    new Flight("The big black", BoxSet.Kalidasa, Space.Rim, []),
    new Flight("Alliance spy satellite", BoxSet.Kalidasa, Space.Rim, [Option.professionOnly(ProfessionType.Pilot)]),
    new Flight("Persistent pursuit", BoxSet.Kalidasa, Space.Rim, []),
    new Flight("Storm's gettin' worse", BoxSet.Kalidasa, Space.Rim, [new Option(null, null, true, null, [ProfessionType.Pilot], null, 7, null)]),
    new Flight("The big black", BoxSet.Kalidasa, Space.Rim, []),
    new Flight("The big black", BoxSet.Kalidasa, Space.Rim, []),
    new Flight("The big black", BoxSet.Kalidasa, Space.Rim, []),
    new Flight("Damaged spy satellite", BoxSet.Kalidasa, Space.Rim, [Option.jobTypeOnly(JobType.SalvageOp)]),
    new Flight("First come first serve", BoxSet.Kalidasa, Space.Rim, [new Option(null, JobType.SalvageOp, false, null, null, null, 9, null)]),
    new Flight("First rule of flying", BoxSet.Kalidasa, Space.Rim, [Option.moral(), Option.breakDown(null)]),
    new Flight("Horowitz's trading scow", BoxSet.Kalidasa, Space.Rim, [Option.negotiate(10)]),
    new Flight("The big black", BoxSet.Kalidasa, Space.Rim, []),
    new Flight("Niska's ne'er-do-wells", BoxSet.Kalidasa, Space.Rim, [Option.employerOnly("Niska"), Option.negotiate(10), Option.fight(8)]),
    new Flight("Reavers on the hunt", BoxSet.Kalidasa, Space.Rim, []),
    new Flight("The big black", BoxSet.Kalidasa, Space.Rim, []),
    new Flight("The big black", BoxSet.Kalidasa, Space.Rim, []),
    
]