// this
function x() {
    // this
    console.log(this);
}
x();

const obj = {
    a: 10,
    x: function () {
        console.log(this.a);
    },
}
obj.x();

const student = {
    name: "John",
    printName: function() {
        console.log(this.name);
    }
}
student.printName();

const student2 = {
    name: "Jack"
}
student.printName.call(student2);





