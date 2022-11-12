import React from "react";
import "../styles/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";

function Footer() {
  return (
    <div className="FooterContainer" id={"footer"}>
      <div className="FooterWrap">
        <div className="FooterLinksContainer">
          <div className="FooterLinksWrapper">
            <div className="FooterLinkItems">
              <div className="FooterLinkTitle">
                {<p style={{ color: "#38de21" }}>Reach Out</p>}
              </div>
              <div>+44(0)7312 267 345</div>
              <div>inquiries@worldscollective.com</div>
            </div>
            <div className="FooterLinkItems">
              <div className="FooterLinkTitle">
                {<p style={{ color: "#ff0055" }}>About Us</p>}
              </div>
              <div className="FooterScrollLink" to="projects">
                Projects
              </div>
              <div className="FooterScrollLink" to="stack">
                My Stack
              </div>
              <div
                className="FooterLink"
                href="https:github.com/NathanDBrowne"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </div>
            </div>
          </div>
          <div className="FooterLinksWrapper">
            <div className="FooterLinkItems">
              <div className="FooterLinkTitle">
                {<p style={{ color: "#7e42ff" }}>Social Media</p>}
              </div>
              <div
                className="FooterLink"
                href="https://www.linkedin.com/in/nathan-b-42549413a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </div>
              <div
                className="FooterLink"
                href="https://t.me/FreeweightNate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SocialMedia">
        <div className="SocialMediaWrap">
          <div className="SocialLogo" to="/">
            World's Collective
          </div>
          <div className="WebsiteRights">World's Collective 2023</div>
          <div className="SocialIcons">
            <div
              className="SocialIconLink"
              href="https://github.com/NathanDBrowne"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </div>
            <div
              className="SocialIconLink"
              href="https://www.linkedin.com/in/nathan-b-42549413a/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </div>
            <div
              className="SocialIconLink"
              href="https://t.me/FreeweightNate"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Telegram"
            >
              <TelegramIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
