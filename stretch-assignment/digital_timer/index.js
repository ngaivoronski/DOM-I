// add event listeners to buttons
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

// declare global timer variables
var ms = 0;
var msh = 0;
var so = 0;
var st = 0;

// Start timer to count up to 10 seconds
function startTimer(){
    var timer = setInterval(function(){
        msh = Math.floor(ms/10);
        so = Math.floor(msh/10);
        st = Math.floor(so/10);

        document.getElementById('secondTens').innerHTML = st;
        document.getElementById('secondOnes').innerHTML = (so - st*10);
        document.getElementById('msHundreds').innerHTML = (msh - so*10);
        document.getElementById('msTens').innerHTML = (ms - msh*10);

        if (ms >= 1000) {
            clearInterval(timer);
            document.getElementById('secondTens').style.color = "red";
            document.getElementById('secondOnes').style.color = "red";
            document.getElementById('colon').style.color = "red";
            document.getElementById('msHundreds').style.color = "red";
            document.getElementById('msTens').style.color = "red";
        }
        else {
            ms++;
        }
    }, 10);
}

// Reset timer back to 0 seconds
function resetTimer() {
    ms = 0;
    msh = 0;
    so = 0;
    st = 0;

    document.getElementById('secondTens').innerHTML = "-";
    document.getElementById('secondOnes').innerHTML = "-";
    document.getElementById('msHundreds').innerHTML = "-";
    document.getElementById('msTens').innerHTML = "-";
    document.getElementById('secondTens').style.color = "black";
    document.getElementById('secondOnes').style.color = "black";
    document.getElementById('colon').style.color = "black";
    document.getElementById('msHundreds').style.color = "black";
    document.getElementById('msTens').style.color = "black";
}
