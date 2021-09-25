// 1. Write a function that can print any random number between any two given numbers(including them).
let a = 1
let b = 6
function getitem(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
for (let i = 0; i < b; i++) {
    console.log(getitem(a, b));

}
