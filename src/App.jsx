import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Homepage from './routes/Homepage';
import Navbar from './components/Navbar';

const App = () => {

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  )
}

export default App
