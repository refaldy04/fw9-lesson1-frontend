import './App.css';
import ContactUs from './pages/ContactUs';
import Tabel from './pages/Tabel';
import Detail from './pages/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactUs />} />
        <Route path="tabel" element={<Tabel />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
