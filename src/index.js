import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


const initData = [
  {
    province: 'AB',
    totalProviders: 11,
    hospitals: 1,
    clinics: 10,
    surgical: 4,
    medical: 7,
    urban: 8,
    rural: 3,
    gestationalLimit: 24,
    cpc: 21
  },
  {
    province: 'BC',
    totalProviders: 24,
    hospitals: 10,
    clinics: 14,
    surgical: 13,
    medical: 12,
    urban: 10,
    rural: 14,
    gestationalLimit: 28,
    cpc: 26
  },
  {
    province: 'MB',
    totalProviders: 4,
    hospitals: 2,
    clinics: 2,
    surgical: 3,
    medical: 4,
    urban: 2,
    rural: 2,
    gestationalLimit: 20,
    cpc: 5
  },
];


const root = ReactDOM.createRoot(document.getElementById('abortion-access-table'));
root.render(
  <React.StrictMode>
    <App locale={'en'} initData={initData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
