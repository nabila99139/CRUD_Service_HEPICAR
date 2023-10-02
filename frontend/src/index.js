import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bulma/css/bulma.css";

// Membuat akar ReactDOM untuk merender komponen React ke dalam DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Merender komponen utama dalam mode ketat (strict mode) menggunakan ReactDOM
root.render(
  <React.StrictMode>
    <App /> {/* Komponen utama aplikasi */}
  </React.StrictMode>,
  document.getElementById('root') // Menentukan elemen DOM target untuk merender aplikasi
);

