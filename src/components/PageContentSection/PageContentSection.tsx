import * as React from 'react';

import styles from './PageContentSection.module.css';


export type PageContentSectionProps = {
  title: string,
} & React.PropsWithChildren;

export function PageContentSection({ title, children }: PageContentSectionProps) {
  return(
    <div className={styles['page-content-section']}>
      <div className={styles['section-container']}>
        <div className={styles['section-title']}>{title}</div>
      </div>
      <div className={styles['children-container']}>
        {children}
      </div>
    </div>
  );
}