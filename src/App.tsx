import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components";
import { StartingPage } from "@/pages";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<StartingPage />} />
      </Route>
    </Routes>
  );
}
