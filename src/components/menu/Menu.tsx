import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import styles from './Menu.module.css';

type AvailableThemes = 'dark' | 'light';

export function Menu() {

  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
    return storageTheme
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  };

  function handleThemeChange(evento: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    evento.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';

      return nextTheme;
    })
  }

  useEffect(() => {
    console.log('theme mudou dark', Date.now())
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);


  return (
    <>
      <nav className={styles.Menu}>
        <h1>{theme}</h1>
        <a href="#" className={styles.MenuLink} aria-label="Ir para a Home" title="Ir para a Home">
          <HouseIcon></HouseIcon>
        </a>
        <a href="#" className={styles.MenuLink} aria-label="Ver histórico" title="Ver histórico">
          <HistoryIcon></HistoryIcon>
        </a>
        <a href="#" className={styles.MenuLink} aria-label="Configuracoes" title="Configuracoes">
          <SettingsIcon></SettingsIcon>
        </a>
        <a href="http://google.com" onClick={handleThemeChange} className={styles.MenuLink} aria-label="Mudar Tema" title="Mudar Tema">
          {nextThemeIcon[theme]}
        </a>
      </nav>
    </>
  )
}
