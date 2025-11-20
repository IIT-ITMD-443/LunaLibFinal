import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx'
import MyLibrary from './pages/MyLibrary.jsx' 
import BookDetails from './pages/BookDetails.jsx'
import Auth from './pages/Auth.jsx'
import Settings from './pages/Settings.jsx'


// Import images from src/assets
import Logo from './assets/logo.png';
import HomeIcon from './assets/home.png';
import MyLibraryIcon from './assets/mylibrary.png';
import BookIcon from './assets/book.png';
import LoginIcon from './assets/login.png';
import SettingsIcon from './assets/settings.png';

function App() {

  return (
   <BrowserRouter> 
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/library' element={<MyLibrary />} />
        <Route path='/book/:id' element={<BookDetails />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;