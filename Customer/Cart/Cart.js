let mealdetails = document.getElementById("mealdetails")
function ShowMealDetails(id) {
    let found = allItems.find(item => item.id == id);
    console.log(found);
    mealdetails.innerHTML = `
    <div>
    <img src="${found.image}"/>
    </div>
    <div class="text">
            <h3>${found.title}</h3>
            <h5>${found.category}</h5>
            <h6>${found.description}</h6>
            <h6>$${found.price}</h6>
            <h6>⭐⭐⭐${found.rating.rate}</h6>
            <h6>(${found.rating.count})</h6>
        </div>
        <div class="w-75">
            <div id="addcart">
                <button onclick="addCart(event, ${element.id})" class="btn btn-warning text-white">
                    <i class="icofont-cart"></i>${carted ? "add to cart " : "remove from cart"}
                </button>
            </div>
        </div>
    <div>
    `
}
// function addCart(ev, id) {
//     let found = allItems.find(item => item.id == id);
//     console.log(found);

//     let carted = myCart.some(find => find.id == found.id);

//     if (carted) {
//         ev.target.innerHTML = "Add to cart";
//         let myIndex = myCart.indexOf(found);
//         myCart.splice(myIndex, 1);
//         localStorage.setItem("cart", JSON.stringify(myCart));
//     } else {
//         ev.target.innerHTML = "remove from cart";
//         myCart.push(found)
//         localStorage.setItem("cart", JSON.stringify(myCart));
//     }
// }
