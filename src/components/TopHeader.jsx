import styles from './TopHeader.module.css';

const steps = [
    { label: "Details", number: 1 },
    { label: "Products", number: 2 },
    { label: "Design", number: 3 },
    { label: "Fundraising", number: 4 },
    { label: "Flash sale Settings", number: 5 },
  ];
  
  export default function TopHeader() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoYellow}>SPIRIT</span>HERO
          <span className={styles.logoSub}>CREATED BY A PTA DAD!</span>
        </div>
        <nav className={styles.actions}>
          <ol className={styles.steps}>
            {steps.map((step, idx) => (
              <li key={step.label} className={styles.step}>
                <span className={`${styles.stepCircle} ${idx === 2 ? styles.stepActive : ''}`}>
                  {step.number}
                </span>
                <span className={`${styles.stepLabel} ${idx === 2 ? styles.stepLabelActive : ''}`}>{step.label}</span>
                {idx < steps.length - 1 && <span className={styles.stepLine}></span>}
              </li>
            ))}
          </ol>
          <button className={`${styles.btn} ${styles.btnYellow}`}>Save and Exit</button>
          <button className={`${styles.btn} ${styles.btnWhite}`}>Back</button>
          <button className={`${styles.btn} ${styles.btnYellow}`}>Next</button>
        </nav>
      </header>
    );
  }