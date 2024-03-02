function x() {
    console.log('x');
}

function y(x) {
    x();
}
y(x);

// const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
//     output = [];
//     for (let i = 0; i < radius; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }

// const calculateCircumference = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }
// }
// const caluculateDiameter = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i]);
//     }
//     return output;
// };
// console.log(caluculateDiameter(radius));

const radius = [3, 1, 2, 4];
const area = function (radius) {
    return Math.PI * radius * radius;
};
const cicumference = function (radius) {
    return 2 * Math.PI * radius;
};
const diameter = function (radius) {
    return 2 * radius;
};
const calculate = function (radius, fun) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(fun(radius[i]));
    }
    return output;
};
console.log(calculate(radius, area)); 
console.log(calculate(radius, cicumference));
console.log(calculate(radius, diameter));
console.log(radius.map(area));

