class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number' || amount < 0) {
      throw new TypeError('Amount must be a valide number');
    }

    // if (typeof currency !== 'string' || currency.trim() === ''){
    //     throw new TypeError('Currency must be a string')
    // }

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number' || newAmount < 0) {
      throw new TypeError('Amount must be a valide number');
    }
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    // if (typeof currency !== 'string' || currency.trim() === ''){
    //     throw new TypeError('Currency must be a string')
    // }
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency._name} (${this.currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
