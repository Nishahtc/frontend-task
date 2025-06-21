

let capitalFirstWord = (str)=>{
    return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalFirstWord("my name is nisha"))