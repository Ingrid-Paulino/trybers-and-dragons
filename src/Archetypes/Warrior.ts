import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _Warrior: EnergyType;
  static instaceCount = 0;

  constructor(name: string) {
    super(name);
    this._Warrior = 'stamina';
    Warrior.instaceCount += 1;
  }

  get energyType(): EnergyType {
    return this._Warrior;
  }

  static createdArchetypeInstances(): number {
    return this.instaceCount;
  }
}

export default Warrior;