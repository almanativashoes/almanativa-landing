import Producto from "./Producto";
import styles from "./Productos.module.css";

// Importar imágenes desde /src/assets/productos
import productoImg01 from "../assets/productos/producto01.jpg";
import productoImg02 from "../assets/productos/producto02.jpg";
import productoImg03 from "../assets/productos/producto03.jpg";
import productoImg04 from "../assets/productos/producto04.jpg";
import productoImg05 from "../assets/productos/producto05.jpg";
import productoImg06 from "../assets/productos/producto06.jpg";

export default function Productos() {
  const productos = [
    {
      nombre: "Sandalia artesanal basica",
      descripcion: "Confeccionadas a mano con materiales naturales.",
      precio: "Desde $120 mil",
      imagen: productoImg01,
    },
    {
      nombre: "Sandalia artesanal clasica",
      descripcion: "Confeccionadas a mano con materiales naturales.",
      precio: "Desde $140 mil",
      imagen: productoImg02,
    },
    {
      nombre: "Sandalia artesanal casual",
      descripcion: "Confeccionadas a mano con materiales naturales.",
      precio: "Desde $140 mil",
      imagen: productoImg03,
    },
    {
      nombre: "Sandalia artesanal noche",
      descripcion: "Confeccionadas a mano con materiales naturales.",
      precio: "Desde $160 mil",
      imagen: productoImg04,
    },
    {
      nombre: "Artesania, Bolsos y Sombreros",
      descripcion:
        "Confeccionados por manos expertas con tecnica tradicionales.",
      precio: "Desde $180 mil",
      imagen: productoImg05,
    },
    {
      nombre: "Calzado Personalizado",
      descripcion:
        "Elige materiales, colores, detalles y grabados únicos como tu.",
      precio: "Descuentos para empresas", // Precio opcional
      imagen: productoImg06,
    },
  ];

  return (
    <section id="productos" className={styles.section}>
      <h2 className={styles.title}>Nuestros productos</h2>
      <div className={styles.grid}>
        {productos.map((p, i) => (
          <Producto key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
