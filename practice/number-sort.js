let num = [];
for(let i =50; i >=0; i--){
    num.push(i)
}
console.log(num.sort((a,b)=> b-a)); // Descending
console.log(num.sort((a,b)=> a-b)); // ascending