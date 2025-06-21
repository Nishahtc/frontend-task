
let name ="ada"
let rev = name.split('').reverse().join("")

let newname = rev
if(name == newname){
    console.log(`${rev} is a palindrom`)
}
else{
     console.log(`${rev} is not a palindrom`)
}