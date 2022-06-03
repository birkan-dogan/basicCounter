// without capturing method

let decrease = document.querySelector(".decrease");

let increase = document.querySelector(".increase");

let number = document.getElementById("number");

let reset = document.querySelector(".reset");

const colorControl = function(){
    if(Number(number.innerHTML) > 0 ){
        number.style.color = "green";
    } else if(Number(number.innerHTML) < 0){
        number.style.color = "red";
    }  else{
        number.style.color = "black"
    }
}

decrease.onclick = function(){
    number.innerHTML--;
    colorControl()
}
increase.onclick = function(){
    number.innerHTML++;
    colorControl();
}
reset.onclick = function(){
    number.innerHTML = 0;
    colorControl();
}