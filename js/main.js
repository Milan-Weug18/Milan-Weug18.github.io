var Character = (function () {
    function Character(name) {
        this._element = document.createElement('img');
        this._xPos = 100;
        this._yPos = 300;
        this._name = name;
    }
    Object.defineProperty(Character.prototype, "xPos", {
        set: function (xPosition) {
            this._xPos += xPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "yPos", {
        set: function (yPosition) {
            this._yPos += yPosition;
        },
        enumerable: true,
        configurable: true
    });
    Character.prototype.update = function () {
        var container = document.getElementById('container');
        this._element.src = './images/disney-buzz.png';
        this._element.className = 'Buzz';
        this._element.style.transform = "translate(" + this._xPos + "px, " + this._yPos + "px)";
        container.appendChild(this._element);
    };
    return Character;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this._element = document.getElementById('container');
        this.keyDownHandler = function (e) {
            if (e.keyCode === 32) {
                console.log('yup');
                _this._buzz.xPos = 100;
                _this.update();
            }
        };
        this._buzz = new Character('Buzz Lightyear');
        document.addEventListener('keydown', this.keyDownHandler);
        console.log("To infinity and beyond!");
        this.update();
    }
    Game.prototype.update = function () {
        this._buzz.update();
    };
    return Game;
}());
var init = function () {
    var game = new Game();
};
window.addEventListener('load', init);
//# sourceMappingURL=main.js.map