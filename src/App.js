import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import PageNotFound from './pages/not-found/PageNotFound';
import Page404 from './pages/not-found/Page404';

import './App.css';

function App() {
  return (
    <div className="container">
      <Header text="Get data with Axios and create tables" />
      <Main />
      {/* <Page404 /> */}
      <PageNotFound />
    </div>
  );
}

export default App;
