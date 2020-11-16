import React from 'react';
import './styles.css';

const Home = ({ history }) => (
  <div className="home">
    <button id="signup-btn" onClick={() => history.push('/signup')}>
      Cadastro
    </button>
  </div>
);

export default Home;
