import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Alma Nativa Shoes®</div>
      <div className={styles.links}>
        <a href="#hero" className={styles.link}>
          Inicio
        </a>
        <a href="#productos" className={styles.link}>
          Productos
        </a>
        <a href="#tienda" className={styles.link}>
          Visítanos
        </a>
        <a href="#contacto" className={styles.link}>
          Contacto
        </a>
      </div>
    </nav>
  );
}
