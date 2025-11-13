import "../styles/footer.css";
function Footer() {
  // Função que retorna o ano atual
  const ano = new Date().getFullYear();

  return (
    <footer>
      <p> gustavo zonta- {ano} </p>
    </footer>
  );
}

export default Footer;
