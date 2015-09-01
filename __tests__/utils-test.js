jest.dontMock('../app/utils/utils');

describe('sum', function() {
 it('gets lettersIndex', function() {
   var utils = require('../app/utils/utils');
   expect(utils.lettersIndex([], []])).toBe(3);
 });
});