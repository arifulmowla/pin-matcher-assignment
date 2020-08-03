var generatedNumber = 0;
var inputNumber = "";
var leftTrial = 3;

// Generating random number
function randomNumber() {
  var min = 1000;
  var max = 9999;
  generatedNumber = Math.floor(Math.random() * (max - min) + min);

  // trial and number reset
  leftTrial = 3;
  inputNumber = "";
  document.getElementById("inputNumber").value = inputNumber;

  document.getElementById("generateOutput").value = generatedNumber;
}

// print number function
function clickEcho(number) {
  inputNumber = inputNumber + number;

  document.getElementById("inputNumber").value = inputNumber;
}

//clear Function
function inputClear() {
  inputNumber = "";
  document.getElementById("inputNumber").value = inputNumber;
}

// Clear last char
function backSpace() {
  inputNumber = inputNumber.slice(0, -1);
  document.getElementById("inputNumber").value = inputNumber;
}

// submit function check
function checkNumber() {
  if (generatedNumber == inputNumber && leftTrial > 0) {
    document.getElementById("successMsg").style.display = "block";
    document.getElementById("errorMsg").style.display = "none";
    document.getElementById("actionLeft").style.display = "none";
  } else {
    document.getElementById("errorMsg").style.display = "block";
    document.getElementById("successMsg").style.display = "none";
    tryLeft();
  }
}

// left trial
function tryLeft() {
  leftTrial--;
  document.getElementById("actionLeft").style.display = "block";

  if (leftTrial < 0) {
    document.getElementById("actionLeft").innerHTML = "Please try again!";
    document.getElementById("submit-btn").disable = true;
  } else {
    document.getElementById("actionLeft").innerHTML = leftTrial + " try left";
  }
}
