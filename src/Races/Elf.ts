import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static instaceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.instaceCount += 1;
    this._maxLifePoints = 99;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.instaceCount;
  }
}

export default Elf;