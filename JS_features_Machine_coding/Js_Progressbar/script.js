const progress = document.querySelector(".progress-done")
const input = document.querySelector(".input")
const maxInput = document.querySelector(".maxinput")
let finalValue = 0;
let max = 0;


function changeWidth() {
    if (finalValue > max) {
        alert("Please enter a value less than or equal to max value")
        return;
    }
    else {
        progress.style.width = `${(finalValue / max) * 100}%`;
        progress.innerText = `${Math.ceil((finalValue / max) * 100)}%`
    }
}

input.addEventListener("keyup", function () {
    finalValue = parseInt(input.value, 10);
    console.log(finalValue);
    changeWidth()
})

maxInput.addEventListener("keyup", function () {
    max = parseInt(maxInput.value, 10);
})


