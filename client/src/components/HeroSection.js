import "../styles/HeroSection.css";
import Video from "../media/videos/DuckDance.mp4";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="HeroContainer" id={"hero"}>
      <div className="HeroBg">
        <video
          className="VideoBg"
          autoPlay
          muted
          loop
          src={Video}
          type="video/mp4"
        />
      </div>
      <div className="HeroContent">
        <h1
          style={{
            textShadow:
              "-1px -1px 6px #fff, 1px -1px 6px #fff, -1px 1px 6px #fff, 1px 1px 6px #fff",
          }}
        >
          Welcome to the World's Collective.
        </h1>
        <h2>
          <Link className="App-link" to="/events">
            See what's on >>>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
