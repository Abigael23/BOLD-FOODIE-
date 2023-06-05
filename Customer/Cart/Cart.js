let show = document.getElementById("show")

// function cart (ev, id) {
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


// let mealQty = 1;
//     let tPrice;
//     let myGoods = JSON.parse(localStorage.getItem("goods"));
//     let dishId  = localStorage.getItem("oneItem")
//     console.log(dishId);
//     console.log(myGoods);
//     let meal = myGoods.find(el=> el.id == dishId)
//     document.getElementById("show").innerHTML = `
//         <img src=${meal.thumbnail} /><br>
//         <span>Price per one: #${meal.price}</span><br>
//         <button onclick="remove(${meal.price})">&minus;</button>
//         <span id="dispQTY">${meal.quantity}</span>
//         <button onclick="add(${meal.price})">&plus;</button><br>
//         <span id="showPrice">${meal.totalPrice}</span>
//         <button type="button" id="start-payment-button" onclick="makePayment(${meal.totalPrice})">Make Payment</button>
//     `


//     function add(price){
//         meal.quantity++;
//         tPrice = price * meal.quantity;
//         document.getElementById("showPrice").innerHTML ="Total Price "+ "#"+ tPrice
//         document.getElementById("showQty").innerHTML = meal.quantity
//         meal.totalPrice = tPrice;
//         console.log(meal);
//         localStorage.setItem("goods", JSON.stringify(myGoods))
//     }


    // function makePayment(ttprice) {
    //   FlutterwaveCheckout({
    //     public_key: "FLWPUBK_TEST-1c3c1a94b35399bcebf25488ba33ca32-X",
    //     tx_ref: "titanic-48981487343MDI0NzMx",
    //     amount: ttprice,
    //     currency: "NGN",
    //     payment_options: "card, banktransfer, ussd",
    //     redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
    //     meta: {
    //       consumer_id: 23,
    //       consumer_mac: "92a3-912ba-1192a",
    //     },
    //     customer: {
    //       email: "rose@unsinkableship.com",
    //       phone_number: "08102909304",
    //       name: "Rose DeWitt Bukater",
    //     },
    //     customizations: {
    //       title: "The Titanic Store",
    //       description: "Payment for an awesome cruise",
    //       logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
    //     },
    //   });
    // }