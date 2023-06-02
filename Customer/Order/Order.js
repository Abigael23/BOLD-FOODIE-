let delicacies =[
    {
       id : 1, 
       image: "../../../../food pics/1200px-Jollof_Rice_with_Stew.jpg",
       food: "Jollof-rice, Salad with beef",
       category: "Breakfast, lunch",
       foodclass: "Oriental",
       description: "energy-giving food, body-building food and protective food",
       price: 2200,
       rating: "8.3"
    },
    {
        id : 2,
        image: "../../../../food pics/24Nigerianrex6-articleLarge.jpg",
        food: "Fried Plantain with beef...",
        category: "Breakfast, lunch, dinner",
        foodclass: "Oriental, Continental",
        description: "body-building food and protective food",
        price: 1000,
        rating: "5.1"
     },
     {
        id : 3,
        image: "../../../../food pics/22220647_1623474557713967_5309459973137235968_n.jpg",
        food: "Pounded-yam with beef...",
        category: "Breakfast, lunch, dinner",
        foodclass: "African meal",
        description: "energy-giving food and protective food",
        price: 3000,
        rating: "12.3"
     },
     {
        id : 4,
        image: "../../../../food pics/595f0c8c7b857beb21996a5ea5b5849b.jpg",
        food: "Fried Yam, Sauce with Fish",
        category: "Breakfast, lunch, dinner",
        foodclass: "Oriental",
        description: "energy-giving food and body-building food",
        price: 1500,
        rating: "5.6"
     },
     {
        id : 5,
        image: "../../../../food pics/21-e1523562832515.jpg",
        food: "Ewa Agoyin, fried plantain with fish...",
        category: "Breakfast, lunch",
        foodclass: "Oriental",
        description: "body-building",
        price: 1500,
        rating: "1.1"
     },
     {
        id : 6,
        image: "../../../../food pics/1624864254571.jpg",
        food: "Amala with assorted meat",
        category: "Breakfast, lunch, dinner",
        foodclass: "African meal",
        description: "energy-giving food, body-building food and protective food",
        price: 2800,
        rating: "7.5"
     },
     {
        id : 7,
        image: "../../pics/1685553954163.jpg",
        food: "Pap with proteinous bean-cake",
        category: "Breakfast",
        foodclass: "African meal",
        description: "energy-giving food and body-building food",
        price: 700,
        rating: "1.2"
     },
     {
        id : 8,
        image: "../../../../food pics/53b6cbb7f01483fba6a7e5da81462074.jpg",
        food: "Noodles with egg",
        category: "Breakfast, lunch",
        foodclass: "Oriental, Continental",
        description: "energy-giving food, body-building food and protective food",
        price: 1000,
        rating: "1.9"
     },
     {
        id : 9,
        image: "../../pics/1685554938683.jpg",
        food: "Chocolate cake",
        category: "Dessert",
        foodclass: "Continental",
        description: "sweet taste",
        price: 18000,
        rating: "5.2"
     },
     {
        id: 10,
        image: "../../../../food pics/Peppered-Gizzard-IG-5.jpg",
        food: "Peppered-Gizzard",
        category: "Breakfast, lunch",
        foodclass: "Continental",
        description: "body-building food and protective food",
        price: 2500,
        rating: "10"
     },
     {
        id: 11,
        image: "../../../../food pics/Yam-porridge-1280x720.jpg",
        food: "Yam-porridge with fish",
        category: "Breakfast, lunch",
        foodclass: "Oriental",
        description: "energy-giving food and body-building food",
        price: 1500,
        rating: "2.5"
     },
     {
        id: 12,
        image: "../../pics/IMG_20230531_183017.jpg",
        food: "Soft Drinks...more",
        category: "Soda",
        foodclass: "drinks",
        description: "good taste",
        price: 300,
        rating: "6.3"
     },
     {
        id: 13,
        image: "../../pics/IMG_20230531_183414.jpg",
        food: "Ofada Rice",
        category: "Breakfast, lunch",
        foodclass: "Oriental",
        description: "energy-giving food and protective food",
        price: 2500,
        rating: "3"
     },
     {
        id: 14,
        image: "../../../../food pics/Nigerian-Breakfast-main-photo-1-800x600.jpg",
        food: "Yam and egg",
        category: "Breakfast, lunch",
        foodclass: "Oriental",
        description: "energy-giving food, body-building food and protective food",
        price: 1200,
        rating: "5.5"
     },
     {
        id: 15,
        image: "../../pics/SAVE_20230531_184156.jpg",
        food: "Classic-cheese-pizza",
        category: "Dessert",
        foodclass: "Continental",
        description: "Enjoyment",
        price: 8000,
        rating: "8.6"
     },
     {
        id: 16,
        image: "../../pics/SAVE_20230531_184143.jpg",
        food: "Chicken Shawarma",
        category: "Dessert",
        foodclass: "Continental",
        description: "Enjoyment",
        price: 8000,
        rating: "10.5"
     }
    ]

let screen = document.getElementById("screen")
let index = 1
let alldelicacies = JSON.parse(localStorage.getItem("delicacies")) || [];
    console.log(alldelicacies);
function display() {
    localStorage.setItem("delicacies", JSON.stringify(alldelicacies))
    console.log(alldelicacies);
    delicacies.forEach((element, index) => {
            let food = element.food;
            let category = element.category;
            let description = element.description;
            let foodclass = element.foodclass;
            screen.innerHTML += `
        <div id="bigdiv" class="w-25 p-3 text-primary bg-basic border rounded shadow my-2" onclick="showItemDetails(${element.id})">
            <div class="text-center"><img class="w-100" src="${element.image}" alt=""></div>
            <div class="text">
                <h5>${food.length > 25 ? food.substring(0, 25).concat('...more') : food}</h3>
                <p>${category.length > 25 ? category.substring(0, 25).concat('...more') : category}</p>
                <p>${foodclass.length > 25 ? foodclass.substring(0, 25).concat('...more') : foodclass}</p>
                <p>${description.length > 25 ? description.substring(0, 25).concat('...more') : description}</p>
                <p>#${element.price}</p>
                <p>⭐⭐⭐${element.rating}</p>
            </div>
            <div class="text-center">
            <button onclick="cart()" class="btn btn-warning text-white w-75">
                <i class="bi bi-cart4"></i>
                Order
            </button>
        </div>
        </div>
            `
        });
    }
    
    function cart() {
        window.location.href = "../../Customer/Cart/Cart.html"
    }
    