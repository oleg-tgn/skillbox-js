document.addEventListener('DOMContentLoaded', function() {
  let timer = 0;
  let timerButton = document.getElementById('startTimer');
  let timerStartValue = document.getElementById('timerStartValue');
  let timerValue = document.getElementById('timerValue');
  let timerInterval;

  timerButton.addEventListener('click', function() {
    timer = parseInt(timerStartValue.value);
    stopTimer();
    startTimer(timer);   
  });

  function startTimer(timer) {
    timerInterval = setInterval(setTimerValue, 1000, timer);
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  function setTimerValue() {
    timerValue.textContent = timer;
    if (timer == 0) stopTimer(timer);
    timer--;
  }
});