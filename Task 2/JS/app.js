"use strict";

const employees = {
    wallet: {},
    pay(month, sum) {
      if (!this.wallet.hasOwnProperty()) {
        this.wallet = {};
      }
      this.wallet[month] = sum;
    }
}

const frontendDeveloper = {
    name: 'Mike',
}
Object.setPrototypeOf(frontendDeveloper, employees)
console.log(frontendDeveloper)

const backendDeveloper = {
    name: 'Bob',
}
Object.setPrototypeOf(backendDeveloper, employees)
backendDeveloper.pay('june', 1500);

console.log(backendDeveloper.wallet.june)
console.log(frontendDeveloper.wallet.june)
