import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary, NotFound, Repositories, Repository } from "./pages";
const AppRoutes = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" exact element={<Repositories />} />
          <Route path="/repository/:repoName" element={<Repository />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default AppRoutes;
