import type React from "react";
import styles from './container.module.css';

type ContainerProsp = {
  children: React.ReactNode
}

export function Container({ children }: ContainerProsp) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </>
  );
}