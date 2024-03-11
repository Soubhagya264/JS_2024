// const cart = ["shoes", "pants", "kurta"];
// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId);
// });
// const promise = createOrder(cart);
// promise.then(function (orderId) {
//     proceedToPayment(orderId);
// });
const cart = ["shoes", "pants", "kurta"];
const promise = createOrder(cart); // orderId
promise.then(function () {
    proceedToPayment(orderId);
})
    .catch(function (err) {
        console.error(err);
    });

/// Producer
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        // createOrder
        // validateCart
        // orderId
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        // logic for createOrder
        const orderId = "12345";
        if (orderId) {
            resolve(orderId);
        }
    });
    return pr;
}
function validateCart(cart) {
    console.log("validateCart");
    return true;
}

function proceedToPayment(orderId) {
    return new Promise.allSettled((resolve,reject) => {
        resolve("payment success");
    });
}


