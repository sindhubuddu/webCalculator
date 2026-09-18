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
	if(display.value=="cannot divide  by zero" || display.value=="cannot divide by zero" || display.value=="invalid")
			{
				display.value="";
			}

    display.value = display.value.slice(0, -1);
}

document.addEventListener("keydown",
	function(event){
		let key=event.key;
		
		if(key>="0" && key <="9")
			{
				addValue(key);
			}
			else if (key=="+" || key=="-" || key=="*" || key=="/")
				{
					addValue(key)
					}
					else if (key=="Enter")
						{
							calculate();
						}
						
					else if (key=="Backspace")
						{
							deleteLast();
						}
					
					else if (key=="Escape")
						{
							clearDisplay();					}
					
				
});