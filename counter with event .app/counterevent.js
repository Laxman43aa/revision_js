document.addEventListener("DOMContentLoaded", function(){


// declare the counter 
let count = 0;
// use element veriables
let countEl = document.getElementById("count");
let msgEl = document.getElementById("message");
let btnPlus = document.getElementById("btnPlus");
let btnMinus = document.getElementById("btnMinus");
let btnReset = document.getElementById("btnReset");
let btnSave = document.getElementById("btnSave");
let btnLoad = document.getElementById("btnLoad");

// add event listeners to buttons
btnPlus.addEventListener("click", increaseCount);
btnMinus.addEventListener("click", decreaseCount);
btnReset.addEventListener("click", resetCount);
btnSave.addEventListener("click", saveCount);
btnLoad.addEventListener("click", loadCount);
// function to display the counter
function updateCount(){
    document.getElementById("count").innerText = count;
}
// function to display the message
function showMessage(text){
    msgEl.innerText = text;
    setTimeout(function(){
        msgEl.innerText = "";
    }, 3000);
}
// function to increment the counter
function increaseCount(){
    count++;
    updateCount();
}
// function to decrement the counter
function decreaseCount(){
    count--;
    updateCount();
}
// function to reset the counter
function resetCount(){
    count = 0;
    updateCount();
}
// function to save the counter value 
function saveCount(){
    localStorage.setItem("count", count);
    showMessage("Saved!");
}
// function to load the counter value
function loadCount(){
    let saved = localStorage.getItem("count");
    if(saved !== null){
        count = Number(saved);
        showMessage("Loaded!");
    }
    updateCount();
}
});