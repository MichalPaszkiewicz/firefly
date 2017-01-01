import {DriveCore} from "../models/drivecore";
import {Ship} from "../models/ship";

export var shipData = [
    new Ship("Jetwash", 5, 9500, 12, 0, 0, 6, "Discard a part to count as PILOT", new DriveCore("Graviton Accelerator VI", 7, 1), 2),
    new Ship("Esmeralda", 5, 9300, 12, 0, 0, 6, "Fugitives on board cannot be seized by the alliance", new DriveCore("Graviton Accelerator VI", 7, 1), 2),
    new Ship("Artful Dodger", 7, 8500, 6, 4, 0, 0, "", new DriveCore("Modified Radion Accelerator Mark II", 6, 1), 3),   
    new Ship("S.S. Walden", 6, 8600, 15, 0, 0, 0, "Completed Piracy Job counts as Salvage Ops", new DriveCore("Tri-Capissen 28HD", 4, 1), 3, false),
    new Ship("Serenity", 6, 7800, 8, 4, 0, 0 , "", new DriveCore("Radion Accelerator MK1", 5, 1), 3),
    new Ship("Yun Qi", 6, 7800, 8, 4, 0, 0 , "", new DriveCore("Radion Accelerator MK1", 5, 1), 3),
    new Ship("Bonnie Mae", 6, 7800, 8, 4, 0, 0 , "", new DriveCore("Radion Accelerator MK1", 5, 1), 3),
    new Ship("Bonanza", 6, 7800, 8, 4, 0, 0 , "", new DriveCore("Radion Accelerator MK1", 5, 1), 3),
    new Ship("Interceptor", 4, 7500, 4, 0, 0, 0, "Each ship upgrade reduces core range by 1. May re-roll Mechanic boarding tests", new DriveCore("Echelon LR-8", 8, 1), 2, false)    
];