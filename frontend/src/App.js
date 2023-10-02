import ServiceList from './components/ServiceList.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddService from './components/AddService.js';
import EditService from './components/EditService.js';

function App() {
  return (
    // Inisialisasi aplikasi dengan React Router
    <BrowserRouter>
      {/* Menggunakan komponen Routes untuk menentukan rute */}
      <Routes>
        {/* Rute pertama: Menampilkan daftar layanan */}
        <Route path="/" element={<ServiceList />} />
        
        {/* Rute kedua: Menambahkan layanan baru */}
        <Route path="/add" element={<AddService />} />
        
        {/* Rute ketiga: Mengedit layanan yang ada berdasarkan ID */}
        <Route path="/edit/:id" element={<EditService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
