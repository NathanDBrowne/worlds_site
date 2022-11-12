import logo from "../components/logo.svg";
import "../App.css";

function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>We are the World's Collective.</p>
        <a className="App-link" href="/home" rel="noopener noreferrer">
          Let's go
        </a>
      </header>
    </div>
  );
}

export default Landing;
