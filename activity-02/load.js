let currentBalance = 50;
let displayBalance = document.querySelector("#txtBalance");

// textBalance.textContent += currentBalance;
window.onload = function () {
  displayBalance.textContent = "Balance: " + currentBalance;
};

function transferLoad() {
  let mobileNumber = document.getElementById("mobile-number").value;
  let amount = document.getElementById("amount").value;

  var history = document.querySelector("#history");

  // console.log(mobileNumber);
  // console.log(amount);

  if (currentBalance <= 0 || amount > currentBalance) {
    loanBalance();
  } else {
    addTransaction();
  }

  displayBalance.textContent = "Balance: " + currentBalance;

  function addTransaction() {
    currentBalance = currentBalance - amount;

    var transaction = document.createElement("p");
    transaction.innerHTML =
      '<div class="history-item"><p><span class="mobile-number">' +
      mobileNumber +
      '</span><span class="amount">-' +
      amount +
      "</span></p></div>";
    history.appendChild(transaction);

    resetInputs();
  }

  function loanBalance() {
    let loanAmount = 30;
    currentBalance = currentBalance + loanAmount;

    var transaction = document.createElement("p");
    transaction.innerHTML =
      '<div class="history-item"><p><span class="mobile-number">Loaned</span><span class="amount">+' +
      loanAmount +
      "</span></p></div>";
    history.appendChild(transaction);

    resetInputs();
  }

  function resetInputs() {
    document.getElementById("mobile-number").value = "";
    document.getElementById("amount").value = "";
  }
}
