import styles from './Menu.module.css';

export function Menu() {
  return (
    <>
      <div className={styles.menu}>
        <a href="#" className={styles.MenuLink}>
          <TimerIcon></TimerIcon>
          <span>Chronos</span>
        </a>
      </div>
    </>
  )
}