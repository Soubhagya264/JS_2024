class counter {
    constructor() {
        var count = 0;
        this.incrementCounter = function () {
            count++;
            console.log(count);
        };
        this.decrementCounter = function () {
            count--;
            console.log(count);
        };
    }
}
var counter1 = new counter();
//call incrementcounter
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();

// function counter() {
//     var count = 0;
//     this.incrementCounter = function () {
//         count++;
//         console.log(count);
//     }
//     this.decrementCounter = function () {
//         count--;
//         console.log(count);
//     }
// }
// var counter1 = new counter();