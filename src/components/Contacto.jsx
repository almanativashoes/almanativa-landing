import styles from "./Contacto.module.css";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Contacto() {
  return (
    <section id="contacto" className={styles.section}>
      <h2 className={styles.title}>Contáctanos</h2>
      <p>almanativashoes@gmail.com | +57 320 2514420</p>
      <p className={styles.description}>
        Déjanos tus datos y nos pondremos en contacto contigo lo antes posible.
      </p>

      {/* Formulario con Formspree */}
      <form
        action="https://formspree.io/f/mgvnenvb" // 🔹 reemplazar con tu endpoint
        method="POST"
        className={styles.form}
      >
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          required
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          required
          className={styles.input}
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Tu teléfono"
          className={styles.input}
        />
        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje..."
          rows="4"
          required
          className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.button}>
          <MdEmail style={{ marginRight: "0.5em" }} />
          Enviar mensaje
        </button>
      </form>

      {/* Botones de acción */}
      <div className={styles.actions}>
        <a href="tel:+573112800479" className={styles.iconButton}>
          <BiSolidPhoneCall /> Llamar
        </a>
        <a
          href="https://wa.me/573222078108?text=Hola,%20quiero%20más%20información%20sobre%20Alma%20Nativa"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconButton}
        >
          <IoLogoWhatsapp /> WhatsApp
        </a>
      </div>
    </section>
  );
}
