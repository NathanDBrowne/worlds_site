// import "../App.css";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useEffect } from "react";
import Footer from "../components/Footer";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const App = () => {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("JWT encoded:" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }
  function handleLogout(event) {
    let confirmLogout = window.confirm("You are about to log out.");
    if (confirmLogout) {
      setUser({});
      document.getElementById("signInDiv").hidden = false;
    }
  }
  const LogoutButton = () => {
    return (
      <>
        {Object.keys(user).length !== 0 && (
          <div className="Negative">
            <h2>
              {<AccountCircleIcon />}
              {"  "}
              {user.given_name}{" "}
              {<button onClick={(e) => handleLogout(e)}>Sign Out</button>}
            </h2>
          </div>
        )}
      </>
    );
  };

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);
  return (
    <div>
      <Header user={user} logOutButton={<LogoutButton />} />
      <HeroSection />
      <h1>Welcome to the home page!!</h1>
      <Footer />
    </div>
  );
};

export default App;
