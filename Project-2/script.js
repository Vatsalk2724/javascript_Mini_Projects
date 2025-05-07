let Btn = document.getElementById("btn");

Btn.addEventListener("click" , function(){
    let num = document.getElementById("Num").value;
    let output = document.getElementById("answer");

    if(num%2==0 && num!=0){
        output.innerHTML= `${num} is Even`;
    }
    else if(num%2 != 0){
        output.innerHTML= `${num} is Odd`;
    }
    else if(num == 0){
        output.innerHTML= `Zero`;
    }

 
});

