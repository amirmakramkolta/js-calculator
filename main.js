// define var

var
    equal = document.getElementById('equal'),
    del = document.getElementById('delete'),
    reset = document.getElementById('reset'),
    digital = document.getElementById('int'),
    screen= document.getElementById('screen');



window.onload = screen.focus();

//make reset button work
reset.onclick = function (){
    'use strict'
    screen.value = "";
    digital.innerHTML = 0;
    screen.focus();
};

// make numbers buttons work
function insert (num){
    'use strict';
    screen.value += num;
    screen.focus();
}

//make del button work
del.onclick = function(){
    'use strict';
    screen.value = screen.value.substring(0,screen.value.length-1);
    screen.focus();
};

//make equal button work
equal.onclick = function(){
    'use strict';
    digital.innerHTML = eval(screen.value);
};

screen.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        equal.click();
    }
});