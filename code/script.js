
window.onload = function(){
    var result = document.getElementById    ("random-number-counter"),
    Btn = document.getElementById    ("randomshite"),

    random=0;
 
Btn.onclick=function() {
random = Math.floor(Math.random() * 11),
result.innerText = random;

//TESTING
console.log()

}
    var plusBtn  = document.getElementById    ("plus"),
        minusBtn = document.getElementById    ("min"),
        counter  = document.getElementById    ("value-counter"),
        reset    = document.getElementById    ("reset"),

        number = 0,
        min= -99,
        max= 99;
    console.log(plusBtn);
    
    plusBtn.onclick = function(){
        if (number<max){
            number = number+1;
            counter.innerText = number;
        
        
        // TESTING 
        console.log("plusBtn onclick fired - current number : " + number);
    }
}

    minusBtn.onclick = function(){
        if (number>min){
            number = number-1;
            counter.innerText = number;
            
        //TESTING
        console.log("minusBtn onclick fired - current number : " + number);
    }
        }
    
    reset.onclick = function (){
        number=0
        counter.innerText = number;

        //TESTING
        console.log("number reset - current number : " + number);
    }


}



