class Human {
    #timeLife; 
    #timeSleep;
    #timeFeed;
    #theHero = false;
    constructor(firstName, lastName, gender, age, calories, image) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
      this.age = age;
      this.calories = calories;
      this.image = image;
    }
    life() {
      this.#timeLife = setInterval(() => {   
          this.calories -= 200 / (100 * 60); 
          document.querySelector('#calories').innerHTML = Math.floor(this.calories);
          if (this.calories < 483) {
            document.querySelector('.alert').innerHTML = `I'm hungry!!!`;
            document.querySelector('.alert').classList = 'alert active';
            document.querySelector('.say').classList = 'say active';
          }
      }, 10);
    }

    sleepFor() {
      this.startSleep();
        setTimeout(()=> {
            this.stopSleep();
        }, 10000);
    }

    startSleep() {
      let time = 10;
      clearInterval(this.#timeLife);
      document.querySelector('#sleeping').innerHTML = `I'm sleeping.. hr..hr..sheep..hr..`;
      this.timer_sleep(time);
    }

    stopSleep() {
      this.life();
      document.querySelector('.buttons').classList.toggle('stop');
      document.querySelector('.sleep').classList.toggle('active');
      human.#theHero;
      if (human.#theHero) {
        document.querySelector('.buttons-hero').classList.add('active');
      }
    }

    timer_sleep(time) {
      document.querySelector('#sleeptime').innerHTML = `Time for awack: ${time} sec`;
      this.#timeSleep = setInterval(() => {   
        if (time > 0) {
          time -= 1;
          document.querySelector('#sleeptime').innerHTML = `Time for awack: ${time} sec`;
          if (time === 1) {
            document.querySelector('#sleeping').innerHTML = `I'm awack now!!!`;
          }
        }
        else {
          clearInterval(this.#timeSleep);
        }
      }, 1000);

      document.querySelector('.buttons').classList.add('stop');
      document.querySelector('.sleep').classList.add('active');
      human.hero();
      if (human.#theHero) {
        document.querySelector('.buttons-hero').classList.remove('active');
      }
    }

    feed() {
      this.startFeed();
      this.#timeLife = setInterval(() => {    
        this.calories += 1;
        document.querySelector('#calories').innerHTML = Math.floor(this.calories);
        if (this.calories > 500) {
          document.querySelector('.alert').classList = 'alert';
          document.querySelector('.say').classList = 'say';
        }
      }, 50);
      setTimeout(()=> {
        this.stopFeed();
      }, 10000);
    }

    startFeed() {
      let time = 10;
      clearInterval(this.#timeLife);
      document.querySelector('#feeding').innerHTML = `Nom.. nom.. nom... hrum.. hr..`;
      this.timer_feed(time);
    }

    stopFeed() {
      clearInterval(this.#timeLife);
      if (this.calories < 500) {
        document.querySelector('.alert').innerHTML = `I'm still hungry!`;
        document.querySelector('.alert').classList = 'alert active';
        document.querySelector('.say').classList = 'say active';
        setTimeout(() => {
          document.querySelector('.alert').classList = 'alert';
          document.querySelector('.say').classList = 'say';
        }, 3000); 
      }
      this.life();
      document.querySelector('.buttons').classList.toggle('stop');
      document.querySelector('.feed').classList.toggle('active');
      
    }

    timer_feed(time) {
      document.querySelector('#feedtime').innerHTML = `Time for end of feeding: ${time} sec`;
      this.#timeFeed = setInterval(() => {   
        if (time > 0) {
          time -= 1;
          document.querySelector('#feedtime').innerHTML = `Time for end of feeding: ${time} sec`;
        }  
        else {
          clearInterval(this.#timeFeed);
        }
      }, 1000);

      document.querySelector('.buttons').classList.add('stop');
      document.querySelector('.feed').classList.add('active');
    }
    hero() {
      this.#theHero = true;
    }
    stopHero() {
      this.#theHero = false;
      document.querySelector('#foto').setAttribute('src', this.image);
      document.querySelector('.buttons-hero').classList.remove('active');
      document.querySelector('#gohero').setAttribute('style', 'display: block;');
    }
    isHero() {
      return this.#theHero;
    }
}

