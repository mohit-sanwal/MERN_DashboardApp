import {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import Footer from './components/Footer.jsx';
import SignUp from './components/SignUp.js';
import PrivateComponent from './components/PrivateComponent';


function App() {
  const [appData, setAppData] = useState('');

  const getData = async() => {
    const data = await fetch('http://localhost:5000/app');
    console.log('fetch promise--', data)
    const respData = await data.json();
    console.log('respData--', respData);
    setAppData(respData);
  }

  useEffect(() => {
    getData();
  }, [])

  console.log('appData', appData);
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Product listing</h1>}/>
            <Route path="/add" element={<h1>add Product </h1>}/>
            <Route path="/update" element={<h1>update Product</h1>}/>
            <Route path="/profile" element={<h1>Profile page</h1>}/>
            <Route path="/logout" element={<h1> logout </h1>}/>
          </Route>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
