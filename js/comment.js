document.getElementById("btn_post_comment")
    .addEventListener("click", function () {
        const commentText = document.getElementById("text_comment");
        const newComment = commentText.value; 

        const commentContainer = document.getElementById("comments_container");

        const commentElement = document.createElement("p");
        commentElement.classList.add("comment")
        commentElement.innerText = newComment;

        commentContainer.appendChild(commentElement)

        commentText.value = ""

        
    })