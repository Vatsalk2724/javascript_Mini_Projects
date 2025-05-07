let sub = document.getElementById('btn');
let output = document.getElementById('output');

function sum(){
    let a = Number(document.getElementById('input1').value);
    let b = Number(document.getElementById('input2').value);
    
    if(a > b){
        output.innerHTML=`
        <p>a is greater than b</p>
        `;
        
    }
    else if(b > a){
        output.innerHTML=`
        <p>b is greater than a</p>
        `;

    }else{
        output.innerHTML=`
      <p> a is equal to b</p>
        `;
     
    }

}

sub.addEventListener("click" , sum)