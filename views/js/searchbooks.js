let btn=document.getElementsByClassName("searchicon")[0]
let val=document.getElementById("bookname")
// console.log(val.value)
btn.addEventListener("click",async ()=>{
    let response=await fetch(`/fetchbooks/${val}`)
    let data=await response.json()
    // console.log(data[0].AuthorName)
    let cont=document.getElementsByClassName("uploadSection")[0]
    cont.innerHTML=""
    data.forEach((elem)=>{
        cont.innerHTML+=`<div>AuthorName ${elem.AuthorName}<br>BookName ${elem.BookName}<br></div>`
    })
})

