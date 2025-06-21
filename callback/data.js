function getdata (id, nextid){
    setTimeout(()=>{
        console.log("id", id)
        if(nextid){
            nextid()
        }
    },3000)
    
}

getdata(1,() =>{
    getdata(4,()=>{
        getdata(10)
    })
})