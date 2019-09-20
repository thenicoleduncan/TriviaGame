
$(document).ready(function () {

  var timerTime = 15

  var timeInterval;

  function startTime() {

    timerTime = 15;

    timeInterval = window.setInterval(function () {
      timerTime--
      stopTime();
      document.getElementById('timer').innerHTML = timerTime
    }, 1000);

  };

  function stopTime() {

    if (timerTime === 0) {
      clearInterval(timeInterval);
      alert("times up");
      endGame();
    }

  };

  startTime();

  // var correct = ;
  // var incorrect = ;

  // function endGame(){

  //   if ("formquestion0" === "48" && "formquestion1" === "") {

  //   }

  // }

  
});
