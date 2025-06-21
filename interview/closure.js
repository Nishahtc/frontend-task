

function outer (){
    let count = 0;
    return function inner (){
        count ++;
        console.log(count)
    }
}
const counter = outer() // i call outer fun but return inner fun 
counter()
counter()
counter()