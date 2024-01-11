window.addEventListener('DOMContentLoaded', function () {
    const totalGuardado = localStorage.getItem('total');
    console.log(totalGuardado);

    // Configura el cliente de Stripe con tu clave pública
    let stripe = Stripe('pk_test_51OAXAdJDLtCumGbZw5ubJ8H8kSf0W7sOtrr5MJm7ANQoP1wmvRUpZilO4mcz7rhRaeuNSAb0znj7feOLBm50CkgH001MS10itM');

    // Maneja la lógica de pago
    // Maneja la lógica de pago
let paymentButton = document.getElementById('btn-pagar');
paymentButton.addEventListener('click', function() {
  const precioSimulado = 48000; // Precio simulado en centavos (480.00 dólares)
  stripe.redirectToCheckout({
    lineItems: [{
      price: precioSimulado,
      quantity: 1
    }],
    mode: 'payment',
    successUrl: 'http://127.0.0.1:5500/4_pagServicios/exito.html',
    cancelUrl: 'http://127.0.0.1:5500/4_pagServicios/fracaso.html',
  })
  .then(function(result) {
    if (result.error) {
      // Manejo de errores
      let displayError = document.getElementById('mensajeError');
      displayError.textContent = result.error.message;
    }
  });
});

})