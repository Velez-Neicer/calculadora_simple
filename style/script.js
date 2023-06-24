let displayValue = "";

function appendValue(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    document.getElementById("display").value = displayValue;
  } catch (error) {
    displayValue = "";
    document.getElementById("display").value = "Error";
  }
}

// Evento de teclado
document.addEventListener("keydown", function(event) {
  const keyValue = event.key;
  const validKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "/", "*", "-", "+", "=", "Enter", "Backspace", "Delete"];
  
  if (validKeys.includes(keyValue)) {
    event.preventDefault(); // Evita la acción por defecto del evento de teclado
    
    if (keyValue === "Enter" || keyValue === "=") {
      calculate();
    } else if (keyValue === "Backspace" || keyValue === "Delete") {
      clearDisplay();
    } else {
      appendValue(keyValue);
    }
  }
});
