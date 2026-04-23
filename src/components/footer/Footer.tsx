import styles from './Footer.module.css';

export function Footer() {

  return (
    <>
      <footer className={styles.footer}>
        <a href="">Entenda como funcion a tenica pomodora</a>
        <a href="">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚</a>
      </footer>
    </>
  );
};
