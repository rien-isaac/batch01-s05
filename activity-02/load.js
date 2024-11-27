// let currentBalance = localStorage.getItem("defaultValue");
let displayBalance = document.querySelector("#txtBalance");

window.onload = function () {
  displayBalance.textContent = "₱" + currentBalance;
};

function transferLoad() {
  let mobileNumber = document.getElementById("mobile-number").value;
  let amount = document.getElementById("amount").value;

  var history = document.querySelector("#history");

  let splitAccNum = mobileNumber.split("");
  let mobileNumberLength = splitAccNum.length;

  if (mobileNumberLength != 11) {
    alert("Invalid Number!");
    resetInputs();
  } else {
    if (currentBalance <= 0 || amount > currentBalance) {
      alert("Insufficient Balance");
      resetInputs();
      showLoanModal();
    } else {
      addTransaction(mobileNumber, amount, "transfer load");
    }
  }
}

function logout() {
  window.location.href = "./index.html";
}

function showLoanModal() {
  let loanModal = document.getElementById("balanceModal");

  if (loanModal.style.display === "none") {
    loanModal.style.display = "block";
  } else {
    loanModal.style.display = "none";
  }
}

function getBalance() {
  let inputLoanAmount = document.getElementById("loanBalanceAmount").value;

  if (inputLoanAmount == "") {
    alert("Put Amount");
  } else {
    addTransaction(0, inputLoanAmount, "loan load");
  }
}

function addTransaction(number, amount, type) {
  var history = document.querySelector("#history");

  var transaction = document.createElement("p");

  if (type == "transfer load") {
    currentBalance = currentBalance - amount;

    transaction.innerHTML =
      '<div class="history-item"><p><span class="mobile-number">' +
      number +
      '</span><span class="amount">-' +
      amount +
      "</span></p></div>";
  } else {
    currentBalance = currentBalance + parseInt(amount);

    transaction.innerHTML =
      '<div class="history-item"><p><span class="mobile-number">Loaned</span><span class="amount"> +' +
      amount +
      "</span></p></div>";

    showLoanModal();
  }

  history.appendChild(transaction);

  resetInputs();

  // let displayBalance = document.querySelector("#txtBalance");
  displayBalance.textContent = "₱" + currentBalance;
}

function resetInputs() {
  document.getElementById("mobile-number").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("loanBalanceAmount").value = "";
}
