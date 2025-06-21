const  data = [
    {
        name : "T-shirt",
        price: "200"
    },
    {
        name : "shirt",
        price: "500"
    },
    {
        name : "gown",
        price: "6000"
    },

]
let maxPrice = 0;
let items = []
data.forEach((item)=>{
    const price = item.price
    
   if(price > maxPrice){
    maxPrice = price;
   items = [item]
   
   if(item.name  === "shirt"){
    item.name = "formal-shirt"
   }
  

   }

  
})
 console.log(data)
console.log(maxPrice)
