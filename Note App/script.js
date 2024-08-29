const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


//show the notes that store in the local storage
function showNote(){
    noteContainer.innerHTML = localStorage.getItem("notes");
}
showNote();

//store the notes in the local storage
function updateStorage(){
    localStorage.setItem("notes", noteContainer.innerHTML);
}
//when the user click then it will show the input box
createBtn.addEventListener('click', () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    noteContainer.appendChild(inputBox).appendChild(img);
})

//add an functionality to delete notes
noteContainer.addEventListener('click', function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
