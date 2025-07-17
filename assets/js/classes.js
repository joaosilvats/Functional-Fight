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
