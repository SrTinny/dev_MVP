import { useEffect, useRef } from "react";
import styles from "./LogoHero.module.css";

const LogoHero = () => {
  const redRef = useRef<HTMLDivElement>(null);
  const orangeRef = useRef<HTMLDivElement>(null);
  const greenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const balls = [redRef.current, orangeRef.current, greenRef.current];
    let i = 0;

    const interval = setInterval(() => {
      // 1. Remove a classe de todos primeiro
      balls.forEach((ball) => {
        if (ball) {
          ball.classList.remove(styles.bounce);
          // Força reflow para que o navegador perceba que a classe foi removida
          void ball.offsetWidth; 
        }
      });

      // 2. Adiciona a classe apenas na bola da vez
      const currentBall = balls[i];
      if (currentBall) {
        currentBall.classList.add(styles.bounce);
      }

      i = (i + 1) % balls.length;
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.logoHeroWrap} aria-label="Logo Dev MVP">
      <div className={styles.logoRow}>
        {/* Lado Esquerdo: Círculo Azul com "Dev" */}
        <div className={styles.blueCircle}>
          <span className={styles.devText}>Dev</span>
        </div>

        {/* Lado Direito: Bolinhas e "MVP" */}
        <div className={styles.mvpBlock}>
          <div className={styles.ballsRow}>
            <div ref={redRef} className={styles.red}></div>
            <div ref={orangeRef} className={styles.orange}></div>
            <div ref={greenRef} className={styles.green}></div>
          </div>
          <span className={styles.mvpText}>MVP</span>
        </div>
      </div>
    </div>
  );
};

export default LogoHero;