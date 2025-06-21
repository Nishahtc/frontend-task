let arr = [1,2,3,4,5,1,2,5]
// let duplicate = new Set(arr)
// let unique = [...duplicate]
// console.log(unique)
// console.log(typeof(unique))
// console.log(duplicate)
// console.log(typeof(duplicate))



function duplicate(arr) {
   let duplicates = new Set(arr)
   let  unique = [...duplicates]
   return unique

}

duplicate()



