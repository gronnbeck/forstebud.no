const React = require('react');
const ReactDom = require('react-dom');

class Forstebud extends React.Component {
  render() {
    return <div>Hello World</div>
  }
}

var domEl = document.getElementById('app');
ReactDom.render(<Forstebud/>, domEl);
