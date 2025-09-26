import styles from "./Producto.module.css";

export default function Producto({ nombre, descripcion, precio, imagen }) {
  const mensaje = `Hola, me interesa el producto: ${nombre}`;
  const urlWhatsApp = `https://wa.me/573202514420?text=${encodeURIComponent(
    mensaje
  )}`;

  return (
    <div className={styles.card}>
      <img src={imagen} alt={nombre} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{nombre}</h3>
        <p className={styles.description}>{descripcion}</p>
        {precio && <p className={styles.price}>« {precio} »</p>}
        <a
          href={urlWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          !Lo Quiero¡
        </a>
      </div>
    </div>
  );
}
