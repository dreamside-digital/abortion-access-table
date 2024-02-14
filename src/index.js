import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const initData = [
        {
            "totalproviders": "11",
            "clinics": "10",
            "medical": "7",
            "urban": "8",
            "cpc": "21",
            "province": "AB",
            "hospitals": "1",
            "rural": "3",
            "gestationallimit": "24 weeks",
            "surgical": "4"
        },
        {
            "totalproviders": "24",
            "clinics": "14",
            "medical": "12",
            "urban": "10",
            "cpc": "26",
            "province": "BC",
            "hospitals": "10",
            "rural": "14",
            "gestationallimit": "28 weeks",
            "surgical": "13"
        },
        {
            "totalproviders": "4",
            "clinics": "2",
            "medical": "4",
            "urban": "2",
            "cpc": "5",
            "province": "MB",
            "hospitals": "2",
            "rural": "2",
            "gestationallimit": "20 weeks",
            "surgical": "3"
        },
        {
            "totalproviders": "5",
            "clinics": "2",
            "medical": "2",
            "urban": "4",
            "cpc": "6",
            "province": "NB",
            "hospitals": "3",
            "rural": "1",
            "gestationallimit": "16 weeks",
            "surgical": "4"
        },
        {
            "totalproviders": "4",
            "clinics": "2",
            "medical": "3",
            "urban": "2",
            "cpc": "1",
            "province": "NL",
            "hospitals": "2",
            "rural": "2",
            "gestationallimit": "16 weeks",
            "surgical": "3"
        },
        {
            "totalproviders": "3",
            "clinics": "1",
            "medical": "2",
            "urban": "3",
            "cpc": "0",
            "province": "NS",
            "hospitals": "2",
            "rural": "1",
            "gestationallimit": "20 weeks",
            "surgical": "2"
        },
        {
            "totalproviders": "4",
            "clinics": "1",
            "medical": "2",
            "urban": "1",
            "cpc": "5",
            "province": "NT",
            "hospitals": "3",
            "rural": "2",
            "gestationallimit": "20 weeks",
            "surgical": "3"
        },
        {
            "totalproviders": "1",
            "clinics": "0",
            "medical": "1",
            "urban": "1",
            "cpc": "0",
            "province": "NU",
            "hospitals": "1",
            "rural": "0",
            "gestationallimit": "17 weeks",
            "surgical": "1"
        },
        {
            "totalproviders": "54",
            "clinics": "36",
            "medical": "35",
            "urban": "41",
            "cpc": "71",
            "province": "ON",
            "hospitals": "18",
            "rural": "13",
            "gestationallimit": "34 weeks",
            "surgical": "22"
        },
        {
            "totalproviders": "1",
            "clinics": "1",
            "medical": "1",
            "urban": "1",
            "cpc": "3",
            "province": "PE",
            "hospitals": "0",
            "rural": "0",
            "gestationallimit": "15 weeks",
            "surgical": "1"
        },
        {
            "totalproviders": "50",
            "clinics": "32",
            "medical": "23",
            "urban": "37",
            "cpc": "10",
            "province": "QC",
            "hospitals": "18",
            "rural": "13",
            "gestationallimit": "24 weeks",
            "surgical": "48"
        },
        {
            "totalproviders": "5",
            "clinics": "3",
            "medical": "3",
            "urban": "5",
            "cpc": "5",
            "province": "SK",
            "hospitals": "2",
            "rural": "0",
            "gestationallimit": "19 weeks",
            "surgical": "3"
        },
        {
            "totalproviders": "1",
            "clinics": "1",
            "medical": "1",
            "urban": "1",
            "cpc": "0",
            "province": "YT",
            "hospitals": "0",
            "rural": "0",
            "gestationallimit": "15 weeks + 3 days",
            "surgical": "1"
        }
    ]

const rootEl = document.getElementById('abortion-access-table')
const locale = rootEl.dataset.locale
const dataSource = document.querySelectorAll('#jurisdictions-list .jurisdiction-item');
const tableData = [...dataSource].map(el => Object.assign({}, el.dataset))
console.log({tableData})
console.log({locale})

const root = ReactDOM.createRoot(rootEl);
root.render(
  <React.StrictMode>
    <App locale={locale} initData={tableData.length > 0 ? tableData : initData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
