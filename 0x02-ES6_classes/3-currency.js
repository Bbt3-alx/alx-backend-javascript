class Currency {
  constructor(code, name) {
    if (typeof name !== 'string' || name.trim() === '') {
      throw new TypeError('Name must be a string');
    }

    if (typeof code !== 'string' || code.trim() === '') {
      throw new TypeError('Code must be a string');
    }

    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode !== 'string' || newCode.trim() === '') {
      throw new TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string' || newName.trim() === '') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
