import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div>
        <h1>404</h1>
        <p>The page you are looking for cannot be found!</p>
        <Link to="/">Refresh page</Link>
      </div>
    </Layout>
  );
};

export default NotFound;
