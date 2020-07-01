import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render (
  <Provider store={store}>
    <HashRouter basename={process.env.PUBLIC_URL}>
    <PersistGate persistor={persistor} >
    <App />
    </PersistGate>
    </HashRouter>
    </Provider>,
  document.getElementById('root')
) 