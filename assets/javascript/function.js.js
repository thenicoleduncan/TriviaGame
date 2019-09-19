
$(document).ready(function () {

  var timerTime = 120

  var timeInterval;

  function startTime() {

    timerTime = 120;

    timeInterval = window.setInterval(function () {
    timerTime--
    document.getElementById('timer').innerHTML = timerTime
    }, 1000);

  };

  function stopTime() {

    if (timeInterval === 0){
    clearTimeout(timeInterval)
    alert("times up");
    }

  };

  

  startTime();
  stopTime();




});
