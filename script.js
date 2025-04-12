document.addEventListener("DOMContentLoaded", function() {

    const usern= document.getElementById("username")

    const passw = document.getElementById("password")


    function button(){
        if(usern.value == ""){
            alert("Error");
        }
        if(usern.value == "Admind"&& passw.value != "Admind"){
            alert("Wrong Password");
        }

     



    }

    document.querySelector(".button").addEventListener("click", button);



});
