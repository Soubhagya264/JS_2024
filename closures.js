function x() {
    // closed with it's lexical enviroment
    let a = 10;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}
const fun = x();
console.log(fun);
fun();

// illegal shadowing 
// let s=30;
// {
//   var s=200;
// }
// console.log(s);

// const v = 40;
// {
//     const v = 100;
//     {
//         const v = 400;
//         console.log(v);
//     }
// }

// set timeout in clouser

function y() {
    for (var i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log("\n", i); // this i refers to the same spot in memory
        }, 3000);
    }
}
y();

// op 5,5,5,5,5

function z() {
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            if (i == 0) {
                console.log("\t", " using let");
            }
            console.log("\n", i); // op-> 0,1,2,3,4
        }, 3000);
    }
}
z();

function w() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function () {
                if (x == 1) {
                    console.log("\t", " using close function");
                }
                console.log("\n", x);
            }, 3000);
        }
        close(i);
    }
}
w();



