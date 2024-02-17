import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './components/App';
import { NextUIProvider } from '@nextui-org/react';
import './index.css';

/**
 * Renders the main application component wrapped in necessary providers and elements.
 * @returns {void}
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provider for NextUI theme */}
    <NextUIProvider>
      {/* Redux Provider for store */}
      <Provider store={store}>
        {/* PersistGate for persisting Redux store */}
        <PersistGate loading={null} persistor={persistor}>
          {/* Main application component */}
          <App />
        </PersistGate>
      </Provider>
    </NextUIProvider>
  </React.StrictMode>
);
