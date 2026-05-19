// declare the counter 
let count = 0;
// function to display the counter
function updateCount(){
    document.getElementById("count").innerText = count;
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
}
// function to load the counter value
function loadCount(){
    let saved = localStorage.getItem("count");
    if(saved !== null){
        count = Number(saved);
    }
    updateCount();
}