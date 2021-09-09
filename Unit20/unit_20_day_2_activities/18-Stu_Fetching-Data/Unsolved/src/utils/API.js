import axios from "axios";

const { REACT_APP_OMDB_URL, REACT_APP_OMDB_KEY } = process.env;

const API = {
  search(query) {
    return axios.get(
      `${REACT_APP_OMDB_URL}?t=${query}&apikey=${REACT_APP_OMDB_KEY}&rating=pg`
    );
  },
};

export default API;