class Superhero extends Human {
  #timeFly;
  #timeFight;
  constructor(firstName, lastName, gender, age, calories) {
      super(firstName, lastName, gender, age, calories);
      this.firstName = human.firstName;
      this.lastName = human.lastName;
      this.gender = human.gender;
      this.age = human.age;
      this.calories = human.calories;
      this.image = './assets/images/superhero.jpg';
  }

  start () {
    human.hero();
    document.querySelector('#foto').setAttribute('src', this.image);
    document.querySelector('#gohero').setAttribute('style', 'display: none;');
    document.querySelector('.buttons-hero').classList.add('active');
  }

  fly() {
    this.startFly();
      setTimeout(()=> {
          this.stopFly();
      }, 10000);
  }

  startFly() {
    let time = 10;
    document.querySelector('#flying').innerHTML = `I'm flying!`;
    this.timer_fly(time);
  }

  stopFly() {
    document.querySelector('.buttons').classList.toggle('stop');
    document.querySelector('.buttons-hero').classList.add('active');
    document.querySelector('.fly').classList.toggle('active');
  }

  timer_fly(time) {
    document.querySelector('#flytime').innerHTML = `Time for end flying: ${time} sec`;
    this.#timeFly = setInterval(() => {   
      if (time > 0) {
        time -= 1;
        document.querySelector('#flytime').innerHTML = `Time for end flying: ${time} sec`;
      }
      else {
        clearInterval(this.#timeFly);
      }
    }, 1000);

    document.querySelector('.buttons').classList.add('stop');
    document.querySelector('.buttons-hero').classList.remove('active');
    document.querySelector('.fly').classList.add('active');
  }
  fight() {
    this.startFight();
    setTimeout(()=> {
      this.stopFight();
    }, 5000);
  }

  startFight() {
    let time = 5;
    document.querySelector('#fighting').innerHTML = `Khhhh-chh... Bang-g-g-g.`;
    this.timer_fight(time);
  }

  stopFight() {
    document.querySelector('.buttons').classList.toggle('stop');
    document.querySelector('.buttons-hero').classList.add('active');
    document.querySelector('.fight').classList.toggle('active');

    document.querySelector('.alert').innerHTML = `Evil is defeated!`;
    document.querySelector('.alert').classList = 'alert active';
    document.querySelector('.say').classList = 'say active';
    setTimeout(() => {
      document.querySelector('.alert').classList = 'alert';
      document.querySelector('.say').classList = 'say';
    }, 3000); 
  }

  timer_fight(time) {
    document.querySelector('#fighttime').innerHTML = `Time for end fighting: ${time} sec`;
    this.#timeFight = setInterval(() => {   
      if (time > 0) {
        time -= 1;
        document.querySelector('#fighttime').innerHTML = `Time for end fighting: ${time} sec`;
      }
      else {
        clearInterval(this.#timeFight);
      }
    }, 1000);
    document.querySelector('.buttons').classList.add('stop');
    document.querySelector('.buttons-hero').classList.remove('active');
    document.querySelector('.fight').classList.add('active');
  }

}

const human = new Human('Boris', 'Razor', 'male', 19, 500, './assets/images/human.jpg');
let hero;

let board = document.querySelector('.board')

displayHuman();
human.life();
let validate = setInterval(() => {   
  if(human.calories < 500 && human.isHero()) {
    human.stopHero();
    hero = '';
  }
}, 10);


