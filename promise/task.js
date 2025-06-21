function getdata (id){
    return new Promise((reslove, reject)=>{
        setTimeout(()=>{
            console.log("id", id)
            reslove("success")
        },3000)
    })
}
console.log("data is fetching")
let p = getdata(123)
p.then((res)=>{
    console.log(res)
})