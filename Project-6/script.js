

    let btn = document.getElementById("checkBtn");

    btn.addEventListener("click" , function(){


        let  a = Number(document.getElementById("one").value);
        let b = Number(document.getElementById("two").value);
        let c = Number(document.getElementById("three").value);
        let output = document.getElementById("answer")
        
    
        if(isNaN(a) || isNaN(b) || isNaN(c)){
            output.innerHTML = "Please Enter a ,b ,c ";
            return;
        }
    
    
        if(a>b && a>c){
        output.innerHTML = "a is greater compare to all ";
        return;
        }
        else if(b>a && b>c){
        output.innerHTML = "b is greater compare to all ";
        return;
        }
        else if(c>a && c>a){
            output.innerHTML = "c is greater compare to all "
            return;
        }
        else if(a==b && b==c){
            output.innerHTML = "All are equal ";
            return;
        }
        else{
            output.innerHTML="Zero";
            return;
        }
    
    











    })

 