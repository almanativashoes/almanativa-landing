import styles from "./Footer.module.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} Alma Nativa Shoes®. Todos los derechos
        reservados.
      </p>
      <div className={styles.links}>
        <a
          href="https://wa.me/573202514420"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoWhatsapp /> WhatsApp
        </a>
        <a
          href="https://www.instagram.com/almanativa_co/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram /> Instagram
        </a>
        <a
          href="https://www.youtube.com/@almanativa-shoes"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube /> YouTube
        </a>
        <a href="#contacto" className={styles.link}>
          <MdEmail /> Contacto
        </a>
      </div>
    </footer>
  );
}
