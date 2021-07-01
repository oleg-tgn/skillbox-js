(() => {
  const app = {
    map: [],
    btnList: null,
    gameContainer: null,
    firstClicked: null,
    lastButtons: [],
    title: null,
    groupSize: null,
    inputSize: null,
    btnSize: null,
    size: 4,
    opened: 0,
    buttonRestart: null,
    timerLabel: null,
    stopGame: false,
    baseSeconds: 10,
    seconds: 10,

    shuffle() {
      let j, temp;
      let arr = this.map;
      for(let i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    },

    createGame(gameContainerId = 'game') {
      this.gameContainer = document.getElementById(gameContainerId);
     
      this.title = document.createElement('h1');     
      this.title.textContent = `Игра "пары"`;
      this.title.classList.add('h1');

      this.groupSize = document.createElement('div');
      this.groupSize.classList.add('input-group', 'game__input');

      this.inputSize = document.createElement('input');
      this.inputSize.classList.add('form-control');
      this.inputSize.placeholder = 'Размер поля от 2 до 10';

      this.btnSize = document.createElement('button');
      this.btnSize.classList.add('btn', 'btn-outline-secondary');
      this.btnSize.textContent = `Создать`;

      this.gameContainer.append(this.title);
      this.gameContainer.append(this.groupSize);
      this.groupSize.append(this.inputSize);
      this.groupSize.append(this.btnSize);

      this.btnSize.addEventListener('click', this.setBtnSize.bind(this))
    },

    setBtnSize() {
      this.size = this.inputSize.value ? this.inputSize.value : 4;

      this.startGame();
    },

    createButtons() {
      if (this.btnList) this.btnList.remove();

      this.btnList = document.createElement('div');
      this.gameContainer.append( this.btnList );

      this.btnList.classList.add('map');
      this.btnList.classList.add('map--' + this.size);

      for (const item of this.map) {
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-secondary', 'btn-lg', 'map__btn');
        button.id = item;

        button.addEventListener('click', this.clickBtn.bind(this) );

        this.btnList.append(button);
      }     
    },    

    clickBtn(event) {
      if (this.stopGame) return;
      const button = event.target; 
      const btnStatus = {
        closeBtn(btn) {
          if (btn) {
            btn.classList.remove('btn-primary', 'open');
            btn.classList.add('btn-secondary');
            btn.textContent = '';
          }
        },
    
        openBtn(btn) {
          if (btn) {
            btn.classList.remove('btn-secondary');
            btn.classList.add('btn-primary', 'open');
            btn.textContent = button.id;
          }
        },
    
        successBtn(btn) {
          if (btn) {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-success', 'open');
            btn.textContent = btn.id;
          }
        },
      }

      if (!button.classList.contains('open')) {
        btnStatus.openBtn(button);
        
        if (this.lastButtons.length == 2) {
          btnStatus.closeBtn(this.lastButtons[0]);
          btnStatus.closeBtn(this.lastButtons[1]);
          this.lastButtons = [];
          this.lastButtons.push(event.target);
        } 
        else if (this.lastButtons.length == 1 ) {
          if (this.lastButtons[0].id == button.id) {
            btnStatus.successBtn(button);
            btnStatus.successBtn(this.lastButtons[0]);
            this.lastButtons = [];
            this.opened += 2;

            if (this.opened == this.size * this.size) {
              this.stopGame = true;
              this.finishGame();
              clearInterval(this.timer);
            }
          } else {
            this.lastButtons.push(event.target);
          } 
        } else {
          this.lastButtons.push(event.target);
        }
      }
    },

    generateMap() {
      length = this.size;
      if (length >=2 && length <= 10 && length % 2 == 0) {
        this.map = [];
        let num = 1;
        length *= length;
        for (let i = 0; i < length; i += 2) {
          this.map[i] = this.map[i + 1] = num;
          num++;
        }
        
      } else {
        this.map = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
        this.size = 4;
      }      
    },

    createTimer() {
      if ( this.timerLabel == null) {
        this.timerLabel = document.createElement('div');
        this.timerLabel.classList.add('timer');
      }
      this.timerLabel.textContent = 'Timer: ' + this.seconds;

      this.gameContainer.append(this.timerLabel);   
      this.timer = setInterval(() => {
        this.seconds--;
          this.timerLabel.textContent = 'Timer: ' + this.seconds;
          if (this.seconds == 0) {
              clearInterval(this.timer);
              this.stopGame = true;
              this.seconds =  this.baseSeconds;
              this.finishGame();
          }
      }, 1000);
    },

    finishGame() {
      this.buttonRestart = document.createElement('button');
      this.buttonRestart.textContent = 'Сыграть ещё раз';
      this.buttonRestart.classList.add('btn', 'btn-success', 'mt-4');
      this.gameContainer.append(this.buttonRestart);

      let resultLabel = document.createElement('div');
      resultLabel.textContent = `Ваш результат ${this.opened / 2} из ${this.size * this.size / 2} пар за ${this.baseSeconds - this.seconds} секунд`;
      this.timerLabel.append(resultLabel);

      this.buttonRestart.addEventListener('click', this.startGame.bind(this));
    },

    startGame() {
      this.stopGame = false;
      if (this.buttonRestart != null) this.buttonRestart.remove();
      this.generateMap();
      this.shuffle();
      this.createButtons();
      this.createTimer();
    }

  };

  document.addEventListener('DOMContentLoaded', function() {
    app.createGame();
  });
})()