let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let displayText = '';

buttonsArray.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        //action to perform on button click
        if (event.target.innerHTML === 'AC') {
            //clearing the display
            displayText = '';
            display.value = displayText;
        } else if (event.target.innerHTML === 'DEL') {
            //backspacing
            displayText = displayText.substring(0, displayText.length - 1);
            display.value = displayText;
        } else if (event.target.innerHTML === '=') {
            //evaluating the expression
            let result = eval(display.value);
            display.value = result;
        } else {
            //displaying the button value
            displayText += event.target.innerHTML;
            display.value = displayText;
        }
    })
})