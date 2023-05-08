import styles from "@/styles/Foot.module.css";
import Link from "next/link"

export default function Foot() {
  return (
    <>
      <footer >
        <article className={styles.zonaContactos}>
          <h2 className={styles.tituloContactos}>
            CONTACTO
          </h2>
          <ul className={styles.correos}>
           
              <Link className={styles.mail} href="/contacto">julia@gmail.com</Link>
          
              <Link className={styles.mail} href="/contacto">es.info@julia_rl.com</Link>
           
          </ul>
        </article>
        <article className={styles.zona2Contactos}>
          <ul className={styles.zonaEnlaces}>
              <Link className={styles.enlace} href="/contacto">Política de privacidad</Link>
              <Link className={styles.enlace} href="/contacto">Aviso Legal</Link>
              <Link className={styles.enlace} href="/contacto">Política de Cookies</Link>
          </ul>
        </article>
      </footer>
    </>
  )
}
