

let Btn = document.getElementById("btn");

Btn.addEventListener("click" , function(){
    let num = document.getElementById("num").value;
    let output = document.getElementById("answer");

    if(num > 0){
        output.innerHTML = `${num} is Positive`;
    }
    else if(num < 0){
        output.innerHTML = `${num} is Negative`;
    }
    else if(num == 0){
        output.innerHTML = "Zero";
    }
    else{
        output.innerHTML = "Please Enter a Number "
    }
 
    
})