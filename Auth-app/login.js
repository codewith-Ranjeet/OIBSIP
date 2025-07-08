//redirect to contact page
function redirecttoportfolio(){
    window.location.href = "https://codewith-ranjeet.github.io/Portfolio/";
}

// email and password validation for login
function userLogin() {
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const savedEmail = localStorage.getItem("signupEmail");
    const savedPassword = localStorage.getItem("signupPassword");

    if (loginEmail === savedEmail && loginPassword === savedPassword) {
        alert("LOGIN SUCCESSFUL!!")
        window.location.href = "dashboard.html";
    }
    else {
        alert("Invalid Email or Passwprd!!");
    }

    return false;
}