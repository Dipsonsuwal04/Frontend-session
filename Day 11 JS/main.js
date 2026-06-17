let btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    let body = document.getElementById("body");
    if (body.style.background === "black"){

        body.style.background ="white"
    }else{
        body.style.background ="black"
    }
})