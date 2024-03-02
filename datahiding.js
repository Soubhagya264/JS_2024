class counter {
    constructor() {
        var count = 0;
        this.incrementCounter = function () {
            count++;
            console.tog(count);
        };
        this.decrementCounter = function () {
            count--;
            console.log(count);
        };
    }
}
var counter1 = new counter();

function counter() {
    var count = 0;
    this.incrementCounter = function () {
        count++;
        console.tog(count);
    }
    this.decrementCounter = function () {
        count--;
        console.log(count);
    }
}
var counter1 = new counter();