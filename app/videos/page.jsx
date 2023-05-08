import styles from "../videos/videos.module.css";

function Videos() {
  return (
    <main className={styles.lamina}>
      <section  className={styles.seccion}>
      
        <div className={styles.h1}>
          <h1 className={styles.titulo}>
            Videos
          </h1>
            
          <div className={styles.seccion}>
            <div className={styles.partes}>
            <iframe className={styles.bordeVideo} width="840" height="472.5" src="https://www.youtube.com/embed/zqQcSAXy1VY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <iframe className={styles.bordeVideo} width="840" height="472.5" src="https://www.youtube.com/embed/1Z4y9bGA_2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <iframe className={styles.bordeVideo} width="840" height="472.5" src="https://www.youtube.com/embed/ib1V_Z9sjHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Videos
