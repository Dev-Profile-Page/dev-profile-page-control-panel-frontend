import * as React from 'react';

import styles from './Stat.module.css';

export type StatProps = {
  name: string,
  value: number,
  color?: ('blue' | 'red')
};

export function Stat({ name, value, color='blue' }: StatProps) {
  let statColor = '';

  switch(color) {
    case 'blue':
      statColor = styles['stat-blue'];
      break;
    case 'red':
      statColor = styles['stat-red'];
      break;
    default:
      statColor = styles['stat-blue']
  }

  return (
    <div className={styles.stat}>
      <h2 className={statColor}>{value}</h2>
      <span>{name}</span>
    </div>
  );
}