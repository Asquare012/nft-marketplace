import { NavLink } from "react-router-dom";
import "./creator.scss";
import creatorData from "./creatorData";
import rocket from "./images/Rocket.png";

const Creators = () => {
  return (
    <div className="Creators">
      <div className="Creators-top">
        <div className="Top-left">
          <h1>Top creators</h1>
          <h3>Checkout Top Rated Creators on the NFT Marketplace</h3>
        </div>
        <div className="Top-right">
          <NavLink to="/rankings">
            <button>
              <img src={rocket} alt="rocket" />
              View Rankings
            </button>
          </NavLink>
        </div>
      </div>
      <div className="Creators-mid">
        <ul>
          {creatorData.map((creator) => {
            const { id, name, img, eth } = creator;
            return (
              <li key={id}>
                <div className="Label">
                  <span>{id}</span>
                </div>
                <div className="Img">
                  <img src={img} alt={name} height="80px" />
                </div>
                <div className="Info">
                  <p>
                    <span className="Name"> {name}</span>
                  </p>
                  <p>
                    <span className="Sale">Total Sales:</span> {eth}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="Creators-bottom">
        <NavLink to="/rankings">
          <button>
            <img src={rocket} alt="rocket" />
            View Rankings
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Creators;
