import styles from '@styles/CardMenu.module.css';

interface CardMenuProps {
  name: string;
  type: string;
}

export default function CardMenu({
  name,
  type,
}: CardMenuProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.type}>{type}</p>
    </div>
  );
}