function displayHuman() {
    board.innerHTML = '';
    board.insertAdjacentHTML('afterbegin',`<div class="say"><img src="./assets/images/egg.png" alt=""></div>`); 
    board.insertAdjacentHTML('afterbegin',`<div class="alert"></div>`);     
    board.insertAdjacentHTML('beforeend',`<div class="image"><img id="foto" src="${human.image}" alt=""></div>`);
    board.insertAdjacentHTML('beforeend',`<div class="description"></div>`);
    let description = document.querySelector('.description');
    description.insertAdjacentHTML('beforeend',`<div class="value">First name: <span>${human.firstName}</span></div>`);
    description.insertAdjacentHTML('beforeend',`<div class="value">Last name: <span>${human.lastName}</span></div>`);
    description.insertAdjacentHTML('beforeend',`<div class="value">Gender: <span>${human.gender}</span></div>`);
    description.insertAdjacentHTML('beforeend',`<div class="value">Age: <span>${human.age}</span></div>`);
    description.insertAdjacentHTML('beforeend',`<div class="value">Calories: <span id="calories"></span></div>`);
    
    board.insertAdjacentHTML('beforeend',`<div class="buttons"></div>`);
    let buttons = document.querySelector('.buttons');
    buttons.insertAdjacentHTML('beforeend',`<div id="sleep" class="button">Sleep</div>`);
    buttons.insertAdjacentHTML('beforeend',`<div id="feed" class="button">Feed</div>`);
    buttons.insertAdjacentHTML('beforeend',`<div id="gohero" class="button">Turn into superhero</div>`);
    document.querySelector('#feed').addEventListener('click', getFeed);
    document.querySelector('#sleep').addEventListener('click', getSleep);
    document.querySelector('#gohero').addEventListener('click', getHero);

    board.insertAdjacentHTML('beforeend',`<div class="buttons-hero"></div>`);
    let buttons_hero = document.querySelector('.buttons-hero');
    buttons_hero.insertAdjacentHTML('beforeend',`<div id="fly" class="button">Fly</div>`);
    buttons_hero.insertAdjacentHTML('beforeend',`<div id="fight" class="button">Fight with Evil</div>`);
    document.querySelector('#fly').addEventListener('click', getFly);
    document.querySelector('#fight').addEventListener('click', getFight);
   

    board.insertAdjacentHTML('beforeend',`<div class="sleep"></div>`);
    let sleep = document.querySelector('.sleep');
    sleep.insertAdjacentHTML('beforeend',`<div id="sleeping" class="alert-sleep"></div>`);
    sleep.insertAdjacentHTML('beforeend',`<div id="sleeptime" class="alert-sleep"></div>`);
    board.insertAdjacentHTML('beforeend',`<div class="feed"></div>`);
    let feed = document.querySelector('.feed');
    feed.insertAdjacentHTML('beforeend',`<div id="feeding" class="alert-feed"></div>`);
    feed.insertAdjacentHTML('beforeend',`<div id="feedtime" class="alert-feed"></div>`);

    board.insertAdjacentHTML('beforeend',`<div class="fly"></div>`);
    let fly = document.querySelector('.fly');
    fly.insertAdjacentHTML('beforeend',`<div id="flying" class="alert-fly"></div>`);
    fly.insertAdjacentHTML('beforeend',`<div id="flytime" class="alert-fly"></div>`);
    board.insertAdjacentHTML('beforeend',`<div class="fight"></div>`);
    let fight = document.querySelector('.fight');
    fight.insertAdjacentHTML('beforeend',`<div id="fighting" class="alert-fight"></div>`);
    fight.insertAdjacentHTML('beforeend',`<div id="fighttime" class="alert-fight"></div>`);
}

function getFeed() {
  if (human.calories > 500) {
    document.querySelector('.alert').innerHTML = `I'm not hungry!`;
    document.querySelector('.alert').classList = 'alert active';
    document.querySelector('.say').classList = 'say active';
    setTimeout(() => {
      document.querySelector('.alert').classList = 'alert';
      document.querySelector('.say').classList = 'say';
    }, 2000);
  }
  else {
    human.feed();
  }
}

function getSleep() {
  human.sleepFor();
}

function getHero() {
  if (human.calories > 500) {
    hero = new Superhero();
    hero.start();
    console.log(hero);
  } 
  else {
    let div = document.createElement('div');
    div.className = 'message';
    div.innerHTML =  'You are low on calories!';
    document.querySelector('.board').prepend(div);
    setTimeout(() => {div.remove()}, 3000);
  }
}

function getFly() {
  hero.fly();
}

function getFight() {
  hero.fight();
}