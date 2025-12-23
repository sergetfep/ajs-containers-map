export default class Character {
  constructor(baseAttack) {
    this.baseAttack = baseAttack;
    this.distance = 1;
    this._stoned = false;
    void this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this.baseAttack = value;
  }

  get attack() {
    if (this.distance < 1 || this.distance > 5) {
      return 0;
    }
    let result = this.baseAttack * (1 - (this.distance - 1) * 0.1);
    if (this.stoned) result -= Math.log2(this.distance) * 5;
    return Math.floor(result);
  }
}
