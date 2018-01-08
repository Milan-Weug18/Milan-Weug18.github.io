class Game {
    //attributes
    private _parkingSpot    : ParkingSpot;
    private _player         : Player;
    private _car            : Car
    private _message        : Message;
    private _timer          : Timer;
    private _element        : HTMLElement;


    //constructor
    constructor() {

        //create game objects
        this._parkingSpot = new ParkingSpot('parkingSpot', -100, 220);
        this._message = new Message('message', 500, 150);
        this._timer = new Timer('timer', 500, 0);
        this._player = new Player();
        this._car = this._player.generateCar();
        
        //Event listener for keydownevent
        window.addEventListener('keydown', this.keyDownHandler);

        //give _element a value
        this._element = document.getElementById('container');

        //Methodes that needs to run wen the game loads
        this.draw();
        this.countDown(10);
    }


    //methodes
    //Draw objects on DOM-Element
    public draw(): void {

        this._parkingSpot.render(this._element);
        this._car.render(this._element);
        this._timer.render(this._element);
    }


    //Update the position of game objects
    public update(): void {

        this._parkingSpot.update();
        this._car.update();
        this._message.update();
    }    


    //Keyhandler when spacebar is pressed
    //Run method update when spacebar is pressed
    public keyDownHandler = (e : KeyboardEvent): void =>  {

            if (e.keyCode === 32) {
                this._car.move(this._car.getMaxSpeed());
                this.update();
            }
    }


    //Countdown timer
    //run method checkIfParked when the timer hits 0 seconds
    public countDown(seconds: number): void {

        const element: HTMLElement = document.getElementById('timer');
        element.innerHTML = '<h2>TIMER</h2>' + `<p>${seconds}</p>`;

        seconds--;

        const timer = setTimeout(() => { this.countDown(seconds);}, 1000);

        if(seconds < 0) {
            clearTimeout(timer);
            this.checkIfParked();
        }
    }


    //Render a message
    public renderMessage(): void {
        
        this._message.render(this._element);
        
        window.removeEventListener('keydown', this.keyDownHandler);

    }


    //Check if the player has parked the car
    //run method renderMessage and remove eventlistener(keydownevent)
    public checkIfParked(): void {

        let carName: string = this._car.getCarName();
        console.log(carName);

        const parkingRect = document.getElementById('parkingSpot').getBoundingClientRect();
        const carRect = document.getElementById(carName).getBoundingClientRect();

        if (parkingRect.left <= carRect.right && parkingRect.right >= carRect.left) {
            this.renderMessage();
            const message: HTMLElement = document.getElementById('message');
            message.innerHTML = '<h2>Nice one!</h2>' + '<input class="button" type="button" value="Restart" onClick="window.location.href=window.location.href">';
        }
        else{
            this.renderMessage();
            const message: HTMLElement = document.getElementById('message');
            message.innerHTML = '<h2>Fail! Try again.</h2>' + '<input class="button" type="button" value="Restart" onClick="window.location.href=window.location.href">';
        }
    }

}
