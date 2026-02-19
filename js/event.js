function btn(){
    console.log("hello");
    
}

function makeYellow(){
    document.body.style.backgroundColor = "yellow"
}
function makeRed(){
    document.body.style.backgroundColor = "red"
}

const btnMakeBlue = document.getElementById("btn_make_blue")

btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = "blue"
}


const btnMakePurple = document.getElementById("btn_make_purple")


btnMakePurple.onclick = makePurple;

function makePurple(){
    document.body.style.backgroundColor = "purple"
}

// addEventListener
document.getElementById("btn_make_green").
addEventListener("click",function
     makeGreen(){
        document.body.style.backgroundColor = "lightgreen"
     }
)



