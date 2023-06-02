let email = document.getElementById("email")
let password = document.getElementById("password")
let registeredUsers = JSON.parse(localStorage.getItem("users"));
console.log(registeredUsers);


function logIn(ev) {
    ev.preventDefault();
    let authorizedUsers = registeredUsers.find(element => element.email == email.value && element.password == password.value);
    if (email.value == ""|| password.value == "") {
        console.log("failed");
       alert("Login failed");
    } else if (authorizedUsers) {
        alert("Login has been Successful")
        window.location.href = "../AdminDashboard/AdminDashboard.html";
        localStorage.setItem("CU", JSON.stringify(authorizedUsers));
     
    } else {
       console.log("failed");
       alert("Login failed");
    }
}