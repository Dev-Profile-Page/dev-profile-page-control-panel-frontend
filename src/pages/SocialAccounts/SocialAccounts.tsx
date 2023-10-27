import * as React from 'react';

import styles from './SocialAccounts.module.css';
import { SocialAccountCard } from '../../components/SocialAccountCard/SocialAccountCard';
import { Github, Stackoverflow, Twitter } from '../../components/Icons/Icons';

export type SocialAccountsProps = {

};

export function SocialAccounts({}: SocialAccountsProps) {
    return (
        <div className={styles.page}>
            <div className={styles['page-title-container']}>
                <h1>Social Accounts</h1>
            </div>

            <div className={styles['social-account-cards-wrapper']}>
                <SocialAccountCard icon={Twitter} name='Twitter' isConnected={true} />
                <SocialAccountCard icon={Stackoverflow} name='Stackoverflow' isConnected={false} />
                <SocialAccountCard icon={Github} name='Github' isConnected={true} />
            </div>
        </div>
    )
}