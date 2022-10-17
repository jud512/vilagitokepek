import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <h3>Elérhetőség</h3>
      <p className={styles.address}>Cím:</p>
      <p className={styles.googleMap}>
        <iframe className={styles.googleMapIframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86464.72312580161!2d18.82809299039161!3d47.37247742585239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741e156913963c9%3A0x2a0f3b8c87bacb1e!2zw4lyZA!5e0!3m2!1shu!2shu!4v1665567727230!5m2!1shu!2shu" style={{ border:"0", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade" }}></iframe>
      </p>
      
      <p className={styles.judyProjects}>&copy;&nbsp;<a href="https://judyprojects.hu" target='_blank'>JudyProjects</a>, {new Date().getFullYear()}</p> 
    </footer>
  )
}

export default Footer;