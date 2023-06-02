let username = document.getElementById("username")
let email = document.getElementById("email")
let phonenumber = document.getElementById("phonenumber")
let select = document.getElementById("select")
let password = document.getElementById("password")
let confirmpassword = document.getElementById("confirmpassword")

let registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
function signUp(ev){
    ev.preventDefault();
    let user ={
        username: username.value,
        email: email.value,
        phonenumber: phonenumber.value,
        select: select.value,
        password: password.value,
        confirmpassword: confirmpassword.value
    }
    registeredUsers.push(user);
    localStorage.setItem("users", JSON.stringify(registeredUsers))
    console.log(user);
    if  (password.value == "" || email.value == "" || phonenumber.value ==""|| username.value =="") {
        alert("Input field cannot be empty") 
    }else if(password.value !== confirmpassword.value) {
        alert("Password does not match")
    } else if (password.value.length < 6) {
        alert("Password too weak")
    } else if(password.value === confirmpassword.value){
        alert("Sign Up successful")
        window.location.href = "./AdminLogin.html"
    }

}