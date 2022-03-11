import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 0;
  static instaceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.instaceCount += 1;
    this._maxLifePoints = 60;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.instaceCount;
  }
}

export default Halfling;