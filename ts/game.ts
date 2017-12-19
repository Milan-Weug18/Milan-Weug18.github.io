class Game{
//attributen
private _element : HTMLElement = document.getElementById('container');
private _buzz : Character;

//constructor
    constructor() {
        this._buzz = new Character('Buzz Lightyear');
        document.addEventListener('keydown', this.keyDownHandler);
        console.log("To infinity and beyond!");

        // update at the end
        this.update();
    }
//methodes
    public update(){
        this._buzz.update();
        
    }

    public keyDownHandler = (e:KeyboardEvent) => {
       if(e.keyCode === 32){
        console.log('yup');
        this._buzz.xPos = 100;
        this.update();
       }
    }
}



