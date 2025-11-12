// cabeçalho
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <h2> Sistema de Eventos SENAI</h2>
      <h2> Gerenciador Eventos </h2>
      <nav>
      <Link to="/">Início</Link> | <Link to="/sobre">Sobre</Link> {" "}
      </nav>
    </header>
  );
}

export default Header;