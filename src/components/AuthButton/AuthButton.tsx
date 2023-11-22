import * as React from 'react';

import styles from './AuthButton.module.css';

export type AuthButtonProps = {
  id: any,
  icon: React.ComponentType,
  name: string,
  onClick: (id: any) => void,
};

export function AuthButton({ icon: Icon, id, name, onClick }: AuthButtonProps) {
  return (
    <div className={styles['auth-button-card-container']} onClick={() => onClick(id)}>
      <div>
        <Icon />
        <span>
          Continue with <label htmlFor={id} className={styles['auth-button-name']}>{name}</label>
        </span>
      </div>
    </div>
  );
}