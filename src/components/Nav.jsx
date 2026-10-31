import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users/wemby">Victor</Link>
      <Link to="/users/duncanyounot">Duncan</Link>
      <Link to="/users/djmeech">Dj Meechymeech</Link>
    </nav>
  );
}

export default Nav;
