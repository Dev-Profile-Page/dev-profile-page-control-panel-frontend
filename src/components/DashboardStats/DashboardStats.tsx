import * as React from 'react';

import styles from './DashboardStats.module.css';
import { Stat } from '../Stat/Stat';


export type DashboardStatsProps = {};

export function DashboardStats({  }: DashboardStatsProps) {
  return (
    <div className={styles['dashboard-stats']}>
      <Stat name='Views' value={512} color='blue' />
      <Stat name='Likes' value={2126} color='red' />
      <Stat name='Views (Today)' value={20} color='blue' />
      <Stat name='Likes (Today)' value={6} color='red' />
    </div>
  );
}