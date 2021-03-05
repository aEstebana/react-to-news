import React from 'react';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';
import image from './illustration-globe-logo.jpg';
import Store from './store/store';

import Routes from './routes';

illustration - globe - logo.jpg;

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">ReactReduxHooks</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to="/tech">Teach</Link>
            </li>
          </ul>
        </nav>
        <header>
          <h1>React Reduc Hooks</h1>
          <img src={image} alt="news" />
        </header>
        <main>
          <Routes />
        </main>
      </div>
    </Provider>
  );
}

export default App;
