document.getElementById("body")
    .addEventListener("click", function () {
        console.log("body click");
        
    })
document.getElementById("item_section")
    .addEventListener("click", function () {
        console.log("item section click");
        
    })
document.getElementById("item_list")
    .addEventListener("click", function (e) {
        console.log("ol click handler");
        e.stopImmediatePropagation()
    })
document.getElementById("item-2")
    .addEventListener("click", function (e) {
        console.log("item-2 click");
        e.stopPropagation()
        
    })