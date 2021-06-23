(function() {
  let app = {
    containerId: '',
    list: [],
    cur_id: 0,

    addItem: function(item) {
      this.list.push(item);
      localStorage.setItem(this.containerId, JSON.stringify(this.list));
    },

    updateItemStatus: function(id) {
      for (let item of this.list) {
        if (id == item.id) {
          item.done = !item.done;
          break;
        }        
      }
      localStorage.setItem(this.containerId, JSON.stringify(this.list));
    },

    removeItem: function(id) {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].id == id) {
          this.list.splice(i, 1);
          break;
        }
      }
      localStorage.setItem(this.containerId, JSON.stringify(this.list));
    }
  };

  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';
    button.disabled = true;

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    input.addEventListener('input', function(e) {      
      button.disabled = (input.value == '');     
    });

    return {
      form,
      input,
      button,
    };

  }

  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  function createTodoItem(name, done = false, id) {
    let item = document.createElement('li');

    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = name;

    buttonGroup.classList.add('btn-group', 'btn-group-sn');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);
    item.id = id;
    if (done) {
      item.classList.add('list-group-item-success');
    }

    doneButton.addEventListener('click', function() {
      item.classList.toggle('list-group-item-success');
      app.updateItemStatus(item.id)
    });

    deleteButton.addEventListener('click', function() {
      if (confirm('Вы уверены?')) {
        app.removeItem(item.id);
        item.remove();
      }
    });

    return {
      item,
      doneButton,
      deleteButton
    }
  }

  function createDefaulList(todoList, todoListDefault) {
    for (let item of todoListDefault) {
      let todoItem = createTodoItem(item.name, item.done, app.cur_id);    
      todoList.append(todoItem.item);
      app.addItem({ 
        id: app.cur_id++, 
        name: item.name, 
        done: item.done 
      });
    }
  }

  function getTodoListStorage(containerId) {
    let list = localStorage.getItem(containerId);    
    return JSON.parse(list);
  }

  function createTodoApp(containerId, title = 'Список дел', todoListDefault = []) {
    let container = document.getElementById(containerId);
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    app.containerId = containerId;

    let todoListStorage = getTodoListStorage(containerId);
    
    if (todoListStorage && todoListStorage.lenght !== 0) { 
      createDefaulList(todoList, todoListStorage);
    } else if (todoListDefault.length !== 0) {
      createDefaulList(todoList, todoListDefault);
    }

    todoItemForm.form.addEventListener('submit', function(e) {
      e.preventDefault();

      if (!todoItemForm.input.value) {
        return;
      }

      let todoItem = createTodoItem(todoItemForm.input.value);  
      app.addItem({ 
        id: app.cur_id, 
        name: todoItemForm.input.value, 
        done: false,
      });  

      todoItem.item.id = app.cur_id;
      app.cur_id++;

      todoList.append(todoItem.item);
      todoItemForm.input.value = '';
      todoItemForm.button.disabled = true;
    });
  }

  window.createTodoApp = createTodoApp;
})();