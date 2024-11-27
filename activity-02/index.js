let accountNumber;

let loginBtn = document.getElementById("loginBtn");

let defaultBalance;

// localStorage.setItem("defaultBalance", defaultBalance);

let accounts = [
  {
    mobile: "09121231234",
    password: "testpass",
    balance: 300,
  },
  {
    mobile: "09781231234",
    password: "passtest",
    balance: 50,
  },
];

function login() {
  accountNumber = document.getElementById("account").value;
  password = document.getElementById("password").value;
  let splitAccNum = accountNumber.split("");
  let mobileNumberLength = splitAccNum.length;

  //   console.log(mobileNumberLength);

  if (mobileNumberLength != 11) {
    invalidNumber("invalid");
  } else {
    // check muna sino nag login
    checkAccount();
  }
}

function checkAccount() {
  // console.log("You made it here");
  // validation here
  for (let checker = 0; checker < accounts.length; checker++) {
    if (
      accountNumber == accounts[checker].mobile &&
      password == accounts[checker].password
    ) {
      //   makalogin ka dapat rito
      alert("Welcome " + accountNumber);
      defaultBalance = accounts[checker].balance;
      window.location.href = "./load.html";
      return;
    }
  }
  invalidNumber("no record");
}

function invalidNumber(type) {
  if (type == "invalid") {
    alert("Invalid Number!");
  } else if (type == "no record") {
    alert("Incorrect Number or Password");
  }

  document.getElementById("account").value = "";
  document.getElementById("password").value = "";
}
