function createInputBox() {
  const elem = document.createElement("div");
  elem.setAttribute("class", "comment-reply-container");
  elem.innerHTML = `<input type="text" placeholder="write your reply" class="input"/>
      <button class="btn">Submit</button>`;
  return elem;
}

function createAddReply(text) {
  const elem = document.createElement("div");
  elem.setAttribute("class", "comment");
  elem.innerHTML = `<div class="card"> <div class="text">${text}</div>
            <div class="reply">Add Reply</div></div>`;
  return elem;
}

const commentContainer = document.querySelector(".comment-container");
commentContainer.addEventListener("click", (e) => {
  const closestCard = e.target.closest(".comment");
  if (e.target.classList.contains("reply")) {
    closestCard.appendChild(createInputBox());
  }
  if (e.target.classList.contains("btn")) {
    const inputElem = document.querySelector(".input");
    closestCard.appendChild(createAddReply(inputElem.value));
    e.target.parentNode.remove();
  }
});
