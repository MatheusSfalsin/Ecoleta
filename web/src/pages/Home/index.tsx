import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

// import { Container } from './styles';
import "./styles.css";

import logo from "../../assets/logo.svg";

const Home: React.FC = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>
        <main>
          <h1>Seu marketplace de coleta de resíduos</h1>
          <p>
            Ajudamos pessoas a encontrarem ponstos de coleta de forma eficente
          </p>

          <Link to="/cadastro-ponto">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
