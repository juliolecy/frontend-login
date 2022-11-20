import * as k from "./styles";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <k.Container>
        <div>
          <Link to="/login">Get Started</Link>
        </div>
      </k.Container>
    </>
  );
};

export default Home;
