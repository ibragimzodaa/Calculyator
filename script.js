let display = document.querySelector(".display");
let buttons = Array.from(document.querySelectorAll(".button"));
let lastInputWasOperator = false;

buttons.map((button) => {
    button.addEventListener("click", function (e) {
        const value = e.target.innerText;
        
        switch (value) {
            case "C":
                display.innerText = "0";
                lastInputWasOperator = false;
                break;

            case "=":
                try {
                    display.innerText = eval(display.innerText);
                    lastInputWasOperator = true; 
                } catch (error) {
                    display.innerText = "Error!";
                }
                break;

            case "+/-":
                display.innerText = display.innerText.startsWith('-') ? 
                    display.innerText.slice(1) : 
                    '-' + display.innerText;
                lastInputWasOperator = false;
                break;

            case "%":
                display.innerText = eval(display.innerText) / 100;
                lastInputWasOperator = true; 
                break;

            default:
                if (['+', '-', '*', '/'].includes(value)) {
                    if (!lastInputWasOperator) {
                        display.innerText += value;
                        lastInputWasOperator = true;
                    } else {
                        display.innerText = display.innerText.slice(0, -1) + value;
                    }
                } else {
                    if (display.innerText === "0" && value !== ".") {
                        display.innerText = value;
                    } else {
                        display.innerText += value;
                    }
                    lastInputWasOperator = false;
                }
        }
    });
});

let calcuyator = document.querySelector(".calcuyator");
let img = document.querySelector(".img");
let imh = document.querySelector(".imh");

img.onclick = () => {
    calcuyator.showModal();
};
imh.onclick = () => {
    calcuyator.close();
};
