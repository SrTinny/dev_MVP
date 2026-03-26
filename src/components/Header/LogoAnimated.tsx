import { useEffect, useRef } from "react";
import styles from "./LogoAnimated.module.css";

const LogoAnimated = () => {
  const blueRef = useRef<HTMLDivElement>(null);
  const redRef = useRef<HTMLDivElement>(null);
  const orangeRef = useRef<HTMLDivElement>(null);
  const greenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animação simples: bolinhas pequenas "pulam" em sequência
    const balls = [redRef.current, orangeRef.current, greenRef.current];
    let i = 0;
    const interval = setInterval(() => {
      balls.forEach((ball) => {
        if (ball) {
          ball.classList.remove(styles.bounce);
          // Força reflow para reiniciar animação
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          ball.offsetWidth;
        }
      });
      if (balls[i] && balls[i] !== null) balls[i]!.classList.add(styles.bounce);
      i = (i + 1) % balls.length;
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.logoWrap} aria-label="Dev Hub Logo animado">
      <div ref={blueRef} className={styles.blue}></div>
      <div ref={redRef} className={styles.red}></div>
      <div ref={orangeRef} className={styles.orange}></div>
      <div ref={greenRef} className={styles.green}></div>
    </div>
  );
};

export default LogoAnimated;
