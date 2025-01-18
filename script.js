// Get elements
const historyDisplay = document.getElementById("history");
const outputDisplay = document.getElementById("output");
const buttons = document.querySelectorAll(".btn");

// Variables for calculator
let history = "";
let output = "0";

// Update display
const updateDisplay = () => {
    historyDisplay.innerText = history;
    outputDisplay.innerText = output;
};

// Handle button click
const handleButtonClick = (key) => {
    if (key === "clear") {
        history = "";
        output = "0";
    } else if (key === "delete") {
        output = output.slice(0, -1) || "0";
    } else if (key === "=") {
        try {
            output = eval(history + output).toString();
            history = "";
        } catch {
            output = "Error";
            history = "";
        }
    } else if (["+", "-", "*", "/", "%"].includes(key)) {
        if (history || output !== "0") {
            history += output + key;
            output = "0";
        }
    } else {
        output = output === "0" ? key : output + key;
    }

    updateDisplay();
};

// Add click event listeners to buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const key = button.getAttribute("data-key");
        handleButtonClick(key);
    });
});

// Initialize display
updateDisplay();
