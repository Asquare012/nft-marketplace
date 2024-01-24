import { motion } from "framer-motion";
import "./rankings.scss";
import rankingData from "./rankingData";

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

const Rankings = () => {
  return (
    <motion.div
      className="Rankings"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <div className="Rankings-top">
        <h1>Top Creators</h1>
        <h3>Check out top ranking NFT artists on the NFT Marketplace.</h3>
        <div className="Nav">
          <div>Today</div>
          <div>This Week</div>
          <div>This Month</div>
          <div>All Time</div>
        </div>
      </div>
      <div className="Rankings-bottom">
        <div className="Bottom-header">
          <ul>
            <li>Artist</li>
            <li>Change</li>
            <li>NFTs Sold</li>
            <li>Volume</li>
          </ul>
        </div>
        <div className="Bottom-info">
          <ul>
            {rankingData.map((data) => {
              const { id, name, img, NFT, change, vol } = data;
              return (
                <li key={id}>
                  <span className="Num">{id}</span>
                  <span className="Face">
                    <img src={img} alt={name} height="40px" />
                  </span>
                  <span className="Name">{name}</span>
                  <span className="Change">{change}</span>
                  <span className="NFT">{NFT}</span>
                  <span className="Volume">{vol}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Rankings;
