// function createBankAccount(initialBalance) {
//   let deposits = [];
//   let withdrawals = [];
//   let balance = initialBalance;
//   let transactionId = 0;

//   return {

//     getTransactionId() {
//        transactionId += 1;
//        return transactionId;
//     },
//     getBalance() {
//       return balance;
//     },
//     deposit(amount) {
//       balance += amount;
//       deposits.push([this.getTransactionId(), amount]);
//     },
//     withdraw(amount) {
//       if (amount > balance) {
//         amount = balance;
//       }

//       balance -= amount;
//       withdrawals.push([this.getTransactionId(), amount]);
//     },
//     getDeposits() {
//       return deposits;
//     },
//     getWithdrawals() {
//       return withdrawals;
//     },
//   };
// }

let BankAccount = (function() {
  let deposits = [];
  let withdrawals = [];
  let balance;
  let transactionId = 0;

  function getTransactionId() {
    transactionId += 1;
    return transactionId;
  }

  return class {

    constructor(initialBalance) {
      balance = initialBalance;
    }

    getBalance() {
      return balance;
    }

    deposit(amount) {
      balance += amount;
      deposits.push([getTransactionId(), amount]);
    }

    withdraw(amount) {
      if (amount > balance) {
        amount = balance;
      }

      balance -= amount;
      withdrawals.push([getTransactionId(), amount]);
    }

    getDeposits() {
      return deposits;
    }

    getWithdrawals() {
      return withdrawals;
    }
  };
})();

let account = new BankAccount(1000);
let account2 = new BankAccount(2000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());
console.log(account.getDeposits());
console.log(account.getWithdrawals());
