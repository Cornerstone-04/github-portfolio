import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ErrorBoundary,
  Home,
  NotFound,
  Repositories,
  Repository,
} from "./pages";
const AppRoutes = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/repositories/:repoName" element={<Repository />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default AppRoutes;
