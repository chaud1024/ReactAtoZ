import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const key = process.env.REACT_APP_APIKEY
  console.log(key)
  useEffect(()=>{
    console.log(key)
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        { process.env.REACT_APP_APIKEY}
        </div>
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
