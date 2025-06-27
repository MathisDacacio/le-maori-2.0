import styles from '@styles/MentionsLegales.module.css';

export default function MentionsLegales() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Mentions légales</h1>
  
        <h2 className={styles.subTitle}>Éditeur du site</h2>
        <p>
          La société: Le Maori 2.0<br />
          Forme sociale: SAS<br />
          Numéro Siren: 949894620 <br />
          Adresse du siège: 8 Rue Casimir Fournier, 59530 Le Quesnoy<br />
          Numéro TVA Intracommunautaire: FR 24949894620<br />
          Télephone: 0977052778<br />
          Email: <a href="mailto: lemaori2.0@gmail.com">lemaori2.0@gmail.com</a> 
        </p>
  
        <h2 className={styles.subTitle}>Responsable de la publication</h2>
        <p>
          Monsieur Anthony FONTAINE<br />
          Joignable aux mêmes coordonnées que l'éditeur.
        </p>

        <h2 className={styles.subTitle}>Réalisateur du site</h2>
        <p>
          Nom: Mathis DACACIO <br />
          Email: <a href="mailto: mathis.dacacio@gmail.com">mathis.dacacio@gmail.com</a>
        </p>
  
        <h2 className={styles.subTitle}>Hébergement</h2>
        <p>
          Vercel Inc.<br />
          340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
          Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
        </p>
  
        <h2 className={styles.subTitle}>Limitation de responsabilité</h2>
        <p>
          Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une lacune, une erreur ou ce qui semble être un dysfonctionnement, merci de bien vouloir le signaler par email en décrivant le problème de la manière la plus précise possible (page posant problème, action déclenchante, type d’ordinateur et de navigateur utilisé, etc.).
        </p>
      </div>
    );
  }
  