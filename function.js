let currentResult = ""; // this is a variable to store the current result

function appendNumber(number) {
  currentResult += number; // this append the clicked number to the current result
  document.getElementById("result").value = currentResult; // Display the updated result
}

function appendOperator(operator) {
  currentResult += operator; // this append the clicked operator to the current result
  document.getElementById("result").value = currentResult; // Display the updated result
}

function clearResult() {
  currentResult = ""; // this clears the current result
  document.getElementById("result").value = currentResult; // Display the cleared result
}

function calculateResult() {
  let result = eval(currentResult); // Evaluate the current result using the eval() function
  document.getElementById("result").value = result; // Display the calculated result
  currentResult = ""; // Clear the current result for further calculations
}

function toggleButtons() {
  const buttons = document.getElementsByTagName("button");

  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].disabled) {
      buttons[i].disabled = false; // Enable the button
    } else {
      buttons[i].disabled = true; // Disable the button
    }
  }
  const result = document.getElementById("result");

  result.value = "";
  currentResult = "";
}
