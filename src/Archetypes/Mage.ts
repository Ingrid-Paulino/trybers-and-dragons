import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _Mage: EnergyType;
  static instaceCount = 0;

  constructor(name: string) {
    super(name);
    this._Mage = 'mana';
    Mage.instaceCount += 1;
  }

  get energyType(): EnergyType {
    return this._Mage;
  }

  static createdArchetypeInstances(): number {
    return this.instaceCount;
  }
}

export default Mage;