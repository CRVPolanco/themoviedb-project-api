import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { UserContextProvider } from './context/UserContext';
import Homepage from './routes/Homepage';
import Navbar from './components/Navbar';
import Login from './routes/Login';
import Register from './routes/Register';
import Favorites from './routes/Favorites';
import SearchByCategory from './routes/SearchByCategory';

const App = () => {

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
      <UserContextProvider>
        <Navbar>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movie/category/:categoryName" element={<SearchByCategory />} />
          </Routes>
        </Navbar>
      </UserContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
