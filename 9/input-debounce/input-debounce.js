(() => {
  const WAIT_TIME_MS = 300;

  const textInput = document.createElement('input');
  const display = document.createElement('div');

  let timeout;

  textInput.addEventListener('input', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      display.textContent = textInput.value
    }, WAIT_TIME_MS);
  });

  document.addEventListener('DOMContentLoaded', () => {

  });
})();