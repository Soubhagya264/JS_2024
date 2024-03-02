function a() {
    console.log(b);
    c();
    function c() {
        console.log(b," Inside c");
    }
}
var b = 10;
a();