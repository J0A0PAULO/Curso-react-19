import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import styles from './Menu.module.css';

type AvailableThemes = 'dark' | 'light';

export function Menu() {

  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(evento: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    evento.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';

      return nextTheme;
    })
    // document.documentElement.setAttribute('data-theme', theme);
  }

  // useEffect(() => {
  //   console.log('useEffect sem depedencia', Date.now())
  // });

  // useEffect(() => {
  //   console.log('useEffect com array deps vazia', Date.now())
  // }, []);

  useEffect(() => {
    console.log('theme mudou dark', Date.now())
    document.documentElement.setAttribute('data-theme', theme);

    return () => {
      console.log('olha este componente sera atualizado');
    };
  }, [theme]); // Executa  apenas quando valor de theme muda


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
          <SunIcon></SunIcon>
        </a>
      </nav>
    </>
  )
}
