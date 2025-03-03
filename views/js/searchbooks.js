let btn=document.getElementsByClassName("searchicon")[0]
let val=document.getElementById("bookname")
// console.log(val.value)
btn.addEventListener("click",async ()=>{
    let response=await fetch(`/fetchbooks/${val}`)
    let data=await response.json()
    // console.log(data[0].AuthorName)
})