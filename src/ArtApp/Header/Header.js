import styles from './header.module.scss'

function Header() {
  return <div className={styles.header}>
    <div className={styles.pad}>ArtApp</div>
    <div className={styles.pad}>Header</div>
  </div>;
}
export default Header;
