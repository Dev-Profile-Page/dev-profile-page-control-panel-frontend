import * as React from 'react';

import styles from './Dashboard.module.css';
import { Container } from '../../components/Container/Container';
import { DashboardStats } from '../../components/DashboardStats/DashboardStats';

export type DashboardProps = {

};

export function Dashboard({}: DashboardProps) {
    return (
        <div className={styles.page}>
            <div className={styles['page-title-container']}>
                <h1>Dashboard</h1>
            </div>
            <div className={styles['welcome-msg']}>
                Hey <span className={styles['user-name']}>DJ Hemath</span>,
            </div>

            <Container>
                <DashboardStats />
            </Container>
        </div>
    )
}