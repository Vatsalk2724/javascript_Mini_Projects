let UserInput = document.getElementById("Input")
let UserBtn = document.getElementById("Btn");
let Output = document.getElementById("ouput");



UserBtn.addEventListener("click" , function(e){
    e.preventDefault()

    let n = parseInt(UserInput.value)
    let org = n;
    let rev = 0;

    while(n > 0){

        rev = (rev*10) + (n%10);
        n = Math.floor(n / 10);
        
    }
        if(org === rev){
            Output.innerHTML = `Palindrome Number: ${rev}`;
        }
        else{
             Output.innerHTML = `Not Palindrome Number: ${rev}`;
        }
    
})