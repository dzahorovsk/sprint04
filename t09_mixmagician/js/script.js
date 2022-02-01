let magician_box = document.querySelector('.magician');
let head = document.querySelector('#head');
let properties = document.querySelector('#properties');
let protoBtn = document.querySelectorAll('.protoBtn');

/* 
  your code
*/

const magician = {
  _hat: './assets/images/hat.png',
  _getPortrait(){
    if (this._portrait) return this._portrait;
    else return './assets/images/magician.png';
  },
  'do magic'(){
    console.log(`ABRACADABRA
    The prototype of ${this.name} is `);
    console.log(Object.getPrototypeOf(this));
  },
  'say hello'(){
    console.log(`Hello, my name is ${this.name}!`);
  }
};

/* 
  your code
*/

class Creature {
  constructor(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
  }
  
}

class Human extends Creature {
  constructor(name, age, species, job) {
    super(name, age, species);
    this.job = job;
    this._portrait = './assets/images/human.png';
  }
}

class Dog extends Creature {
  constructor(name, age, species, color) {
    super(name, age, species);
    this.color = color;
    this._portrait = './assets/images/dog.png';
  }
}

class Vampire extends Human {
  constructor(name, age, species, job) {
    super(name, age, species, job);
    this._portrait = './assets/images/vampire.png';
  }
}

let werewolf = {
  transform(){
    this.species = 'human';
    Object.assign(werewolf, magician);
    Object.setPrototypeOf(magician, werewolf);
    head.src = magician._getPortrait();
    addElement(magician);
  },
  howl(){
    console.log(`ARH-WOOOOOOOOOOOOOOOOOOOO`);
  }
}

const human = new Human('Linda', 22, 'human', 'doctor');
const vampire = new Vampire('Vlad', 915, 'vampire', 'unemployed', 'count');
const dog = new Dog('Fluffy', 3, 'dog', 'brown');
const mag = new Object();


addElement();

function changeStatus(ob) {
  let name = ob.innerHTML.split(' ')[0];
  protoBtn.forEach(element => {
    element.setAttribute('class', 'protoBtn');    
  });
  if (name === 'no') {
    protoBtn[0].setAttribute('class', 'protoBtn active');
    Object.setPrototypeOf(magician, mag);
    head.src = magician._getPortrait();
    addElement();
  }
  else if (name === 'human') {
    protoBtn[1].setAttribute('class', 'protoBtn active');
    Object.setPrototypeOf(magician, human);
    head.src = magician._getPortrait();
    addElement(magician);
  }
  else if (name === 'vampire') {
    protoBtn[2].setAttribute('class', 'protoBtn active');
    Object.setPrototypeOf(magician, vampire);
    head.src = magician._getPortrait();
    addElement(magician);
  }
  else if (name === 'dog') {
    protoBtn[3].setAttribute('class', 'protoBtn active');
    Object.setPrototypeOf(magician, dog);
    head.src = magician._getPortrait();
    addElement(magician);
  }
  else if (name === 'werewolf') {
    protoBtn[4].setAttribute('class', 'protoBtn active');
    Object.assign(werewolf, human);
    werewolf._portrait = './assets/images/werewolf.png';
    werewolf.species = 'werewolf';
    Object.setPrototypeOf(magician, werewolf);
    head.src = magician._getPortrait();
    addElement(magician);
  }
}

function addElement(el) {
  console.log(el);
  properties.innerHTML = '';
  if (el === undefined) {
    properties.innerHTML = 
      `<button id="do">do magic</button>`;
    let doButton = document.querySelector('#do');
    doButton.addEventListener('click', doMagic);
  } 
  else {
    if (el.species == 'werewolf') {
      console.log(el);
      properties.innerHTML = 
      `<button id="do">do magic</button><br>
      <button id="say">say hello</button><br>
      <button id="transform">transform</button><br>
      <button id="howl">howl</button><br>`;
      let doButton = document.querySelector('#do');
      doButton.addEventListener('click', doMagic); 
      let sayButton = document.querySelector('#say');
      sayButton.addEventListener('click', sayHello); 
      let transformButton = document.querySelector('#transform');
      transformButton.addEventListener('click', goTransform); 
      let howlButton = document.querySelector('#howl');
      howlButton.addEventListener('click', sayHowl); 
      properties.insertAdjacentHTML('beforeend',`<span>name: <span class="propValue">${el.name}</span></span><br>`);
      properties.insertAdjacentHTML('beforeend',`<span>age: <span class="propValue">${el.age}</span></span><br>`);
      properties.insertAdjacentHTML('beforeend',`<span>species: <span class="propValue">${el.species}</span></span><br>`);
      properties.insertAdjacentHTML('beforeend',`<span>job: <span class="propValue">${el.job}</span></span><br>`);
      el.species = 'human';
      el._portrait = './assets/images/human.png';
    }
    else if (el.species == 'human' && el.transform) {
        console.log(el);
        properties.innerHTML = 
        `<button id="do">do magic</button><br>
        <button id="say">say hello</button><br>
        <button id="transform">transform</button><br>`;
        let doButton = document.querySelector('#do');
        doButton.addEventListener('click', doMagic); 
        let sayButton = document.querySelector('#say');
        sayButton.addEventListener('click', sayHello); 
        let transformButton = document.querySelector('#transform');
        transformButton.addEventListener('click', goTransform); 
        properties.insertAdjacentHTML('beforeend',`<span>name: <span class="propValue">${el.name}</span></span><br>`);
        properties.insertAdjacentHTML('beforeend',`<span>age: <span class="propValue">${el.age}</span></span><br>`);
        properties.insertAdjacentHTML('beforeend',`<span>species: <span class="propValue">${el.species}</span></span><br>`);
        properties.insertAdjacentHTML('beforeend',`<span>job: <span class="propValue">${el.job}</span></span><br>`);
        el.species = 'werewolf';
        el._portrait = './assets/images/werewolf.png';
    }
    else {
      properties.innerHTML = 
      `<button id="do">do magic</button><br>
      <button id="say">say hello</button><br>`;
      let doButton = document.querySelector('#do');
      doButton.addEventListener('click', doMagic); 
      let sayButton = document.querySelector('#say');
      sayButton.addEventListener('click', sayHello); 
      if (el.name) {
        properties.insertAdjacentHTML('beforeend',`<span>name: <span class="propValue">${el.name}</span></span><br>`);
      }
      if (el.age) {
        properties.insertAdjacentHTML('beforeend',`<span>age: <span class="propValue">${el.age}</span></span><br>`);
      }
      if (el.species) {
        properties.insertAdjacentHTML('beforeend',`<span>species: <span class="propValue">${el.species}</span></span><br>`);
      }
      if (el.job) {
        properties.insertAdjacentHTML('beforeend',`<span>job: <span class="propValue">${el.job}</span></span><br>`);
      }
      if (el.title) {
        properties.insertAdjacentHTML('beforeend',`<span>title: <span class="propValue">${el.title}</span></span><br>`);
      }
      if (el.color) {
        properties.insertAdjacentHTML('beforeend',`<span>color: <span class="propValue">${el.color}</span></span><br>`);
      } 
    }
  } 
}

function doMagic() {
  magician['do magic']();
}

function sayHello() {
  magician['say hello']();
}

function goTransform() {
  werewolf.transform();
}

function sayHowl() {
  werewolf.howl();
}