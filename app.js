

function age_Calculate(){
    var birthday = document.getElementById("birth_date").value;
    
    var new_date = new Date(birthday);
    var dobmilli = new_date.getTime();
    var today = new Date();
    var dobtoday = today.getTime(); 
    var diff = dobtoday - dobmilli;
    var countYear = diff / (1000*60*60*24*30*12);
    var finalYear = Math.floor(countYear); 
    document.getElementById("age").innerHTML = ("Age" + finalYear)
        if (isNaN(finalYear)){
            document.getElementById("age").innerHTML = ("Invalid birthday - Please try again!");
        }
        else{
            document.getElementById("age").innerHTML = "Your age is " + finalYear + " years"
        }
}



