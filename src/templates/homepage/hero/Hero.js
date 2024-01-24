import "./hero.scss";
import hero_img from "./images/hero-img.png";
import avatar from "./images/Avatar.png";
import rocket from "./images/Rocket.png";

const Hero = () => {
  return (
    <div className="Hero">
      <main>
        <div className="Main-top">
          <div className="Top-left">
            <h1>Discover digital art & Collect NFTs</h1>
            <h2>
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </h2>
          </div>
          <div className="Top-right">
            <div className="Top-right-container">
              <div className="Container-image">
                <img src={hero_img} alt="hero_img" height="100%" width="100%" />
              </div>
              <div className="Container-info">
                <div className="Info-title">Space Walking</div>
                <div className="Info-id">
                  <img src={avatar} alt="avatar" />
                  Animakid
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Main-bottom">
          <button>
            <img src={rocket} alt="rocket" />
            Get Started
          </button>
          <ul>
            <li>
              <span>386k+</span>
              Total Sale
            </li>
            <li>
              <span>100k+</span>
              Auctions
            </li>
            <li>
              <span>240k+</span>
              Artists
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Hero;
