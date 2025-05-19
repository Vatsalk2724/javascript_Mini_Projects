let Start =  document.getElementById("userIn1") ;
let End = document.getElementById("userIn2");
let check = document.getElementById("Btn");
let output = document.getElementById("answer");


check.addEventListener("click" , () => {

    let Num1 = parseInt(Start.value);
    let Num2 = parseInt(End.value);


    let sum = 0;
    for(let i = Num1 ; i<=Num2; i++){
        sum += i;
        output.innerHTML=`Sum : ${sum}`;
    }
    
})





