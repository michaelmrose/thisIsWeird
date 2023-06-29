class TicTacToeGame {
    constructor(boardElement, messageElement) {
        this.boardElement = boardElement;
        this.messageElement = messageElement;
        this.squareEls = [...boardElement.querySelectorAll("div")];
        this.turn = 1;
        this.winner = null;
    }
    static weird() {
        return this;
    }
    toString() {
        return `TTT winner -> ${this.winner}`;
    }
    render() {
        console.log("Render game..");
    }
    play() {
        this.squares = this.squareEls.map((el) => new ImageSquare(el));
    }
    txt(s) {
        this.messageElement.innerText = s;
    }
}
let one = document.querySelector("h1");
let two = document.querySelector("h2");
let foo = TicTacToeGame.weird();
let bar = new foo(one, two);
