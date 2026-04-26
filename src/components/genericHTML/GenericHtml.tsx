import type React from 'react';
import styles from './Generic.module.css';

type GenericHtmlPros = {
  children: React.ReactNode;
}

export function GenericHtml({ children }: GenericHtmlPros) {
  return <div className={styles.genericHtml}>
    {children}
  </div>
}