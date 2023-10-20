import * as React from 'react';

import styles from './Container.module.css';

export type ContainerProps = {  } & React.PropsWithChildren;

export function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      { children }
    </div>
  );
}