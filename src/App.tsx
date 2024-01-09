import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components/templates";
import {
  ArticlePage,
  DashboardPage,
  ShowFeaturesPage,
  StartingPage,
} from "@/pages";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/start" element={<StartingPage />} />
        <Route path="/what-features" element={<ShowFeaturesPage />} />
        <Route path="/articles" element={<ArticlePage />} />
      </Route>
    </Routes>
  );
}
