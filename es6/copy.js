// let arr1 = [1,2,3,4,5,[1,4,6]]
// console.log(arr1[5][1])

// let arr1 = [1,2,3,4,5,[1,4,6]];
// let arr2 = [...arr1]
// arr2[5][1] = 9
// console.log(arr1)

// let arr1 = [1,2,3,4,5,[1,4,6]];
// let arr2 = JSON.parse(JSON.stringify([...arr1]))
// arr2[5][1] = 9
// console.log(arr2)
// console.log(arr1)

let arr1 = ['n', 'i','s','h','a'];
let arr2 = [1,2,3,4,5]
let des = [arr2,arr1] = [arr1,arr2]
console.log(arr1)
