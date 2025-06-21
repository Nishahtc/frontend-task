
const headings = document.querySelectorAll('.heading');
headings.forEach(header =>{
    header.addEventListener('click' ,() =>{
        // document.querySelectorAll('.contain').forEach(contain =>{
        //     contain.style.display = 'none'
        // })

        const content = header.nextElementSibling;
        if(content.style.display  === 'block'){
            content.style.display = 'none'
        }
        
        else{
             content.style.display = 'block'
        }
           

    })
})

