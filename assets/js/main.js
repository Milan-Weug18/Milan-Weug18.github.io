var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject(name, xPos, yPos) {
        if (xPos === void 0) { xPos = 0; }
        if (yPos === void 0) { yPos = 0; }
        this._name = name;
        this._xPos = xPos;
        this._yPos = yPos;
    }
    GameObject.prototype.render = function (container) {
        this._element = document.createElement('div');
        this._element.className = this._name;
        this._element.id = this._name;
        this._element.style.transform = "translate(" + this._xPos + "px, " + this._yPos + "px)";
        container.appendChild(this._element);
    };
    GameObject.prototype.update = function () {
        this._element.style.transform = "translate(" + this._xPos + "px, " + this._yPos + "px)";
    };
    return GameObject;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(name, xPos, yPos, maxSpeed) {
        if (xPos === void 0) { xPos = 100; }
        if (yPos === void 0) { yPos = 100; }
        var _this = _super.call(this, name, xPos, yPos) || this;
        _this._maxSpeed = maxSpeed;
        return _this;
    }
    Car.prototype.move = function (xPosition) {
        this._xPos -= xPosition;
        this._element.classList.add('driving');
    };
    Car.prototype.getMaxSpeed = function () {
        console.log(this._maxSpeed);
        return this._maxSpeed;
    };
    Car.prototype.getCarName = function () {
        console.log(this._name);
        return this._name;
    };
    return Car;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.keyDownHandler = function (e) {
            if (e.keyCode === 32) {
                _this._car.move(_this._car.getMaxSpeed());
                _this.update();
            }
        };
        this._parkingSpot = new ParkingSpot('parkingSpot', -100, 220);
        this._message = new Message('message', 500, 150);
        this._timer = new Timer('timer', 500, 0);
        this._player = new Player();
        this._car = this._player.generateCar();
        window.addEventListener('keydown', this.keyDownHandler);
        this._element = document.getElementById('container');
        this.draw();
        this.countDown(10);
    }
    Game.prototype.draw = function () {
        this._parkingSpot.render(this._element);
        this._car.render(this._element);
        this._timer.render(this._element);
    };
    Game.prototype.update = function () {
        this._parkingSpot.update();
        this._car.update();
        this._message.update();
    };
    Game.prototype.countDown = function (seconds) {
        var _this = this;
        var element = document.getElementById('timer');
        element.innerHTML = '<h2>TIMER</h2>' + ("<p>" + seconds + "</p>");
        seconds--;
        var timer = setTimeout(function () { _this.countDown(seconds); }, 1000);
        if (seconds < 0) {
            clearTimeout(timer);
            this.checkIfParked();
        }
    };
    Game.prototype.renderMessage = function () {
        this._message.render(this._element);
        window.removeEventListener('keydown', this.keyDownHandler);
    };
    Game.prototype.checkIfParked = function () {
        var carName = this._car.getCarName();
        console.log(carName);
        var parkingRect = document.getElementById('parkingSpot').getBoundingClientRect();
        var carRect = document.getElementById(carName).getBoundingClientRect();
        if (parkingRect.left <= carRect.right && parkingRect.right >= carRect.left) {
            this.renderMessage();
            var message = document.getElementById('message');
            message.innerHTML = '<h2>Nice one!</h2>' + '<input class="button" type="button" value="Restart" onClick="window.location.href=window.location.href">';
        }
        else {
            this.renderMessage();
            var message = document.getElementById('message');
            message.innerHTML = '<h2>Fail! Try again.</h2>' + '<input class="button" type="button" value="Restart" onClick="window.location.href=window.location.href">';
        }
    };
    return Game;
}());
var init = function () {
    var game = new Game();
};
window.addEventListener('load', init);
var Message = (function (_super) {
    __extends(Message, _super);
    function Message(name, xPos, yPos) {
        return _super.call(this, name, xPos, yPos) || this;
    }
    return Message;
}(GameObject));
var ParkingSpot = (function (_super) {
    __extends(ParkingSpot, _super);
    function ParkingSpot(name, xPos, yPos) {
        return _super.call(this, name, xPos, yPos) || this;
    }
    return ParkingSpot;
}(GameObject));
var Player = (function () {
    function Player() {
        var car1 = new Car('car1', 100, 245, -80);
        var car2 = new Car('car2', 100, 245, -150);
        var car3 = new Car('car3', 100, 245, -40);
        var car4 = new Car('car4', 100, 245, -50);
        this._carList = [car1, car2, car3, car4];
    }
    Player.prototype.generateCar = function () {
        var car = this._carList[Math.floor(Math.random() * this._carList.length)];
        console.log(car);
        return car;
    };
    return Player;
}());
var Timer = (function (_super) {
    __extends(Timer, _super);
    function Timer(name, xPos, yPos) {
        return _super.call(this, name, xPos, yPos) || this;
    }
    return Timer;
}(GameObject));
//# sourceMappingURL=main.js.map