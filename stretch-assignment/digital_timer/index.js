

// function timer(){
    var ms = 0;
    var msh = 0;
    var so = 0;
    var st = 0;
    
    var timer = setInterval(function(){
        msh = Math.floor(ms/10);
        so = Math.floor(msh/10);
        st = Math.floor(so/10);



        document.getElementById('secondTens').innerHTML = st;
        document.getElementById('secondOnes').innerHTML = (so - st*10);
        document.getElementById('msHundreds').innerHTML = (msh - so*10);
        document.getElementById('msTens').innerHTML = (ms - msh*10);

        ms++;

        if (ms > 1000) {
            clearInterval(timer);
        }
    }, 10);
// }
