document.addEventListener('DOMContentLoaded', function() {
  let title = document.getElementById("title");
  let inputTitle = document.getElementById("inputTitle");
  let timeoutId;

  inputTitle.addEventListener('input', function() {
    stopTimeout();
    startTimeout();
  });

  function startTimeout() {
    timeoutId = setTimeout(function() {
      title.textContent = inputTitle.value;
    }, 300);
  }

  function stopTimeout() {
    clearTimeout(timeoutId);
  }
});