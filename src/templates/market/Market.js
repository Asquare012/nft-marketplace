import { motion } from "framer-motion";
import { useState } from "react";
import "./market.scss";
import marketData from "./marketData";
import search_icon from "./images/search.png";

const pageVariants = {
  initial: {
    x: "-200vw",
  },
  animate: {
    x: "0",
    transition: {
      type: "spring",
      stiffness: "40",
    },
  },
};

const Market = () => {
  const [search, setSearch] = useState("");
  return (
    <motion.div
      className="Market"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <div className="Market-top">
        <h1>Browse Marketplace</h1>
        <h3>Browse through more than 50k NFTs on the NFT Marketplace.</h3>
        <p className="Search">
          <input
            type="text"
            placeholder="Search your favourite NFTs"
            onChange={(e) => setSearch(e.target.value)}
          />
          <img src={search_icon} alt="search" />
        </p>
        <div className="Nav">
          <div>
            NFTs <span>302</span>
          </div>
          <div>
            Collections <span>67</span>
          </div>
        </div>
      </div>
      <div className="Market-bottom">
        <div className="Bottom-container">
          <ul>
            {marketData
              .filter((info) => {
                return search.toLocaleLowerCase() === ""
                  ? info
                  : info.title.toLocaleLowerCase().includes(search);
              })
              .map((info) => {
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
      </div>
    </motion.div>
  );
};

export default Market;
