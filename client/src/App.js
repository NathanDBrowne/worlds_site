// import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import Landing from "./routes/Landing";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Merch from "./routes/Merch/index";
import "./App.css";
import Events from "./routes/Events";
import About from "./routes/About";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route exact path="home" element={<Home />}></Route>
        <Route exact path="merch" element={<Merch />} />
        <Route exact path="events" element={<Events />} />
        <Route exact path="about" element={<About />} />
        {/* <Route element={<ProtectedRoute />}></Route> */}
      </Routes>
    </div>
  );
};

export default App;

const ProtectedRoute = ({ user, redirectPath = "/", children }) => {
  if (Object.keys(user).length === 0) {
    console.log("USER: ", user);
    return (
      <>
        <Navigate to={redirectPath} replace />
      </>
    );
  }
  return children ? children : <Outlet />;
};
