import { useRoutes } from "react-router-dom";
import router from "./router";

export default function App() {
  const content = useRoutes(router);
  return content;
}
