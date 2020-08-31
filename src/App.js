import 'assets/style/reset.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './pages/home/Layout';
import store from './store/';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Layout />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
