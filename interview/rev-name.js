let str = "Hello world";
let change = str.split(" ").map(word => word.split("").reverse().join("")).join(" ")
console.log(change)
