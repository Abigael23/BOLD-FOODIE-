let currentUser = JSON.parse(localStorage.getItem("CU"));
    document.getElementById("screen").innerHTML = " " + currentUser.username + "...";

    if (!currentUser) {
        window.location.href = "../Login/Login.html";
    }

    document.getElementById("signOut").addEventListener('click', () => {
        window.location.href = "../Login/Login.html";
        localStorage.removeItem("CU");
    })
    
    let Vendors = ["Shoprite", "KFC", "Euzel Pastries", "Jara", "P&P", "Foodco", "Sweet Sensation"]
    let screen = document.getElementById("screen")
    let input = document.getElementById("input")
    function search() {
        let Restaurants = Vendors.filter((vial)=> vial == input.value)
        if (input.value ==="") {
            screen.innerHTML = ""
        } else if ( Restaurants != "") {
           screen.innerHTML = "" 
           Restaurants.map(function (element) {
            screen.innerHTML += "<h2>" + element + "</h2>"
           })
        } else {
          screen.innerHTML = "NO RECORD FOUND"  
        }
    }