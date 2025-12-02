import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

// Pages
import Home from './pages/Home.jsx'
import MyLibrary from './pages/MyLibrary.jsx' 
import BookDetails from './pages/BookDetails.jsx'
import Auth from './pages/Auth.jsx'
import Settings from './pages/Settings.jsx'

// Layout Components
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">

        {/* ALWAYS visible */}
        <Header />
        <Navbar />

        {/* CHANGES depending on URL */}
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/mylibrary" element={<MyLibrary />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;