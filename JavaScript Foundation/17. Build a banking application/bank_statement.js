// Create a customer object with name and balance properties
const customer = {
    name: "Ashwin",
    balance: 1000,
    
    // Method to deposit money into the account
    deposit: function(amount) {
      this.balance += amount;
      console.log(`Deposit of ${amount} successful. New balance is ${this.balance}.`);
    },
    
    // Method to withdraw money from the account
    withdraw: function(amount) {
      if (amount > this.balance) {
        console.log("Insufficient funds.");
      } else {
        this.balance -= amount;
        console.log(`Withdrawal of ${amount} successful. New balance is ${this.balance}.`);
      }
    }
  };
  
  // Test the deposit and withdraw methods
  customer.deposit(1000);
  customer.withdraw(500);
  customer.withdraw(500);