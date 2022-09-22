import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header text="Get data with Axios and create tables" />
      <Form />
    </div>
  );
}

export default App;
