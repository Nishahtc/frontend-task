let str = 'nisha'

const  vowel = 'aeiou';

let data = str.toLocaleLowerCase().split("").filter(char => vowel.includes(char))
console.log(data)
console.log(data.length)
// let data = [...str]("").filter(char => vowel.includes(char))
// console.log(data)







