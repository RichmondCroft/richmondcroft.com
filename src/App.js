import logo from "./assets/images/logo.svg";
import gearLogo from "./assets/images/gear-logo-image.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="navigation-bar">
        <img src={logo} alt="RC" />
        <div className="navigation-bar__brand-name">Richmond Croft</div>
      </div>
      <div className="content">
        <img className="content__icon" src={gearLogo} alt="Coming soon" />
        <div className="content__text">
          Development of the website is in progress..
        </div>
      </div>
    </div>
  );
}

export default App;
