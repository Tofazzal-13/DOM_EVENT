/* const items = document.getElementsByClassName("item")
for (const item of items) {
    item.addEventListener("click", function (e) {
        // console.log(e.target.parentNode);
        e.target.parentNode.removeChild(e.target)
    })
} */
document.getElementById("item_list")
    .addEventListener("click",function(e){
        e.target.parentNode.removeChild(e.target)
        
    })

document.getElementById("btn_add_item")
    .addEventListener("click", function () {
        const ol = document.getElementById("item_list");

        const li = document.createElement("li");
        li.classList.add("item")
        li.innerText = "Brand new Item added";

        ol.appendChild(li);
    })