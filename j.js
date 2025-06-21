 const products = [
           { name: "T-shirt", category: "Clothing", price: 500 },
           { name: "shirt", category: "Clothing", price: 1000 },
           { name: "paint", category: "Clothing", price: 400 },
           { name: "T-shirt", category: "Clothing", price: 500 },
           { name: "saare", category: "Clothing", price: 5000 },
           { name: "T-shirt", category: "Clothing", price: 500 },
           { name: "suit", category: "Clothing", price: 5000 },

        ]
        const find = products.filter(product => product.name == "T-shirt")
        console.log(find)

        