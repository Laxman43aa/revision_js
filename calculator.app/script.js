// select display
let display = document.getElementById("display");

// clicking on button and add value to display 
function appendValue(value) {
    display.value += value;
}
// fuction to clear display
function clearDisplay() {
    display.value = "";
}
// function to calculate the expression
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}