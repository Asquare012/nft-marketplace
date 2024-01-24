import { motion } from "framer-motion";
import Hero from "./hero/Hero";
import Trending from "./trending/Trending";
import Creators from "./creators/Creators";
import Categories from "./categories/Categories";
import Discover from "./discover/Discover";
import Auction from "./auction/Auction";
import Work from "./work/Work";
import Subscribe from "./subscribe/Subscribe";

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

const Home = () => {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <Hero />
      <Trending />
      <Creators />
      <Categories />
      <Discover />
      <Auction />
      <Work />
      <Subscribe />
    </motion.div>
  );
};

export default Home;
