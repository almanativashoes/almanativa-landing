import { useState } from "react";
import styles from "./Hero.module.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { IoFootsteps, IoFootstepsSharp } from "react-icons/io5";

import logo from "../assets/logo.png";

// Importa las imágenes de ventajas
import artesania from "../assets/ventajas/artesania.jpg";
import sostenibles from "../assets/ventajas/sostenibles.jpg";
import personalizacion from "../assets/ventajas/personalizacion.jpg";
import comunidades from "../assets/ventajas/comunidades.jpg";

const ventajas = [
  {
    titulo: "Artesanía auténtica",
    descripcion:
      "Cada par es elaborado a mano por artesanos locales, garantizando calidad y originalidad.",
    imagen: artesania,
  },
  {
    titulo: "Materiales sostenibles",
    descripcion:
      "Utilizamos materiales amigables con el medio ambiente y procesos responsables.",
    imagen: sostenibles,
  },
  {
    titulo: "Personalización total",
    descripcion:
      "Puedes personalizar tu calzado para que refleje tu estilo y esencia.",
    imagen: personalizacion,
  },
  {
    titulo: "Apoyo a comunidades",
    descripcion:
      "Al elegirnos, apoyas el trabajo digno y el desarrollo de comunidades artesanas.",
    imagen: comunidades,
  },
];

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>
      {/* Logo y titulo */}
      <div className={styles.headerFlex}>
        {/* Logo */}
        <img src={logo} alt="Logo Alma Nativa" className={styles.logo} />
        {/* Título */}
        <h1 className={styles.title}>En cada paso, una historia</h1>
      </div>

      {/* Videos PLodABkOGzcF46chSjCijDMjrIbPIO_nPF */}
      <div className={styles.flexVideoInfo}>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed?listType=playlist&list=PLodABkOGzcF46chSjCijDMjrIbPIO_nPF&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1"
            title="Alma Nativa Playlist"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className={styles.video}
          ></iframe>
        </div>
        <div className={styles.infoContainer}>
          <h2 className={styles.subtitle}>¿Por qué elegir Alma Nativa?</h2>
          <p className={styles.infoText}>
            En Alma Nativa no vendemos solo zapatos: diseñamos piezas que
            cuentan historias. Cada par es elaborado de manera artesanal, con
            amor por lo natural, respeto por la tradición y un diseño pensado en
            ti..
          </p>
        </div>
      </div>

      {/* Subtítulo */}
      <h2 className={styles.subtitle}>
        Calzado artesanal y personalizado que conecta con tu esencia y celebra
        tus raíces.
      </h2>

      {/* Ventajas competitivas */}
      <VentajasAcordeon />

      {/* Botones de acción */}
      <div className={styles.actions}>
        <a
          href="https://wa.me/573112800479?text=Hola%20quiero%20personalizar%20mi%20calzado%20Alma%20Nativa"
          className={`${styles.button} ${styles.primary}`}
        >
          <FaWandMagicSparkles /> Personaliza tu calzado
        </a>
        <a
          href="https://wa.me/573112800479"
          className={`${styles.button} ${styles.secondary}`}
        >
          <IoLogoWhatsapp /> Hablar con un asesor
        </a>
      </div>
    </section>
  );
}

function VentajasAcordeon() {
  const [abierta, setAbierta] = useState(null);

  return (
    <div className={styles.acordeonLista}>
      {ventajas.map((v, i) => (
        <div key={i} className={styles.acordeonItem}>
          <button
            className={styles.acordeonTitulo}
            onClick={() => setAbierta(abierta === i ? null : i)}
            aria-expanded={abierta === i}
          >
            {abierta === i ? (
              <IoFootsteps className={styles.acordeonIcon} />
            ) : (
              <IoFootstepsSharp className={styles.acordeonIcon} />
            )}
            {v.titulo}
          </button>
          {abierta === i && (
            <div className={styles.acordeonDescripcion}>
              <img
                src={v.imagen}
                alt={v.titulo}
                className={styles.acordeonImagen}
              />
              <p>{v.descripcion}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
