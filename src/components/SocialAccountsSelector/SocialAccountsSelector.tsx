import * as React from 'react';

import styles from './SocialAccountsSelector.module.css';

export type SocialAccount = {
  id: any,
  icon: React.ComponentType,
  onClick: (id: any) => void,
};

export type SocialAccountsSelectorProps = {
  socialAccounts: SocialAccount[],
};

export function SocialAccountsSelector({ socialAccounts }: SocialAccountsSelectorProps) {
  return (
    <div className={styles['container']}>
      {
        socialAccounts.map(({ icon: Icon, onClick, id }) => (
          <div
            key={id}
            className={styles['social-icon-container']}
            onClick={() => onClick(id)}
          >
            <Icon />
          </div>
        ))
      }
    </div>
  );
}