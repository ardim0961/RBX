import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Halaman-halaman yang dibutuhkan
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import OwnerPage from './pages/OwnerPage';

function App() {
  // Cek apakah ada nama website yang tersimpan di localStorage
  const [websiteName, setWebsiteName] = useState(localStorage.getItem('websiteName') || 'Belirbx Store');

  // Fungsi untuk mengubah nama website
  const handleChangeWebsiteName = (event) => {
    const newName = event.target.value;
    setWebsiteName(newName);
    // Simpan nama website ke localStorage
    localStorage.setItem('websiteName', newName);
  };

  return (
    <Router>
      <div className="App">
        {/* Input untuk mengubah nama website */}
        <header className="App-header">
          <input
            type="text"
            value={websiteName}
            onChange={handleChangeWebsiteName}
            placeholder="Masukkan Nama Website"
          />
          <h1>{websiteName}</h1>
        </header>

        {/* Routing untuk Halaman */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/owner" element={<OwnerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;