import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Homepage from './routes/Homepage';
import Login from './routes/Login';
import Navbar from './components/Navbar';
import { UserContextProvider } from './context/UserContext';

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
          </Routes>
        </Navbar>
      </UserContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
