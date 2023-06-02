let currentUser = JSON.parse(localStorage.getItem("CU"));
    document.getElementById("screen").innerHTML = " " + currentUser.username + "...";

    if (!currentUser) {
        window.location.href = "../AdminLogin/AdminLogin.html";
    }

    document.getElementById("signOut").addEventListener('click', () => {
        window.location.href = "../AdminLogin/AdminLogin.html";
        localStorage.removeItem("CU");
    })