import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Repositories, Repository } from "./pages";
import ErrorBoundary from "./error/ErrorBoundary";
import NotFound from "./error/NotFound";

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
