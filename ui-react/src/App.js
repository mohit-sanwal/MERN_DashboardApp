import {useEffect, useState} from 'react';

import logo from './logo.svg';
import './App.css';


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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {appData?.data}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
