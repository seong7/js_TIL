// const fetch = require('node-fetch');
const result = 
  fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
  .then(response => response.text());

console.log(result);