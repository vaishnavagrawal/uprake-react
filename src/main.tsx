import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { setup } from 'twind';
import App from './App';
import { store } from './redux/store';

// const root = document.getElementById('root') as HTMLDivElement;

// render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   root
// );
setup({
  preflight: false,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
