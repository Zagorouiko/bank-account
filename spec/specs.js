describe("BankAccount", function () {
  it("displays the balance and account name", function() {
    var testBankAccount = new BankAccount("David", 1000);
    expect(testBankAccount.accountName).to.equal("David");
    expect(testBankAccount.balance).to.equal(1000);


  });

  // it("adds to the balance using deposit", function() {
  //   var testBankAccount = new BankAccount(1000);
  //   expect(testBankAccount.deposit(1000)).to.equal(2000);
  // });
});
