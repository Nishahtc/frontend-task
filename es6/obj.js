let obj = {
    name: "nisha",
    age:20,
    roll:"developer",
    location :{
        country: "india"
    }

   
}
obj.role = "web developer"
let obj2 = {
    salary:50000,
    time:"9pm"
}

let des = {...obj, ...obj2}
let   {name, age, location, salary, time} = des;
console.log(name)