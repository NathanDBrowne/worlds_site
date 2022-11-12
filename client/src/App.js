import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>We are the World's Collective.</p>
        <a className="App-link" href="/" rel="noopener noreferrer">
          Let's go
        </a>
      </header>
    </div>
  );
}

export default App;
