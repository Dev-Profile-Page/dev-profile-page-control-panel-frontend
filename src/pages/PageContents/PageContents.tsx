import * as React from 'react';

import styles from './PageContent.module.css';

export type PageContentsProps = {  };

export function PageContents({  }: PageContentsProps) {
  return (
    <div className={styles.page}>
      <div className={styles['page-title-container']}>
          <h1>Page Contents</h1>
      </div>

      
    </div>
  );
}