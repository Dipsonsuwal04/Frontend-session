let pass = document.getElementById("password");
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    if(password.type === "password"){
        password.type = "text";
        btn.textContent = "hide"
    }
     else{
        password.type = "password";
        btn.textContent ="show"
    }
})
