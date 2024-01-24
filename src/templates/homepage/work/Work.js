import "./work.scss";
import first from "./images/Icon.png";
import second from "./images/Icon2.png";
import third from "./images/Icon3.png";

const Work = () => {
  return (
    <div className="Work">
      <div className="Work-title">
        <h1>How it works</h1>
        <h3>Find out how to get started</h3>
      </div>
      <div className="Work-card">
        <ul>
          <li>
            <div className="Icon">
              <img src={first} alt="icon" height="90%" />
            </div>
            <div className="Info">
              <p>Setup Your wallet</p>
              <p>
                Set up your wallet of choice. Connect it to the NFT market by
                clicking the wallet icon in the top right corner.
              </p>
            </div>
          </li>
          <li>
            <div className="Icon">
              <img src={second} alt="icon" height="90%" />
            </div>
            <div className="Info">
              <p>Create Collection</p>
              <p>
                Upload your work and setup your collection. Add a description,
                social links and floor price.
              </p>
            </div>
          </li>
          <li>
            <div className="Icon">
              <img src={third} alt="icon" height="90%" />
            </div>
            <div className="Info">
              <p>Start Earning</p>
              <p>
                Choose between auctions and fixed-price listings. Start earning
                by selling your NFTs or trading others.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
