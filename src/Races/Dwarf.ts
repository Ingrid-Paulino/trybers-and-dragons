import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static instaceCount = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.instaceCount += 1;
    this._maxLifePoints = 80;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.instaceCount;
  }
}

// const dwarf1 = new Dwarf('dudu', 10);
// console.log('dwarf1', dwarf1);

export default Dwarf;