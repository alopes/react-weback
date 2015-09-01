jest.dontMock('../Table.jsx');
describe('Table', function() {
  it('shows the number of results', function() {
    var React = require('react/addons');
    var Table = require('../Table.jsx');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var table = TestUtils.renderIntoDocument(
      <Table />
    );

    var title = TestUtils.findRenderedDOMComponentWithTag(table, 'p');
    expect(title.getDOMNode().textContent).toEqual('0 results');
  });
});