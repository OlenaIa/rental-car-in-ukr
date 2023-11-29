import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>

        <BrowserRouter basename="/rental-car-in-ukr">
          <App />
        </BrowserRouter>
                </PersistGate>
    </Provider>
  </React.StrictMode>
);
