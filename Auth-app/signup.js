// function to redirect to contact page
function redirecttoportfolio(){
    window.location.href = "https://codewith-ranjeet.github.io/Portfolio/";
}

// password validation and storing data in local storage
function validatePassword() {
    const pass = document.getElementById("signupPassword").value;
    const confPass = document.getElementById("confirm-password").value;
    const userEmail = document.getElementById("signupEmail").value;
    const fullName = document.getElementById("fullName").value;

    if (pass !== confPass) {
        alert("PASSWORD DO NOT MATCH, PLEASE TRY AGAIN");
        return false;
    }

    // storing data in local storage
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("signupEmail", userEmail);
    localStorage.setItem("signupPassword", pass);

    alert("SIGNUP SUCCESSFUL! YOU CAN NOW LOGIN!!");
    window.location.href = "index.html";
    return false;
}