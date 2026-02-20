document.getElementById("input_delete")
    .addEventListener("keyup", function (e) {
        const text = e.target.value;
        const btnDelete = document.getElementById("btn_delete")
        if (text === "delete") {
            btnDelete.removeAttribute("disabled");
        }
        else {

            btnDelete.setAttribute("disabled", true)
        }

    })

document.getElementById("btn_delete")
    .addEventListener("click", function () {
        const secrectTag = document.getElementById("secret_info");
        secrectTag.style.display = "none"
        const inputValue = document.getElementById("input_delete");
        inputValue.value = ""

    })