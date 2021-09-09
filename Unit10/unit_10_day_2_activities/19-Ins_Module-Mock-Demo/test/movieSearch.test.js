const axios = require('axios');
const MovieSearch = require('../movieSearch');

// Use jest.mock to mock an entire module.
jest.mock('axios');

describe('MovieSearch', () => {
  describe('buildUrl', () => {
    it('should return an OMDB movie search URL using a movie name', () => {
      const movie = new MovieSearch();
      const name = 'Rocky';

      const url = movie.buildUrl(name);

      expect(url).toEqual(`https://www.omdbapi.com/?t=${name}&apikey=trilogy`);
    });
  });

  describe('search', () => {
    it('should search the OMDB API for a given movie', () => {
      const movie = new MovieSearch();
      const name = 'Rocky';

      // Forces axios.get to return a promise resolving to { data: {} }.
      axios.get.mockResolvedValue({ data: {} });

      expect(movie.search(name)).resolves.toEqual({ data: {} });

      // Check that axios.get was called with the expected arguments.
      expect(axios.get).lastCalledWith(movie.buildUrl(name));
    });
  });
});
