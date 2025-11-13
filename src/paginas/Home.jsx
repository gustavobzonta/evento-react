import Evento from "../componentes/Evento";
import "../styles/home.css";

function Home() {
  return (
    <main>
      <div className = "Home">
      <h1>Bem vindo ao Gerenciador de Eventos</h1>
      <p> Aqui você fica por dentro dos eventos.</p>

      {/*Exibindo os eventos*/}
      <Evento nome="festa do tuio" data="14/11/2025" local="nao sei aonde casa do tuio" />
      <Evento nome="aniversario da angelica" data="19/11/2025" local="Arena strike" />
      <Evento nome="aniversario da angelica 2" data="22/11/2025" local="casa da gege" />
      </div>
    </main>
  );
}
export default Home;
