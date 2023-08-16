import React from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import AnnonceDetail from './Pages/AnnonceDetail';
import Annonces from './Pages/Annonces';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Error from './Pages/Error';

function App() {
  return (
    <div className="App">
      <h1>SELL&BUY</h1>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/annonceDetail' element={<AnnonceDetail />} />
        <Route path='/annonces' element={<Annonces />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/*' element={<Error />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
