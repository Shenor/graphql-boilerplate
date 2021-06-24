const axios = require('axios');

module.exports = {
  heroes: async ({ id }) => {
    const candidate = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    console.log(candidate.data);
    return candidate.data
  }
}