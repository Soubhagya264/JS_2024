// const cart = ["shoes", "pants", "kurta"];
// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId);
// });
// const promise = createOrder(cart);
// promise.then(function (orderId) {
//     proceedToPayment(orderId);
// });
const cart = ["shoes", "pants", "kurta"];
createOrder(cart).
    then((orderId) => {
        console.log(`Order created successfully for ${orderId}`);
        return orderId;
    }).
    then((orderId) => {
        proceedToPayment(orderId).
            then((paymentMessage) => {
                console.log(paymentMessage);
            })
    }).
    catch((err) => {
        console.log(err);
    });

function validateCart(cart) {
    console.log("validateCart");
    return true;
}
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
            setTimeout(() => {
                resolve(orderId);
            }, 5000);

        }
    });
    return pr;
}
function proceedToPayment(orderId) {
    if (orderId) {
        return new Promise((resolve, reject) => {
            resolve(`payment success  for ${orderId}`);
        });
    }
    else {
        return new Promise((resolve, reject) => {
            reject(new Error("orderId is not valid"));
        });
    }

}


