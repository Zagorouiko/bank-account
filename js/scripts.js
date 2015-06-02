function BankAccount(accountName, balance) {
  this.accountName = accountName
  this.balance = balance
}

BankAccount.prototype.deposit = function() {
  this.balance = this.balance + balance
}
