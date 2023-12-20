
const axios = require('axios');

const getJsonPlaceholderData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching data from JSONPlaceholder:', error);
    throw error;
  }
};

const getRestCountriesData = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Rest Countries:', error);
    throw error;
  }
};

module.exports = {
  getJsonPlaceholderData,
  getRestCountriesData
};
