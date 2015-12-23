const React = require('react');
const ReactDom = require('react-dom');

class Forstebud extends React.Component {
  render() {
    return <div className="app">
      <header className='header'>
        <h1 className='header-forstebud'>Førstebud</h1>
        <blockquote className="header-quote">
          Aldri stol på Nico.
        </blockquote>
      </header>
    </div>
  }
}

var domEl = document.getElementById('app');
ReactDom.render(<Forstebud/>, domEl);
