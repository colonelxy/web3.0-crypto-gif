import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import { TransactionProvider } from './context/TransactionContext';


ReactDOM.render(
  <TransactionProvider>
    <App />
  </TransactionProvider>,
  document.getElementById("root"),
);
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <TransactionProvider>
//     <React.StrictMode>
//     <App />
//   </React.StrictMode>

//   </TransactionProvider>
  
// );
