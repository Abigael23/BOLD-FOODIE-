let surname = document.getElementById("surname")
let firstname = document.getElementById("firstname")
let email = document.getElementById("email")
let phonenumber = document.getElementById("phonenumber")
let dateofbirth = document.getElementById("dateofbirth")
let gender = document.getElementById("gender")

let savedinfo = JSON.parse(localStorage.getItem("userinfo")) || [];
function saved(ev){
    ev.preventDefault();
        let userinfo ={
            surname: surname.value,
            firstname: firstname.value,
            email: email.value,
            phonenumber: phonenumber.value,
            address: address.value,
            dateofbirth: dateofbirth.value,
            gender: gender.value
        }
        // if (surname.value == "" || firstname.value == "" || email.value == "" || phonenumber.value == "" || gender.value == "") {
        //     alert("Input field cannot be empty")
        // } else {
        savedinfo.push(userinfo);
        localStorage.setItem("userinfo", JSON.stringify(savedinfo))
        console.log(userinfo);
        alert("Personal Information saved") 
    // }
    }

    function logout() {
        localStorage.removeItem("CU")
    window.location.href = "../AdminLogin/AdminLogin.html"
    }
    