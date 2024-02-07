import React from "react";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bgShowFeatures from "/images/bg-show-features.png";

export default function FeaturesPage() {
  const navigate = useNavigate();
  const [isAnimating, setAnimating] = React.useState(false);

  const handleSkipClick = () => {
    setAnimating(true);
    setTimeout(() => {
      navigate("/articles");
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={isAnimating ? { opacity: 0, y: -50 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={bgShowFeatures}
        alt="background show features"
        className="w-full"
      />
      <h4>Fitur yang disediakan Finplan</h4>
      <button onClick={handleSkipClick}>arrow bawah (pencet ini ul)</button>
    </motion.div>
  );
}
