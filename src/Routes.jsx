import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound, Repositories, Repository } from "./pages";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Repositories />} />
        <Route path="/repository/:repoName" element={<Repository />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
