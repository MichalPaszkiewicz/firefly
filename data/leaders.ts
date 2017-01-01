import {ProfessionType} from "../adaptors/professionset";
import {Leader} from "../models/leader";
import {KeyWordSet, KeyWordSetToString} from "../adaptors/keywordset";
import {BoxSet} from "../adaptors/boxset";

export var leaderData: Leader[] = [
    new Leader(BoxSet.Kalidasa, "Wright", "Dirty slaver", "Whenever you deliver fugitives, you may take an extra $100 per fugitive. This counts as Immoral",
        null, 1, 1, 1, [ProfessionType.Grifter], "They wasn't volunteers, for damn sure!", false),
    new Leader(BoxSet.Base, "Womack", "Cold and heartless", "When you complete an Immoral Job take $500",
        null, 2, 0, 1, [ProfessionType.Soldier], "I'm a dangerous-minded man on a ship loaded with hurt", false),
    new Leader(BoxSet.Base, "Malcolm", "Brown coat", "When you complete a Crime Job, take $500",
        null, 2, 0, 1, [ProfessionType.Pilot, ProfessionType.Soldier], "If I ever kill you, you'll be awake, you'll be facing me and you'll be armed", true),
    new Leader(BoxSet.Base, "Monty", "Smuggler extraordinaire", "When you complete a Smuggling Job, take $500",
        null, 2, 1, 0, [ProfessionType.Soldier, ProfessionType.Mechanic], "I shaved my beard for you, devil woman!", true ),
    new Leader(BoxSet.Base, "Corbin", "Chop shop", "You may Buy Drive Cores and Ship Upgrades at half price",
        null, 0, 2, 1, [ProfessionType.Mechanic], "This is why you'll never be in charge...You don't see the whole", false),
    new Leader(BoxSet.Base, "Marco", "Gun runner", 'You may Buy Gear with the "Explosives" or "Firearm" Keywords at half price', 
        [KeyWordSetToString(KeyWordSet.Transport)], 2, 1, 0, null, "Do we look 'reasonable' to you?", false),
    new Leader(BoxSet.Base, "Burgess", "Taker", "When you complete a Shipping Job, Load 1 Cargo",
        [KeyWordSetToString(KeyWordSet.FancyDuds)], 1, 1, 1, null, "We will show them what power is", false),
    new Leader(BoxSet.Base, "Nandi", "Heart of gold", "May Hire Crew at no cost", 
        null, 1, 0, 2, [ProfessionType.Companion], "I trained as a Companion, remember? I read people pretty well", true),
    new Leader(BoxSet.Jetwash, "Zoe", "Loyalty", "Soldiers in your Crew do not become Disgruntled if they are not paid their Cut of successful Jobs. May carry 2 Gear",
        null, 3, 0, 0, [ProfessionType.Soldier], "Okay people, If it moves, shoot it", true),
    new Leader(BoxSet.PiratesAndBountyHunters, "Sash", "Pirate", "When you complete a Piracy Job, steal $500 from the targeted Rival",
        [KeyWordSetToString(KeyWordSet.HackingRig)], 0, 1, 2, null, "Already decided. We're taking your ship", false),
    new Leader(BoxSet.PiratesAndBountyHunters, "Jubal Early", "Bounty hunter", "+2 Fight When Attacking in Showdown. May Carry 2 Gear",
        null, 1, 1, 1, [ProfessionType.Pilot], "I don't think of myself as a lion. You might as well, though. I have a mighty roar", false)
];

//done:
//Kalidasa
//Base
// esmeralda,
// jetwash