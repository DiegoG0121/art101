

const openBtn = document.querySelector('#open-dialog');
const dialog = document.querySelector('.dialog-content');
const closeBtn = document.querySelector('#close-dialog');

openBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", ()=> dialog.close());

const openBtn_2 = document.querySelector('#open-dialog-2');
const dialog_2 = document.querySelector('.dialog-content_2');
const closeBtn_2 = document.querySelector('#close-dialog-2');

openBtn_2.addEventListener("click", () => dialog_2.showModal());
closeBtn_2.addEventListener("click", ()=> dialog_2.close());

function output(string){

    let length = string.length;
    let mode = length % 4;
    if(mode == 0){
        return "Gryffindor";
    } else if(mode == 1) {
        return "Ravenclaw";
    } else if(mode == 2) {
        return "Slytherin";
    } else if(mode == 3) {
        return "Hufflepuff";
    }
}

var btn = document.getElementById("submit");
btn.addEventListener("click", function () {
    var name = document.getElementById("user-name").value;
    var house = output(name);
    document.getElementById("output").innerHTML = "<button id='openRanHouse'>Open</button>";
    newText = "<p class='myHouse'>The house that you were assigned is: " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
});