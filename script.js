const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("h2");
    let imgDelete = document.createElement("img");
    let imgStar = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    imgDelete.src = "images/delete.png";
    imgStar.src = "images/black-star-icon-6.png";
    imgStar.className = "star";

    inputBox.appendChild(imgDelete);
    inputBox.appendChild(imgStar);
    imgStar.style.position = "absolute";
    imgStar.style.bottom = "5px";
    imgStar.style.right = "45px";
    notesContainer.appendChild(inputBox);
    updateStorage();
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("star")) {
        e.target.parentElement.style.color = 'red';
        updateStorage();
    }

    if (e.target.tagName === "IMG" && e.target.getAttribute("src") === "images/delete.png") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "p") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            };
        });
    }
});

notesContainer.addEventListener("dblclick", function (e) {
    if (e.target.tagName === "H2") {
        e.target.classList.toggle("checked");
    }
});
