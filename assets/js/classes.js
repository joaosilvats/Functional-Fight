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
    this.life = 120;
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
