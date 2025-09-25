import styles from "./Tienda.module.css";

export default function Tienda() {
  return (
    <section id="tienda" className={styles.section}>
      <h2 className={styles.title}>Visítanos</h2>
      <p className={styles.address}>
        Cl. 10 # 17-64, Barrio SAn Miguel, Cúcuta, Colombia
      </p>
      <div className={styles.flexContainer}>
        <div className={styles.mapContainer}>
          <iframe
            title="Ubicación Alma Nativa"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3082.4328098667365!2d-72.51681769999999!3d7.8845186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6645001e437687%3A0x60096aac29db8f51!2sAlma%20Nativa%20Shoes!5e1!3m2!1ses-419!2sco!4v1758683504731!5m2!1ses-419!2sco"
            className={styles.map}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.placeContainer}>
          <a
            href="https://maps.app.goo.gl/4RfNGGsvCiLdhW3f7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqVIllm8cUhMlbbUgVBi_n8cQ3N8HYIXJx5bNVTr9l00p-TZ4q9O8b9AGss8Lo81Y-IrBQPyOSmh2y9PMgehQB4YQVUZ6zpU-M9W744VRBLfvzhmS--cmW-67E5waG3AJRxLXdkWbzc1yEJ=s680-w680-h510-rw" //  imagen representativa
              alt="Ver la tienda Google Maps"
              className={styles.placeImage}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
