class Character{
//attributen
private _name : string;
private _element : HTMLImageElement = document.createElement('img');
private _xPos : number = 100;
private _yPos : number = 300;

//constructor
    constructor(name : string){
        this._name = name;
    }

    public set xPos(xPosition : number){
        this._xPos += xPosition;
    }

    public set yPos(yPosition : number){
        this._yPos += yPosition;
    }
//methodes
    public update(){
        const container = document.getElementById('container');
        this._element.src = './images/disney-buzz.png';
        this._element.className = 'Buzz'
        this._element.style.transform = `translate(${this._xPos}px, ${this._yPos}px)`;
        container.appendChild(this._element);

        }

}