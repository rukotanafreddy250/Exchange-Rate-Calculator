const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');
const currencyEl_two = document.getElementById('currency-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');




function calculate() {
    // const currency_one = currencyEl_one.value;
    // const currency_two = currencyEl_two.value;
    console.log(currencyEl_one);
    console.log(currencyEl_one);
}



currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);




// currency_two.addEventListener('input', );

calculate();