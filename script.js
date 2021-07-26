const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');
const currencyEl_two = document.getElementById('currency-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');




function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    console.log(currency_one);
    console.log(currency_two);

    fetch(``)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two];
            console.log(rate);
            rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;
            amountEl_two.value = (amountEl_one * rate.toFixed(2));
        });
}

function swapCurrency() {
    // const temp = currencyEl_one.value;
    // currency_two = temp;
    // const currency_one = currency_two;
    const temp = currency_one.value;
    currency_one.value = currencyEl_two.value;
    currency_two.value = temp;
    calculate();
}


currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
rateEl.addEventListener('click', swapCurrency);




// currency_(two.addEventListener('input', );
calculate();
// swapCurrency();