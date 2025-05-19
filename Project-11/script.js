let UserInput = document.getElementById("Input");
let USerBtn = document.getElementById("Btn");
let Output = document.getElementById("ouput");



USerBtn.addEventListener("click" , function(e){
    e.preventDefault();
    
    
    let n = parseInt(UserInput.value);
    let rev = 0; 

    while(n > 0){
        rev = (rev*10) + (n%10);
        n = Math.floor(n/10)
        
    }
    
    Output.innerHTML=`reverse:${rev}`;
});


