import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRoute from './routes/userRoute';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<UserRoute/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
