import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from './Menu.module.css';

export function Menu() {
  return (
    <>
      <nav className={styles.Menu}>
        <a href="#" className={styles.MenuLink}>
          <HouseIcon></HouseIcon>
        </a>
        <a href="#" className={styles.MenuLink}>
          <HistoryIcon></HistoryIcon>
        </a>
        <a href="#" className={styles.MenuLink}>
          <SettingsIcon></SettingsIcon>
        </a>
        <a href="#" className={styles.MenuLink}>
          <SunIcon></SunIcon>
        </a>
      </nav>
    </>
  )
}
