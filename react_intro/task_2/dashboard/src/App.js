import logo from './holbertonschool-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton Logo"/>
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="form">
          <label htmlFor="email">
            <span>Email:</span>
            <input type="email" name="email" id="email" />
          </label>

          <label htmlFor="password">
            <span>Password:</span>
            <input type="password" name="password" id="pwd" />
          </label>
          <button onClick={() => {}}>OK</button>
        </div>        
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
