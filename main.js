
var outputDiv = document.getElementById("output-divs");
var btnMakeDivs = document.getElementById("make-divs");
var styleGrey = document.getElementById("style-grey");
var styleRed = document.getElementById("style-red");
var styleBlue = document.getElementById("style-blue");
var styleGreen = document.getElementById("style-green");
var styleRandom = document.getElementById("style-random");

//first button
function btn1(){
    var sum = 0;
    for(var i = 0; i < 255; i++){
        sum++
        outputDiv.innerHTML += `<div class="divs">${sum}</div>`
    }
}

function randomNumber(){
    var x = Math.floor(Math.random()*255);
    return x;
}

// "big" function which i can call several times with different parameters.
function styleDivs(farge){
    var test = document.getElementsByClassName("divs");
    var length = test.length;
    

    if(farge == "blue"){
        for(var i = 0; i < length; i++){
            test[i].style.backgroundColor =`rgb(${1},${1},${i})`;
        }
    } else if(farge == "green"){
        for(var i = 0; i < length; i++){
            test[i].style.backgroundColor =`rgb(${1},${i},${1})`;
        }
    } else if(farge == "red"){
        for(var i = 0; i < length; i++){
            test[i].style.backgroundColor =`rgb(${i},${1},${1})`;
        }
    }else if(farge == "grey"){
        for(var i = 0; i < length; i++){
            test[i].style.backgroundColor =`rgb(${i},${i},${i})`;
        }
    } else if(farge == "random"){
        for(var i = 0; i < length; i++){
            test[i].style.backgroundColor =`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
        }
    }
    

    for(var i = 0; i < length; i++){
        test[i].style.width = "50px";
        test[i].style.height = "50px";
        test[i].style.cssFloat = "left";
    } 
}

// adds onclick on the buttons with the styling function and the right parameters
btnMakeDivs.addEventListener("click", btn1);
styleGrey.addEventListener("click", function(){
    styleDivs("grey")
});
styleRed.addEventListener("click", function(){
    styleDivs("red");
})
styleBlue.addEventListener("click", function(){
    styleDivs("blue");
});
styleGreen.addEventListener("click", function(){
    styleDivs("green");
});
styleRandom.addEventListener("click", function(){
    styleDivs("random");
})
