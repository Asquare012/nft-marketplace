import "./discover.scss";
import discoverData from "./discoverData";
import eye from "./images/eye.png";

const Discover = () => {
  return (
    <div className="Discover">
      <div className="Discover-top">
        <div className="Top-left">
          <h1>Discover More NFTs</h1>
          <h3>Explore new trending NFTs</h3>
        </div>
        <div className="Top-right">
          <button>
            <img src={eye} alt="eye" />
            See All
          </button>
        </div>
      </div>
      <div className="Discover-mid">
        <ul>
          {discoverData.map((info) => {
            const { id, img, avatar, title, user, price, bid } = info;
            return (
              <li key={id}>
                <div className="Top">
                  <img src={img} alt={title} height="100%" width="100%" />
                </div>
                <div className="Bottom">
                  <div className="Info">
                    <p>{title}</p>
                    <p>
                      <img src={avatar} alt={user} />
                      {user}
                    </p>
                  </div>
                  <div className="Amount">
                    <div className="Left">
                      <span>Price</span>
                      {price}
                    </div>
                    <div className="Right">
                      <span>Highest Bid</span>
                      {bid}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="Discover-bottom">
        <button>
          <img src={eye} alt="eye" />
          See All
        </button>
      </div>
    </div>
  );
};

export default Discover;
