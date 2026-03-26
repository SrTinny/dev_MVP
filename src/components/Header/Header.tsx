import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiPhone,
  FiSettings,
  FiGrid,
} from "react-icons/fi";

import styles from "./Header.module.css";
import LogoAnimated from "./LogoAnimated";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="#" aria-label="Dev Hub Home">
          <LogoAnimated />
        </a>
      </div>

      <nav className={styles.navDesktop} aria-label="Navegação principal">
        <a href="#">
          <FiHome /> Início
        </a>
        <a href="#beneficios">
          <FiSettings /> Por que escolher
        </a>
        <a href="#servicos">
          <FiSettings /> Serviços
        </a>
        <a href="#archviz">
          <FiGrid /> Archviz
        </a>
        <a href="#portfolio">
          <FiGrid /> Projetos
        </a>
        <a href="#contato">
          <FiPhone /> Contato
        </a>
      </nav>

      <button
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-label="Abrir menu"
        aria-expanded={isOpen}
      >
        <FiMenu />
      </button>

      <div
        className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}
        role="navigation"
        aria-label="Menu mobile"
      >
        <button
          className={styles.closeButton}
          onClick={closeMenu}
          aria-label="Fechar menu"
          type="button"
        >
          <FiX />
        </button>
        <a href="#" onClick={closeMenu}>
          <FiHome /> Início
        </a>
        <a href="#beneficios" onClick={closeMenu}>
          <FiSettings /> Por que escolher
        </a>
        <a href="#servicos" onClick={closeMenu}>
          <FiSettings /> Serviços
        </a>
        <a href="#archviz" onClick={closeMenu}>
          <FiGrid /> Archviz
        </a>
        <a href="#portfolio" onClick={closeMenu}>
          <FiGrid /> Projetos
        </a>
        <a href="#contato" onClick={closeMenu}>
          <FiPhone /> Contato
        </a>
      </div>

      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
}

export default Header;
