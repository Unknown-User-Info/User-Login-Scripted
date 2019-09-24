//Get login account info
document.getElementById("login").addEventListener("click", loginAccount);

//Check if it's correct

function loginAccount() {

    //Get User and Password
    let user = document.getElementById("username").value;
    user = user.toLowerCase();

    let pass = document.getElementById("password").value;


    if (user == "melazerte"  && pass == "Voyageur") {
        document.getElementById("login-message").innerHTML = "Login Successful."
    } else {
        document.getElementById("login-message").innerHTML = "Login Unsuccessful."
    }
}