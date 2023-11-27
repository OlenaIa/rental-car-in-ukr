import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Provider store={store}>
        <BrowserRouter basename="/rental-car-in-ukr">
          <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
