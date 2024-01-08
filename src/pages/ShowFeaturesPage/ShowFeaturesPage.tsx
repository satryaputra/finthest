import { motion } from "framer-motion";
import bgShowFeatures from "/images/bg-show-features.png";

export default function ShowFeaturesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={bgShowFeatures}
        alt="background show features"
        className="w-full"
      />
      <h4>Fitur yang disediakan Finplan</h4>
    </motion.div>
  );
}
