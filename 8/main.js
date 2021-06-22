document.addEventListener('DOMContentLoaded', function() {
  createTodoApp(document.getElementById('my-todos'), 'Мои дела');
  createTodoApp(document.getElementById('mom-todos'), 'Дела для мамы');
  createTodoApp(document.getElementById('dad-todos'), 'Дела для папы');
});