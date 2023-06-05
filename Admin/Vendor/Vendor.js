function choosefile() {
    let reader = new FileReader()
    let fileData = document.getElementById("file").files[0];
    console.log(fileData);
    reader.addEventListener("load", (e)=>{
        console.log(e.target.result);
        myimg.src = e.target.result;

    })
    if (fileData) {
        let myUrl = reader.readAsDataURL(fileData)
        console.log(myUrl);
    }
}

let showpost = document.getElementById("showpost")
let file = document.getElementById("file")
let food = document.getElementById("food")
let category = document.getElementById("category")
let foodclass = document.getElementById("foodclass")
let description = document.getElementById("description")
let price = document.getElementById("price")

let postdetail = JSON.parse(localStorage.getItem("fooddetail")) || [];
function upload(ev){
    ev.preventDefault();
    let fooddetail={
        file: file.value,
        food: food.value,
        category: category.value,
        foodclass: foodclass.value,
        description: description.value,
        price: price.value
    }
    postdetail.push(fooddetail);
    localStorage.setItem("fooddetail", JSON.stringify(postdetail));
    console.log(postdetail);
    alert("Successful post")
    showpost.innerHTML = ""
    showpost.innerHTML = JSON.stringify(postdetail);
    postdetail.forEach((element, index) => {
    showpost.innerHTML += `
       <div>hello
       <img src="${element.file}" alt="">
       </div>
        <div>
        <p>${element.category}</p>
        <p>${element.foodclass}</p>
        <p>${element.description}</p>
        <p>#${element.price}</p>
        </div>
        `
    })
}

function logout() {
    localStorage.removeItem("CU")
window.location.href = "../AdminLogin/AdminLogin.html"
}
