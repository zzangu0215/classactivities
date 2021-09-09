// Axios is a popular NPM package used for preforming API requests
import axios from 'axios';

const { REACT_APP_GIPHY_URL, REACT_APP_GIPHY_APIKEY } = process.env;

// Using axios, we create a search method that is specific to our use case and export it at the bottom
const search = (query) =>
  axios.get(`${REACT_APP_GIPHY_URL}?q=${query}&api_key=${REACT_APP_GIPHY_APIKEY}&limit=20&rating=pg`);

// Export an object with a "search" method that searches the Giphy API for the passed query
export default search;
