console.log("JS file included")

const title =document.querySelector("h1")
title.addEventListener("click",function(){
    //console.log(this)
    this.style.color="darkgreen"
}
)
const like = document.getElementById("like")

like.addEventListener("click",function(e){
    e.target.classList.toggle("liked")
})
//multiple element eventListner
const tasks =document.getElementById("todolist").children

for(const task of tasks){
    task.addEventListener("click",completetask)

}
function completetask(e){
    e.target.classList.toggle("done")
}

// Event delegation
const groceryList = document.getElementById("grocerieslist")
groceryList.addEventListener("click", addToCart)
function addToCart (e) {
    /*const item = e.target
    if(item.classList.contains("item")){
       item.insertAdjacentHTML("beforeend" , `<span>🛒</span>`)
    }else[
        e.target.remove()
    ]*/

    const item = e.target.closest(".item")

if (item){
    item.insertAdjacentHTML("beforeend",`<span>🛒</span>`)
}
//form handling
const groceryForm = document.getElementById("groceryForm")
groceryForm.addEventListener("submit",function (e){
    e.preventDefault()
    const elements = groceryForm.elements
    for(const element of elements){
        console.log(element.name + "=" + element.value)
        if(element.name == "groceryItem" && element.value !== ""){
            groceryList.insertAdjacentHTML("beforeend", `<li class="item">${element.value}</li>`)
            groceryForm.reset()
        }
    }
})

}

