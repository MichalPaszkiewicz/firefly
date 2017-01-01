export class DriveCore{

    Name: string;
    MaxSpeed: number;
    MoseySpeed: number;

    constructor(name: string, maxSpeed: number, moseySpeed: number){
        var self = this;
        self.Name = name;
        self.MaxSpeed = maxSpeed;
        self.MoseySpeed = moseySpeed;
    }

}