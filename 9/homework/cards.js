(() => {
  let lastButton = null;

  const app = {
    map: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8],
    btnList: null,
    gameContainer: null,
    firstClicked: null,

    shuffle() {
      var j, temp;
      let arr = this.map;
      for(var i = arr.length - 1; i > 0; i--){
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

      for (const item of this.map) {
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-secondary', 'btn-lg', 'map__btn');
        button.id = item;

        button.addEventListener('click',  () => this.clickBtn() );

        btnList.append(button);
      }     
    },    

    clickBtn() {      
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
        
        if (lastButton != null) {
          if (lastButton.id == button.id) {
            btnStatus.successBtn(button);
            btnStatus.successBtn(lastButton);
            lastButton = null;
          } else {
            btnStatus.closeBtn(lastButton);
            lastButton = button;
          }
        } else {
          btnStatus.closeBtn(lastButton);
          lastButton = button;
        }
      }
    },

    startGame(gameContainerId = 'game') {
      this.gameContainer = document.getElementById(gameContainerId);

      this.shuffle();
      console.log(this.map);
      this.createButtons();
    }

  };

  document.addEventListener('DOMContentLoaded', function() {
    app.startGame();
  });
})()