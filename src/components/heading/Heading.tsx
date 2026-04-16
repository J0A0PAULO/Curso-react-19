import styles from './Heading.module.css';

type HeadingProps = {
  children: React.ReactNode;
}

export function Heading({ children }: HeadingProps) {
  console.log(styles);
  return (
    <>
      <h1 className={styles.hedding}>{children}</h1>
    </>
  );
};