import styles from "./Hero.module.css";

import LogoHero from "./LogoHero";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Sua <span className={styles.highlight}>Presença Digital</span>
            {" "}Começa Aqui
          </h1>

          <p className={styles.subtitle}>
            Transformamos ideias em plataformas digitais de alto desempenho. 
            Desenvolvimento web moderno, responsivo e orientado para conversão.
          </p>

          <div className={styles.highlights}>
            <div className={styles.highlight_item}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                <polyline points="13 2 13 9 20 9"/>
                <path d="M9 15l2 2 4-4"/>
              </svg>
              <span>Desenvolvimento Rápido</span>
            </div>
            <div className={styles.highlight_item}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>SEO Otimizado</span>
            </div>
            <div className={styles.highlight_item}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m4.64 7.36l-5.53 5.53c-.39.39-1.02.39-1.41 0l-2.83-2.83c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l2.12 2.12 4.82-4.82c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41z"/>
              </svg>
              <span>100% Responsivo</span>
            </div>
            <div className={styles.highlight_item}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                <circle cx="12" cy="12" r="1"/>
                <path d="M12 1v6m0 6v6"/><path d="M4.22 4.22l4.24 4.24m2.12 2.12l4.24 4.24M1 12h6m6 0h6"/>
                <path d="M4.22 19.78l4.24-4.24m2.12-2.12l4.24-4.24M19.78 19.78l-4.24-4.24m-2.12-2.12l-4.24-4.24"/>
              </svg>
              <span>Suporte 24/7</span>
            </div>
          </div>

          <div className={styles.buttons}>
            <a href="#contato" className={styles.cta_primary}>
              Solicitar Proposta
            </a>
            <a href="#portfolio" className={styles.cta_secondary}>
              Ver Casos de Sucesso →
            </a>
          </div>

          <p className={styles.trust}>
            Confiado por <strong>50+ empresas</strong> em tecnologia e e-commerce
          </p>
        </div>

        <div className={styles.visual}>
          <LogoHero />
        </div>
      </div>
    </section>
  );
}

export default Hero;
