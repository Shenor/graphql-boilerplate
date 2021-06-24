const axios = require('axios');

module.exports = {
  hello: () => {
    return 'Hello world!';
  },
  name: () => {
    return 'Alexander';
  },
  age: () => {
    return Math.floor(Math.random() * 100);
  },
  person: async ({idx}) =>  {
    const candidate = await axios.get(`https://jsonplaceholder.typicode.com/users/${idx}`)
    console.log(candidate.data);
    return candidate.data;
  }
}