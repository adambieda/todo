window.onload = function () {
    // Your code, and code from Stripe's walkthrough goes here.
    var stripe = Stripe('pk_test_OqF8UZmoq21eZJus3U9ieT5m00sOfAf9qM');
    let checkout = document.querySelector('checkoutButton');
    checkout.addEventListener('click', function(){

        stripe.redirectToCheckout({
            lineItems: [
              // Replace with the ID of your price
            {price: 'price_1GvAsoDUMzZfS0atf1WFiWaa', quantity: 1}
            ],
            mode: 'payment',
            successUrl: 'http://localhost:8000/success.html',
            cancelUrl: 'http://localhost:8000/cancel.html',    
        }).then(function (result) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
            console.log(result.error.message)
        });
    };

}

;