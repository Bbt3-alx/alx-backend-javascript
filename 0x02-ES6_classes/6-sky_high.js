import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);

    this._floors = floors;
    this._sqft = sqft;
  }

  get floors() {
    return this._floors;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
