import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <img src="toDo-logo.png" alt="Logo" />
    </div>
  );
}
