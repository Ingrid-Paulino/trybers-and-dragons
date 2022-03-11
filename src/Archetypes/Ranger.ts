import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _Ranger: EnergyType;
  static instaceCount = 0;

  constructor(name: string) {
    super(name);
    this._Ranger = 'stamina';
    Ranger.instaceCount += 1;
  }

  get energyType(): EnergyType {
    return this._Ranger;
  }

  static createdArchetypeInstances(): number {
    return this.instaceCount;
  }
}

export default Ranger;