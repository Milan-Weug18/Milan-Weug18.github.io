/// <reference path="gameObject.ts" />

class Car extends GameObject {
    //attributes
    private _maxSpeed   : number;

    //contructor
    constructor(name: string, xPos: number = 100, yPos: number = 100, maxSpeed: number) {
        
        super(name, xPos, yPos);
        this._maxSpeed = maxSpeed;
    }

    //methodes
    //move the car
    public move(xPosition: number): void {
        
        this._xPos -= xPosition;
        this._element.classList.add('driving');
    }

    //get the maximumspeed the car and return maxSpeed
    public getMaxSpeed(): number {
        console.log(this._maxSpeed);
        return this._maxSpeed;
    }

    //get the name of the car and return the name
    public getCarName(): string {
        console.log(this._name);
        return this._name;
    }
}