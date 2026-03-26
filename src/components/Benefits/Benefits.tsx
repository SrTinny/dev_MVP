import styles from "./Benefits.module.css";

function Benefits() {
  const benefits = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      title: "Performance",
      description: "Sites otimizados para velocidade. Carregamento em menos de 2 segundos.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <path d="M12 18h.01"/>
        </svg>
      ),
      title: "Mobile First",
      description: "Design responsivo perfeito em todos os dispositivos e tamanhos.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      ),
      title: "SEO Pronto",
      description: "Estruturado para ranking no Google desde o dia 1.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Segurança",
      description: "HTTPS, proteção contra ataques e backups automáticos.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="2" x2="12" y2="22"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: "Analytics",
      description: "Relatórios detalhados de visitantes e conversões.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>
          <polyline points="16 11 12 7 8 11"/>
          <line x1="12" y1="7" x2="12" y2="21"/>
        </svg>
      ),
      title: "Escalável",
      description: "Cresce com o seu negócio sem perder performance.",
    },
  ];

  return (
    <section className={styles.benefits} id="beneficios">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Por que <span>escolher Dev MVP</span></h2>
          <p>Combinamos tecnologia de ponta com estratégia de negócio para gerar resultados reais</p>
        </div>

        <div className={styles.grid}>
          {benefits.map((benefit, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.icon}>{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
