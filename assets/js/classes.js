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
  constructor(fighter1, fighter2, fighter1El, fighter2El) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;
  }

  start() {
    this.update();
  }

  update() {
    // fighter 1
    this.fighter1El.querySelector(
      '.name'
    ).innerHTML = `${this.fighter1.name} ${this.fighter1.life} HP`;
    let lifePct1 = (this.fighter1.life / this.fighter1.maxPowerLife) * 100;
    this.fighter1El.querySelector('.bar').style.width = `${lifePct1}%`;

    //fighter 2
    this.fighter2El.querySelector(
      '.name'
    ).innerHTML = `${this.fighter2.name} ${this.fighter2.maxPowerLife}  HP`;
    let lifePct2 = (this.fighter2.life / this.fighter2.life) * 100;
    this.fighter2El.querySelector('.bar').style.width = `${lifePct2}%`;
  }
}
