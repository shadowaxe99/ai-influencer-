
// Importing necessary dependencies
const axios = require('axios');

// Function to integrate multiple APIs with error handling
const integrateAPIs = async () => {
  try {
    // Define API endpoints
    const apiEndpoints = {
      jsonPlaceholder: 'https://jsonplaceholder.typicode.com/posts',
      restCountries: 'https://restcountries.com/v3.1/all'
    };

    // Fetch data from all APIs asynchronously with error handling
    const jsonPlaceholderResponse = await axios.get(apiEndpoints.jsonPlaceholder).catch(error => console.error('Error with JSONPlaceholder:', error));
    const restCountriesResponse = await axios.get(apiEndpoints.restCountries).catch(error => console.error('Error with Rest Countries:', error));

    return {
      jsonPlaceholderData: jsonPlaceholderResponse ? jsonPlaceholderResponse.data : null,
      restCountriesData: restCountriesResponse ? restCountriesResponse.data : null
    };
  } catch (error) {
    console.error('Error integrating APIs:', error);
    throw error;
  }
};

module.exports = integrateAPIs;
