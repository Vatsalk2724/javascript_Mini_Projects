let btn = document.getElementById("btn");
let output = document.getElementById("answer");


function Sum(num1,num2){
    
    let sum = 0 ;
    
    for(let i = num1 ; i<=num2 ; i++){
        sum += i;
    }
    
    output.innerHTML=`Sum ; ${sum}`;
}

btn.addEventListener("click" , function(){
    
    let num1 = parseInt(document.getElementById("numInput1").value);
    let num2 = parseInt(document.getElementById("numInput2").value);
    
if(!isNaN(num1) || !isNaN(num2)){
    Sum(num1,num2);
}
else{
    console.log("Please enter a number valid");
}

})