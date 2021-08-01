const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesbtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];
console.log(data);

getRandomUser();


// fetch random user and add money
function getRandomUser() {

    // fetch(``)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data.gender);
    //     });
    // const res = await fetchfetch(``);
    // const data = await res.json();

    const user = {
        gender: "male",
        name: [
                {
                first: "Chris",
                last: "Kevin"
            },
            {
                first: "Kobe",
                last: "Olesa"
            }
        ],
        
    }; 

    const newUser = {
        name: `${user.name[0].first} ${user.name[0].last}`,
        money: /*'$'*/ +Math.floor(Math.random() * 10000000),
    }
    addData(newUser);
}

// double money 
function doubleMoney() {
    data = data.map((user) => {
        return {...user, money: (user.money *2) } ;
    });
    updateDOM();
}

// sort by richest 
function sortByRichest() {
    data.sort((ascending, descending) => {
        return descending.money-ascending.money;
    });
    updateDOM();
}

// filter by showing Millionaires
function showMillionaires() {
    data.filter( user => {
        return user.money > 1000000;
    });
    updateDOM();
}
// calculate the wealth
function calculateWealth() {
    // let reducer = (accumilator, currentWealth) =>
    const wealth = data.reduce( (acc, user) => 
        (acc += user.money), 0);
    // updateDOM();
    console.log(wealth);
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth:<Strong>${wealth}</strong> </h3>`;
    main.appendChild(wealthEl);

}

function addData(newUser) {
    data.push(newUser);
    updateDOM();
}

// update DOM 
function updateDOM(providedData = data) {
    main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`;

    providedData.forEach((item) => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong>${formatMoney(item.money)}`
        main.appendChild(element);  
        console.log(item);
    });
    
}


// format number as money
function formatMoney(number) {
    return number;
    // return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}



addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesbtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);

