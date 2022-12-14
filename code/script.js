window.onload=function(){
    var plusBtn  = document.getElementById    ("plus"),
        minusBtn = document.getElementById    ("min"),
        counter  = document.getElementById    ("value-counter"),
        reset    = document.getElementById    ("reset"),

        number = 0,
        min= 0,
        max= 99;
    console.log(plusBtn);
    
    plusBtn.onclick = function(){
        if (number<max){
            number = number+1;
            counter.innerText = number;
        
        
        // TESTING purposes
        console.log("plusbtn onclick fired - current number : " + number);
    }
}

    minusBtn.onclick = function(){
        if (number>min){
            number = number-1;
            counter.innerText = number;
            
        //TESTING
        console.log("minusbtn onclick fired - current number : " + number);
    }
        }
    
    reset.onclick =function (){
        number=0
        counter.innerText = number;

        //TESTING
        console.log("number reset - current number : " + number);
    }


}

