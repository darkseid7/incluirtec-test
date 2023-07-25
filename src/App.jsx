import { motion } from "framer-motion";

import "./App.css";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Home />
      </motion.div>
    </>
  );
}

export default App;
