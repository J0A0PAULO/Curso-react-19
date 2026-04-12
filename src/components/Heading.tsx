import React from 'react';
import styles from './Heading.module.css';

export const Heading: React.FC = ({ children }) => {
  console.log(styles);
  return (
    <>
      <h1 className={styles.azul}>{children}</h1>
    </>
  );
};