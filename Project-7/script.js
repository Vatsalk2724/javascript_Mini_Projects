let UserInput = document.getElementById("Input");

let check = document.getElementById("btn");

let Output = document.getElementById("out");




check.addEventListener("click" , function(){
    let year = UserInput.value;

    if(year%400 == 0 || year%4==0 && year%100!=0 ){
    Output.innerHTML= `Leap Year`;
    }
    else{

        Output.innerHTML= `Not a Leap Year`;
    }
})
