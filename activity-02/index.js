let currentBalance = 50;
// var textBalance = document.getElementById(txtBalance);

// textBalance.textContent += currentBalance;

function transferLoad() {
  var history = document.getElementById("history-logs");

  let mobileNumber = document.getElementById("mobile-number").value;
  let amount = document.getElementById("amount").value;

  console.log(mobileNumber);
  console.log(amount);

  if (currentBalance <= 0 || amount > currentBalance) {
    loanBalance();
  } else {
    currentBalance = currentBalance - amount;
    history.textContent += "-" + amount;
    console.log("-" + amount);
    console.log(currentBalance);
  }

  function loanBalance() {
    let loanAmount = 500;
    currentBalance = currentBalance + loanAmount;
    history.textContent += " umutang ka ng " + loanAmount;
    history.textContent += "+" + loanAmount;
    console.log("+ " + loanAmount);
    console.log(currentBalance);
  }
}
