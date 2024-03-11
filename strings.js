const str = "Heello World! welcome to the Javascript world"
console.log(str.slice(6, 20));
console.log(str.split(" ").reverse());

console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));

for (let char = 97; char <= 122; char++) {
    process.stdout.write(String.fromCharCode(char) + " ");
}
console.log();

// count the frequency of vowel in str
let frequency = {
    "a": 0,
    "e": 0,
    "i": 0,
    "o": 0,
    "u": 0,
}

for (let char = 0; char < str.length; char++) {
    if (frequency.hasOwnProperty(str[char])) {
        frequency[str[char]]++;
    }
}

console.log("frequency", "\t", frequency)

console.log("Get key by value", "\t", Object.keys(frequency).filter((key)=> frequency[key] === 5))
console.log(" Get the all values", "\t", Object.values(frequency).sort((a,b)=>a-b))
console.log([... new Set(str)].join(" "));





