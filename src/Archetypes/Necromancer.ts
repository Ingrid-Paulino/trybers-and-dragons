import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _Necromancer: EnergyType;
  static instaceCount = 0;

  constructor(name: string) {
    super(name);
    Necromancer.instaceCount += 1;
    this._Necromancer = 'mana';
  }

  get energyType(): EnergyType {
    return this._Necromancer;
  }

  static createdArchetypeInstances(): number {
    return this.instaceCount;
  }
}

export default Necromancer;