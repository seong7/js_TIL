const fetch = require('node-fetch');
const orderTotalAsync = require('./order-total-async-jest');

const result = orderTotalAsync(fetch, {
  query : "pizza",
  items: [{
    "name" : "Dragon waffles", price: 20, quantity: 2
  }]
})

// const result = 
//   fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
//   .then(response => response.json())
//   .then(response => response.count);
