let accountNumber;

let loginBtn = document.getElementById("loginBtn");

function login() {
  accountNumber = document.getElementById("account").value;
  let splitAccNum = accountNumber.split("");
  let mobileNumberLength = splitAccNum.length;

  //   console.log(mobileNumberLength);

  if (mobileNumberLength != 11) {
    alert("Invalid Number!");
    document.getElementById("account").value = "";
  } else {
    //   makalogin ka dapat rito
    alert("Welcome " + accountNumber);
    window.location.href = "./load.html";
    // console.log("yehey");
  }
}

function checkAccount() {
  // validation here
}
