var salary = document.querySelector(".salary");
var years = document.querySelector(".years");
var days = document.querySelector(".days");
var christmasBonus;

var btn = document.querySelector(".submitBtn");
var span = document.querySelector(".span");

btn.addEventListener("click",function(event){
    event.preventDefault;
    if (salary.value<=0) {
        alert("Salary must be above 0");
        return false;
    }else if(years.value<0 || years.value>35){
        alert("Years must be between 0 and 35");
        return false;
    }else if(days.value<0 || days.value>364){
        alert("If days are over 364, add to years instead.");
        return false;
    }

    //Bonus calculation
    if(years.value<1){
        christmasBonus=(days.value*(salary.value/2)/365);
        span.innerHTML="You christmas bonus is: $"+Math.trunc(christmasBonus);
    }else if(years.value>0 && years.value<4){
        christmasBonus=salary.value/2;
        span.innerHTML="You christmas bonus is: $"+Math.trunc(christmasBonus);
    }else if(years.value>3 && years.value<11){
        christmasBonus=(salary.value/30)*19;
        span.innerHTML="You christmas bonus is: $"+Math.trunc(christmasBonus);
    }else if(years.value>10){
        christmasBonus=(salary.value/30)*21;
        span.innerHTML="You christmas bonus is: $"+Math.trunc(christmasBonus);
    
    }
    



    
});
