import Evento from "../componentes/Evento";
import "../styles/home.css";

function Home() {
  return (
    <main>
      <div className = "Home">
      <h1>Bem vindo ao Gerenciador de Eventos</h1>
      <p> Aqui você fica por dentro dos eventos.</p>

      {/*Exibindo os eventos*/}
      <Evento nome="Mundo Senai" data="05/11/2025" local="Auditório" />
      <Evento nome="Jogo da Chape" data="26/11/2025" local="Arena Condá" />
      <Evento nome="Enem" data="16/11/2025" local="Unoesc" />
      </div>
    </main>
  );
}
export default Home;
