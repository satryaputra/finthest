import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GET_STARTED } from "@/middlewares/GetStartedMiddleware";

export default function ArticlesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      ArticlePage
      <br />
      <Link to="/" onClick={() => localStorage.setItem(GET_STARTED, "1")}>
        skip (pencet ini ul)
      </Link>
    </motion.div>
  );
}
