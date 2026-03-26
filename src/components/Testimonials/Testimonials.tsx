import styles from "./Testimonials.module.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Ana Silva",
      company: "TechStart Boutique",
      role: "Dona",
      text: "O site desenvolvido aumentou nossas vendas em 300% no primeiro mês. A equipe foi atenciosa e entregou tudo no prazo!",
      rating: 5,
    },
    {
      name: "Carlos Mendes",
      company: "E-commerce Solutions",
      role: "Diretor de Operações",
      text: "Profissionalismo do início ao fim. A Dev MVP entendeu nossa visão e criou uma plataforma que realmente vende.",
      rating: 5,
    },
    {
      name: "Mariana Costa",
      company: "Agência de Design",
      role: "Gestora de Projetos",
      text: "Já trabalho com muita gente, mas a Dev MVP se destaca pela comunicação, qualidade técnica e pós-venda impecável.",
      rating: 5,
    },
  ];

  return (
    <section className={styles.testimonials} id="depoimentos">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>O que nossos <span>clientes dizem</span></h2>
          <p>Histórias de sucesso de empresas que confiaram em nosso trabalho</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className={styles.text}>"{testimonial.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{testimonial.name.charAt(0)}</div>
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role} @ {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.stat_number}>50+</div>
            <div className={styles.stat_label}>Projetos Entregues</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.stat_number}>4.9/5</div>
            <div className={styles.stat_label}>Avaliação Média</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.stat_number}>100%</div>
            <div className={styles.stat_label}>Clientes Satisfeitos</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
