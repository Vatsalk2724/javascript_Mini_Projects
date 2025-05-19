let Num = document.getElementById("userIn");
let check = document.getElementById("Btn");
let output = document.getElementById("answer");


check.addEventListener("click" , function(){

    let count = 0;

    let num = Num.value; 
    
    for(let i = 1; i<=num ; i++){
        if(num%i==0){
            count++;
        }

    }
    
    if(count == 2){
        output.innerHTML="Prime Number";
    }
    else{
        output.innerHTML="Not Prime Number";
    }
    

    


})