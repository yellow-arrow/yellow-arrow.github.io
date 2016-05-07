var hSpan = document.getElementById('hours'),
    btn = document.getElementById('btn'),
    btn0 = document.getElementById('btnZero');

btn.addEventListener('click',to_start);
btn0.addEventListener('click',erase);

var h=0;
var m=0;
var s=0;

function erase(){
    clearInterval(tm);
    h=0;
    m=0;
    s=0;
    hSpan.innerHTML='00:00:00';
    btn.value='start';
};

function to_start(){
    switch(document.getElementById('btn').value){
        case  'start':
            tm=window.setInterval('play()',1000);
            btn.value='pause';
            break;
        case  'pause':
            clearInterval(tm);// stop the timer 
            btn.value='cont.';
            break;
        case "cont.":
            tm=window.setInterval('play()',1000);
            btn.value='pause';
            break;
    };
};

function play(){
if(s<10){var s1='0' + s;}
else{var s1=s;}
if(m<10){var m1='0' + m;}
else{var m1=m;}
if(h<10){var h1='0' + h;}
else{var h1=h;}
    
str= h1 + ':' + m1 +':' + s1;
hSpan.innerHTML=str;
   
    if(s<59){s=s+1;}
    else{s=0;
         m=m+1;
         if(m==60){
             m=0;
             h=h+1;
         } 
    }
}