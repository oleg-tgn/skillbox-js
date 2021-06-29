(() => {
  const app = {
    map: [],
    btnList: null,
    gameContainer: null,
    firstClicked: null,
    lastButtons: [],
    size: 4,

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

    createButtons() {
      btnList = this.btnList;

      btnList = document.createElement('div');
      this.gameContainer.append(btnList);

      btnList.classList.add('map');
      btnList.classList.add('map--' + this.size);

      for (const item of this.map) {
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-secondary', 'btn-lg', 'map__btn');
        button.id = item;

        button.addEventListener('click', this.clickBtn.bind(this) );

        btnList.append(button);
      }     
    },    

    clickBtn(event) {
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

    startGame(gameContainerId = 'game') {
      this.gameContainer = document.getElementById(gameContainerId);
      this.size = 6;

      this.generateMap();
      this.shuffle();
      this.createButtons();
    }

  };

  document.addEventListener('DOMContentLoaded', function() {
    app.startGame();
  });
})()