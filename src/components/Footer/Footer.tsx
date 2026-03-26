import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3>Dev MVP</h3>
          <p>
            Desenvolvimento web focado em performance, conversao e crescimento
            para o seu negocio.
          </p>
        </div>

        <nav className={styles.links} aria-label="Links do rodape">
          <a href="#beneficios">Beneficios</a>
          <a href="#servicos">Servicos</a>
          <a href="#processo">Processo</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href="#contato" className={styles.cta}>
          Entre em Contato
        </a>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {currentYear} Dev MVP. Todos os direitos reservados.</p>
        <a href="#" className={styles.backToTop}>
          Voltar ao topo
        </a>
      </div>
    </footer>
  );
}

export default Footer;
