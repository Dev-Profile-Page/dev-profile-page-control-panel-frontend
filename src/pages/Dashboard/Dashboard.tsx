import * as React from 'react';

import styles from './Dashboard.module.css';
import { Container } from '../../components/Container/Container';
import { DashboardStats } from '../../components/DashboardStats/DashboardStats';
import { Layout } from '../../layouts/Layout';

export type DashboardProps = {

};

export function Dashboard({}: DashboardProps) {
    return (
        <Layout isLogoCenter>
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
        </Layout>
    )
}