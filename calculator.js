const buttons = document.querySelectorAll("button");
const display = document.querySelector("p")
let firstNum = null;
let secondNum = null;
let operation = null;

function executeOperation() {
    firstNum = parseInt(display.innerText);
}
function setOperation(oftype) {
    if(operation !== null){
        secondNum = parseFloat(display.innerText)
        switch(operation){
            case '+':
                display.innerText = firstNum + secondNum;
                break;
            case '-':
                display.innerText = firstNum - secondNum;
                break;
            case 'x':
                display.innerText = firstNum * secondNum;
                break;
            case '/':
                display.innerText = firstNum / secondNum;
                break;
            case '%':
                debugger
                display.innerText = firstNum % secondNum;
                break;
    }
    }
    else{
    operation= oftype;
    firstNum =parseFloat(display.innerText);
    display.innerText = "0"; 
    }
}

function handClick(buttontext) {
    const isNotNumber = isNaN(buttontext);
    if(!isNotNumber){
        if (display.innerText === "0"){
            display.innerText = buttontext;
            return;
        }
        if (display.innerText.length < 15){
            display.innerText += buttontext;
        }
    } else{
        switch(buttontext){
            case "+" :
                setOperation("+");
                break;
            case "-" :
                setOperation("-");
                break;
            case "x" :
                setOperation("x");
                break;
            case "/" :
                setOperation("/");
                break;
            case "%" :
            setOperation("/");
            break;
            case "C":
                display.innerText = "0";
                firstNum = null;
                secondNum = null;
                operation = null;
                break;
            case ".":
                if (!display.innerText.includes(".")){
                    display.innerText += ".";
                }
                break;
            case "=":
                setOperation("=");
                break;
            case "()":
                let bracketSwitch = false;
                function brackets() {
                    var brak;
                    if (!bracketSwitch){
                        brak = "("
                    }else{
                        brak = ")"
                    };
                    bracketSwitch = !bracketSwitch;
                    document.getElementById("brac").value+=brak;
                }
            default:
                console.log("unexpected button pressed")
                break;
        }
    }
}
buttons.forEach(function(button){
    button.addEventListener("click",function(event){
   handClick(event.target.innerText);
    })
})