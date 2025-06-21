let arr = [-500,-100,-200,-1000,-300, -4000, ]
// console.log(Math.max(...num)) // 4000
// console.log(Math.max(num))  output will be NaN

function findMax(arr) {
    if(!arr.length) return null 
   let maxNumber = arr[0];
   for(let num of arr){
    if(num > maxNumber)
        maxNumber = num
   }

   return maxNumber;
    
}
console.log(findMax(arr))