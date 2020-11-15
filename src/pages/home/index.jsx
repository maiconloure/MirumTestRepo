import React from "react";
import "./styles.css";

const Home = ({ history }) => (
  <div class="homepage">
    <button id="signup-btn" onClick={() => history.push("/signup")}>
      Cadastro
    </button>
  </div>
);

export default Home;
