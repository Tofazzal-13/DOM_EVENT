document.getElementById("btn_mouse")
    .addEventListener("mousemove",function(){
        console.log("event triggered");
    })

document.getElementById("btn_mouse")
    .addEventListener("mouseout", function () {
        console.log("event triggered");
    })

document.getElementById("user_name")
    .addEventListener("focus", function () {
        console.log("user about to write");
        
    })
document.getElementById("user_name")
    .addEventListener("blur", function () {
        console.log("user name done");
        
    })
document.getElementById("user_email")
    .addEventListener("focus", function () {
        console.log("user email to write");
        
    })
document.getElementById("user_email")
    .addEventListener("blur", function () {
        console.log("email done");
        
    })

document.getElementById("user_name")
    .addEventListener("keydown", function (e) {
        
        console.log("Name typing",e.target.value);
        
    }) 
document.getElementById("user_name")
    .addEventListener("keyup", function (e) {
        
        console.log("Name typing",e.target.value);
        
    }) 

