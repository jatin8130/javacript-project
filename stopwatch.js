const timer = document.querySelector(".stopwatch");
var hr = 0;
var min = 0;
var sec = 0;
var stop = true;

function starttimer(){
  if(stop == true){
    stop = false;
    timecycle();
  }
}

function stoptimer(){
  if(stop == false){
    stop = true;
  }
}

function resettimer(){
  timer.innerHTML = "00:00:00";
  stop = true;
  hr = 0;
  min = 0;
  sec = 0;
}

function timecycle(){
  if(stop == false){
    hr = parseInt(hr);
    sec = parseInt(sec);
    min = parseInt(min);
    
    sec = sec + 1;

    if(sec == 60){
      min = min + 1;
      sec = 0;
    }

    if(min == 60){
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if(sec < 10){
      sec = "0" + sec;
    }

    if(min < 10){
       min = "0" + min;
    }

    if(hr < 10){
      hr = "0" + hr;
    }

    timer.innerHTML = hr + ":" + min +":" + sec;

    setTimeout("timecycle()", 1000);
  }
}
