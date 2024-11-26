let currentBalance = 50;
var history = document.getElementById("history-logs");

function transferLoad() {
  let mobileNumber = document.getElementById("mobile-number").value;
  let amount = document.getElementById("amount").value;

  console.log(mobileNumber);
  console.log(amount);

  if (currentBalance <= 0 || amount > currentBalance) {
    loanBalance();
  } else {
    currentBalance = currentBalance - amount;
    console.log("-" + amount);
    console.log(currentBalance);
  }
}

function loanBalance() {
  let loanAmount = 500;
  currentBalance = currentBalance + loanAmount;
  console.log("umutang ka ng " + loanAmount);
  console.log("+ " + loanAmount);
  console.log(currentBalance);
}
