// knight or sorcerer
// littleMonster or bigmonster

class Character {
  _Powerlife = 1;
  maxPowerLife = 1;
  strengthAttack = 0;
  strengthDefense = 0;

  constructor(name) {
    this.name = name;
  }

  get life() {
    return this._Powerlife;
  }

  set life(newLife) {
    this._Powerlife = newLife < 0 ? 0 : newLife;
  }
}

class Knight extends Character {
  constructor(name) {
    super(name);
    this.life = 100;
    this.maxPowerLife = this.life;
    this.strengthAttack = 10;
    this.strengthDefense = 8;
  }
}

class Sorcerer extends Character {
  constructor(name) {
    super(name);
    this.life = 80;
    this.maxPowerLife = this.life;
    this.strengthAttack = 15;
    this.strengthDefense = 4;
  }
}

class LittleMonster extends Character {
  constructor() {
    super('Little Monster');
    this.life = 40;
    this.maxPowerLife = this.life;
    this.strengthAttack = 4;
    this.strengthDefense = 4;
  }
}

class BigMonster extends Character {
  constructor() {
    super('Big Monster');
    this.life = 120;
    this.strengthAttack = 16;
    this.strengthDefense = 6;
    this.maxPowerLife = this.life;
  }
}

class Stage {
  constructor(fighter1, fighter2, fighter1El, fighter2El, logObj) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;
    this.log = logObj;
  }

  start() {
    this.update();

    this.fighter1El
      .querySelector('.attack-button')
      .addEventListener('click', (ev) =>
        this.doAttack(this.fighter1, this.fighter2)
      );

    this.fighter2El
      .querySelector('.attack-button')
      .addEventListener('click', (ev) =>
        this.doAttack(this.fighter2, this.fighter1)
      );
  }

  update() {
    // fighter 1
    this.fighter1El.querySelector('.name').innerHTML = `${
      this.fighter1.name
    } ${this.fighter1.life.toFixed(1)} HP`;
    let lifePct1 = (this.fighter1.life / this.fighter1.maxPowerLife) * 100;
    this.fighter1El.querySelector('.bar').style.width = `${lifePct1}%`;

    //fighter 2
    this.fighter2El.querySelector('.name').innerHTML = `${
      this.fighter2.name
    } ${this.fighter2.life.toFixed(1)} HP`;
    let lifePct2 = (this.fighter2.life / this.fighter2.maxPowerLife) * 100;
    this.fighter2El.querySelector('.bar').style.width = `${lifePct2}%`;
  }

  doAttack(attacking, attacked) {
    if (attacking.life <= 0 || attacked.life <= 0) {
      if (attacking.life <= 0) {
        this.log.addMessage(`${attacking.name} morreu`);
      }
      this.log.addMessage(`${attacked.name} morreu`);
      return;
    }

    let attackFactor = (Math.random() * 2).toFixed(2);
    let defenseFactor = (Math.random() * 2).toFixed(2);

    let actualAttack = attacking.strengthAttack * attackFactor;
    let actualDefense = attacked.strengthDefense * defenseFactor;

    if (actualAttack > actualDefense) {
      this.log.addMessage(`${attacking.name} causou dano`);
      attacked.life -= actualAttack;
    } else {
      this.log.addMessage(`${attacked.name} defendeu`);
    }

    this.update();
  }
}

class Log {
  list = [];

  constructor(listEl) {
    this.listEl = listEl;
  }

  addMessage(msg) {
    this.list.push(msg);
    this.render();
  }

  render() {
    this.listEl.innerHTML = '';

    for (let i in this.list) {
      this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
    }
  }
}
