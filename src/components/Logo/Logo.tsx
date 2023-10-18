import * as React from 'react';

import styles from './Logo.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <div>&lt;<span className={styles.green}>dev</span>&gt;</div>
      <span className={styles.blue}>Profile</span>
      <div>&lt;/<span className={styles.red}>page</span>&gt;</div>
    </div>
  );
}