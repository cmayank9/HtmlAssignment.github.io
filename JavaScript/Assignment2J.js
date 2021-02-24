function isSafe(){

let m=true;
let num1 = Number(document.getElementById("firstNumber").value);
let num2 = Number(document.getElementById("secondNumber").value);
if(Number.isSafeInteger(num1)&&Number.isSafeInteger(num2))return true;
else{
        alert("Input Valid Integer");
}
return false;

}


function multiplyBy()
{
        let num1 = document.getElementById("firstNumber").value;
        let num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        let num1 = document.getElementById("firstNumber").value;
        let num2 = document.getElementById("secondNumber").value;
        
                result = +(num1) / +(num2);
              if (isFinite(result)) {
                document.getElementById("result").innerHTML = result;   
              }
              document.getElementById("result").innerHTML ='Cannot divide by zero';


}

function Add() 
{ 
        let num1 = Number(document.getElementById("firstNumber").value);
        let num2 = Number(document.getElementById("secondNumber").value);
document.getElementById("result").innerHTML = num1 + num2;
}

function Subtract() 
{ 
        let num1 = document.getElementById("firstNumber").value;
        let num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 - num2;
}


function Operation() { 
        let a = document.getElementsByName('Op'); 
          
        for(i = 0; i < a.length; i++) { 
            if(a[i].checked){
		if(isSafe()){
                switch (a[i].value) {
                        case '*':
                                multiplyBy();
                          break;
                        case '/':
                                divideBy();
                          break;
                        case '+':
                           Add();
                          break;
                        case '-':
                           Subtract();
                      }}
            }
        } 
    } 