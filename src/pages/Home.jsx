import { useEffect } from "react";
import Trending from "../components/Trending";
import Vegetarian from "../components/Vegetarian";
import { motion } from "framer-motion";

const Home = ({ setActiveCuisine }) => {
  useEffect(() => {
    setActiveCuisine("");
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
      exit={{ opacity: 0, transition: { duration: 1.2 } }}
    >
      <Vegetarian />
      <Trending />
    </motion.div>
  );
};

export default Home;
