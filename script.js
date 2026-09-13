function addValue(value) {
	
	  let display = document.getElementById("display");

	    if (value == "+" || value == "-" || value == "*" || value == "/") {

	        if (display.value.endsWith("+") ||
	            display.value.endsWith("-") ||
	            display.value.endsWith("*") ||
	            display.value.endsWith("/")) {
	            return;
	        }
	    }
		display.value += value;
	
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
function changeSign() {

    let display = document.getElementById("display");

    if (display.value == "") {
        return;
    }

    if (display.value.startsWith("-")) {
        display.value = display.value.substring(1);
    } else {
        display.value = "-" + display.value;
    }}

function calculate() {
    let expression = document.getElementById("display").value;
	
	if (expression.includes("/0"))
		{
			document.getElementById("display").value="cannot divide by zero";
			return;
		}
 try{
    let result = eval(expression);

    document.getElementById("display").value = result;
} 
catch (error){
	document.getElementById("display").value="Invalid";
	
}
}


function deleteLast() {
    let display = document.getElementById("display");

    display.value = display.value.slice(0, -1);
}