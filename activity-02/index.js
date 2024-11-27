let accountNumber;

let loginBtn = document.getElementById("loginBtn");

let accounts = [
  {
    mobile: "11111111111",
    password: "testpass",
    balance: 300,
  },
  {
    mobile: "00000000000",
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
      window.location.href = "./load.html";
    }
  }
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
