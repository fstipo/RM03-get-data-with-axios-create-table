import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

import './App.css';

function App() {
  return (
    <div className="container">
      <Header text="Get data with Axios and create tables" />
      <Main />
    </div>
  );
}

export default App;
