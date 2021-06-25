(() => {
  const app = {
    map: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8],
    btnList: null,
    gameContainer: null,
    firstClicked: null,
    lastClicked: null,

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
        //button.textContent = item;
        button.addEventListener('click', function() { this.clickBtn() });

        btnList.append(button);

      }     
    },    

    clickBtn() {
      console.log("CLICK");
      const button = e.target;
      const btnStatus = {
        closeBtn(button) {
          if (button) {
            button.classList.remove('btn-primary', 'open');
            button.classList.add('btn-secondary');
            button.textContent = '';
          }
        },
    
        openBtn(button) {
          if (button) {
            button.classList.remove('btn-secondary');
            button.classList.add('btn-primary', 'open');
            button.textContent = button.id;
          }
        },
    
        successBtn(button) {
          if (button) {
            button.classList.remove('btn-primary');
            button.classList.add('btn-success', 'open');
            button.textContent = button.id;
          }
        },
      }

      if (!button.classList.contains('open')) {
        btnStatus.openBtn(button);
        // console.log( this.lastClicked.id );
        // console.log( button.id );
        
        if (this.lastClicked && this.lastClicked.id) {
          console.log( this.lastClicked.id );
          console.log( button.id );
          if (this.lastClicked.id == button.id) {
            btnStatus.successBtn(button);
            btnStatus.successBtn(this.lastClicked);
            this.lastClicked = null;
          } else {
            btnStatus.closeBtn(this.lastClicked);
            this.lastClicked = button;
          }
        } else {
          btnStatus.closeBtn(this.lastClicked);
          this.lastClicked = button;
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