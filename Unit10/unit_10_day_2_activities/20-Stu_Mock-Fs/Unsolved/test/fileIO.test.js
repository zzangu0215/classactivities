const fs = require('fs');
const FileIO = require('../fileIO');

// TODO: mock the fs module here
jest.mock('fs');

describe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // TODO: Your code here
      // arrange
      const io = new FileIO();
      const file = "friday.txt";
      const data = "Fish Taco Friday!";
      fs.readFileSync.mockReturnValue(data);

      // action
      const result = io.read(file);

      // assert
      expect(result).toEqual(data);
      expect(fs.readFileSync).lastCalledWith(file, 'utf8');

    });
  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here
      // arrange
      const write = new FileIO();
      const path = './assets/';
      const data = 'Fish Taco Friday!';

      // action
      write.write(path, data);

      // assert
      expect(fs.writeFileSync).lastCalledWith(path, data);
    });
  });
});
