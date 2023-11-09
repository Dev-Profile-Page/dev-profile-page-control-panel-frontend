import * as React from 'react';

import styles from './PageContentSection.module.css';


export type PageContentSectionProps = {
  title: string,
  subtitle?: string,
} & React.PropsWithChildren;

export function PageContentSection({ title, subtitle, children }: PageContentSectionProps) {
  return(
    <div className={styles['page-content-section']}>
      <div className={styles['section-container']}>
        <div className={styles['section-title']}>{title}</div>
        {
          Boolean(subtitle)
            ?
              <span>{subtitle}</span>
            :
              null
        }
      </div>
      <div className={styles['children-container']}>
        {children}
      </div>
    </div>
  );
}