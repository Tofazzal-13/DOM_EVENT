document.getElementById("btn_update_title")
    .addEventListener("click", function () {
        const titleText = document.getElementById("title_text")
        titleText.innerText = "Updated Title Text"

    })


document.getElementById("btn_input_update")
    .addEventListener("click",function(){
        const inputText = document.getElementById("input_text");
        const inputValue = inputText.value ;

        const name = document.getElementById("name");
        name.innerText = inputValue;
  
    })