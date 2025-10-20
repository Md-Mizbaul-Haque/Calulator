const display = document.querySelector(".display");

function clearDisplay() {
  display.value = "";
  display.value = "0";
}

function appendToDisplay(value) {
  if (display.value === "0") {
    display.value = "";
  }
  display.value += value;
  display.scrollLeft = display.scrollWidth;
}


function calculate(){
    display.value=eval(display.value)
}
