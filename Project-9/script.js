let Num1 = document.getElementById("userIn1");
let Num2 = document.getElementById("userIn2");
let check = document.getElementById("Btn");
let output = document.getElementById("answer");



 function isPrime(n){



    if(n<2){
        return false
    }

    
    for(let i = 2 ; i<=Math.sqrt(n) ; i++){
        if(n%i==0){
            return false;
        }
    }
    return true;

 }

    
check.addEventListener("click" , () => {



    let start = parseInt(Num1.value); 
    let end = parseInt(Num2.value); 


    let result = [];
    let index = 0;
    

    for(let i = start ; i<=end ; i++){
        if(isPrime(i)){
            result[index] = i;
            index++;
        }
        
        
        output.innerHTML = `${result}`;
        
    }





    }

)



