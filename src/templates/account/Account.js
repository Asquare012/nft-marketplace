import { motion } from "framer-motion";

import "./account.scss";
import user from "./images/User.png";
import email from "./images/EnvelopeSimple.png";
import pass from "./images/LockKey.png";

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

const Account = () => {
  return (
    <motion.div
      className="Account"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <div className="Account-left"></div>
      <div className="Account-right">
        <div className="Right-top">
          <h1>Create account</h1>
          <h3>
            Welcome! enter your details and start creating, collecting and
            selling NFTs.
          </h3>
        </div>
        <div className="Right-bottom">
          <form>
            <p>
              <img src={user} alt="user" height="50%" />
              <input type="text" placeholder="Username" required />
            </p>
            <p>
              <img src={email} alt="email" height="50%" />
              <input type="email" placeholder="Email Address" required />
            </p>
            <p>
              <img src={pass} alt="password" height="50%" />
              <input type="password" placeholder="Password" required />
            </p>
            <p>
              <img src={pass} alt="password" height="50%" />
              <input type="password" placeholder="Password" required />
            </p>
            <p>
              <input type="submit" value="Create account" />
            </p>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Account;
