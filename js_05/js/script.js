var hSpan = document.getElementById('hours'),
    msSpan = document.getElementById('mls'),
    btn = document.getElementById('btn'),
    btn0 = document.getElementById('btnZero');
var tm, msec;

btn.addEventListener('click',to_start);
btn0.addEventListener('click',erase);

var h=0;
var m=0;
var s=0;
var ms=1;

function erase(){
    clearInterval(tm);
    clearInterval(msec);
    h=0;
    m=0;
    s=0;
    ms=0;
    hSpan.innerHTML='00:00:00:';
    msSpan.innerHTML='000';
    btn.value='start';
};

function to_start(){
    switch(document.getElementById('btn').value){
        case  'start':
            clearInterval(tm);
            clearInterval(msec);
            tm=window.setInterval('play()',1000);
            msec=window.setInterval('playMs()',1);
            btn.value='pause';
            break;
        case  'pause':
            clearInterval(tm);// stop the timer
            clearInterval(msec);
            btn.value='cont.';
            break;
        case "cont.":
            tm=window.setInterval('play()',1000);
            msec=window.setInterval('playMs()',1);
            btn.value='pause';
            break;
    };
};

function playMs(){
    if(ms<10){
        var mls='00' + ms;
        }else if(ms>10&&ms<100){
            var mls='0' + ms;
        }else{mls=ms;}
    ms++;
    if(ms>999){
        ms=0;
        ms++;
    }
    msSpan.innerHTML=mls;   
}

function play(){
    if(s<10){var s1='0' + s;}
    else{var s1=s;}
        
    if(m<10){var m1='0' + m;}
    else{var m1=m;}
        
    if(h<10){var h1='0' + h;}
    else{var h1=h;}    
    
    var str= h1 + ':' + m1 +':' + s1 + ':';
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
