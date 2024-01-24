import { motion } from "framer-motion";
import "./wallet.scss";
import meta from "./images/Metamask.png";
import connect from "./images/WalletConnect.png";
import coinbase from "./images/Coinbase.png";

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

const Wallet = () => {
  return (
    <motion.div
      className="Wallet"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <div className="Wallet-left"></div>
      <div className="Wallet-right">
        <div className="Right-top">
          <h1>Connect wallet</h1>
          <h3>
            Choose a wallet you want to connect. There are several wallet
            providers..
          </h3>
        </div>
        <div className="Right-bottom">
          <ul>
            <li>
              <img src={meta} alt="metamask" />
              Metamask
            </li>
            <li>
              <img src={connect} alt="wallet connect" />
              Wallet Connect
            </li>
            <li>
              <img src={coinbase} alt="coinbase" />
              Coinbase
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Wallet;
