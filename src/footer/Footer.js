import "./footer.scss";
import logo from "./images/logo.png";
import envelope from "./images/envelope.png";
import discord from "./images/DiscordLogo.png";
import youtube from "./images/YoutubeLogo.png";
import twitter from "./images/TwitterLogo.png";
import instagram from "./images/InstagramLogo.png";

const Footer = () => {
  return (
    <footer>
      <div className="Footer-left">
        <p>
          <img src={logo} alt="logo" height="25px" />
          NFT Marketplace
        </p>
        <p>NFT marketplace UI created with Anima for Figma.</p>
        <p>
          Join our community <br />
          <ul>
            <li>
              <img src={discord} height="30px" alt="discord" />
            </li>
            <li>
              <img src={youtube} height="30px" alt="youtube" />
            </li>
            <li>
              <img src={twitter} height="30px" alt="twitter" />
            </li>
            <li>
              <img src={instagram} height="30px" alt="instagram" />
            </li>
          </ul>
        </p>
      </div>
      <div className="Footer-center">
        <p>Explore</p>
        <p>
          <ul>
            <li>Marketplace</li>
            <li>Rankings</li>
            <li>Connect a wallet</li>
          </ul>
        </p>
      </div>
      <div className="Footer-right">
        <p>Join our weekly digest</p>
        <p>Get exclusive promotions & updates straight to your inbox.</p>
        <p>
          <input type="email" placeholder="Enter your email here" />
          <button>
            <img src={envelope} alt="envelope-icon" />
            Subscribe
          </button>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
