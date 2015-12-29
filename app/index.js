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

      <article className="letusdown">
        <h2 className="letusdown-heading">Nico holdt ikke ord</h2>
        <ul>
          <li>
            <date className="letusdown-date">Desember 2015</date>
            Nico overførte ikke for sin andel av hotellet i Japan som avtalt.
            Alle andre (8 stk) klarte det, men ikke Nico.
          </li>
          <li>
            <date className="letusdown-date">September 2015</date>
            Nico møtte ikke opp på morgenkaffe fordi han valgte å ikke ha på
            vekkeklokke. Forever alone på Kaffebrenneriet kl 07.00.
          </li>
        </ul>
      </article>
    </div>
  }
}

var domEl = document.getElementById('app');
ReactDom.render(<Forstebud/>, domEl);
