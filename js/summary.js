document.getElementById("btn_add_name")
    .addEventListener("click",function(){
        const inputName = document.getElementById("input_name") ;
        const newName = inputName.value; 
        const nameContainer = document.getElementById("name_container");

        const p = document.createElement("p");
        p.innerText = newName;

        nameContainer.appendChild(p)

        inputName.value = ""
  
    })