import './App.css';
import ContactUs from './pages/ContactUs';
import Tabel from './pages/Tabel';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactUs />} />
        <Route path="tabel" element={<Tabel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
