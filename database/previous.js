const User = require('./User.js');



const Credits = [
    { name: 'hamza', price: '100', date: '15/07/2018' },
    { name: 'wassim', price: '150', date: '18/07/2018' },
    { name: 'ali', price: '400', date: '25/07/2018' },
    { name: 'ahmed', price: '900', date: '30/07/2018' },
    { name: 'ahmed', price: '320', date: '12/07/2018' },
    { name: 'halim', price: '1200', date: '12/08/2018' },
    { name: 'wale', price: '70000', date: '12/10/2018' }
]
const Credit = function () {
    User.create(Credits)
        .then(() => console.log(Credits)
        )
};

Credit();
