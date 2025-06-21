
let arr = [1,3,4,6,1,3,1,2]
let duplicate = []
for(let i = 0; i<=arr.length; i++){
    
    for(let j = i; j<=arr.length; j++){
        if(arr[i] === arr[j] && !duplicate.includes(arr[i])){
            duplicate.push([i])
            
        }
    }
}
console.log(duplicate)