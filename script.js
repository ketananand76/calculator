// Elements
const themeSwitch = document.getElementById("theme-switch");
const body = document.body;
const calculator = document.querySelector(".calculator");
const buttons = document.querySelectorAll(".btn");
const historyDisplay = document.getElementById("history");
const outputDisplay = document.getElementById("output");

let history = "";
let output = "0";

// Update Display
const updateDisplay = () => {
    historyDisplay.textContent = history;
    outputDisplay.textContent = output;
};

// Button Click
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const key = button.dataset.key;
        if (key === "clear") {
            history = "";
            output = "0";
        } else if (key === "delete") {
            output = output.slice(0, -1) || "0";
        } else if (key === "=") {
            try {
                output = eval(history + output);
                history = "";
            } catch {
                output = "Error";
            }
        } else if (["+", "-", "*", "/", "%"].includes(key)) {
            history += output + key;
            output = "0";
        } else if (key === "sin") {
            output = Math.sin(parseFloat(output)).toFixed(5);
        } else if (key === "cos") {
            output = Math.cos(parseFloat(output)).toFixed(5);
        } else if (key === "tan") {
            output = Math.tan(parseFloat(output)).toFixed(5);
        } else if (key === "log") {
            output = Math.log10(parseFloat(output)).toFixed(5);
        } else if (key === "√") {
            output = Math.sqrt(parseFloat(output)).toFixed(5);
        } else if (key === "π") {
            output = (Math.PI).toFixed(5);
        } else if (key === "e") {
            output = (Math.E).toFixed(5);
        } else {
            output = output === "0" ? key : output + key;
        }
        updateDisplay();
    });
});

// Theme Switch
themeSwitch.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
    calculator.classList.toggle("dark-mode");
});

// Initialize
updateDisplay();
