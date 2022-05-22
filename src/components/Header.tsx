import styles from './Header.module.css';

type Props = {
  title: string;
};

export default function Header(props: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>{props.title}</div>
    </header>
  );
}
