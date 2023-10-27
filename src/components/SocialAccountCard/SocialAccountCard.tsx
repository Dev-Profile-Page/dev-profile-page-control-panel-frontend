import * as React from 'react';

import styles from './SocialAccountCard.module.css';
import { RoundedButton, RoundedButtonColor, RoundedButtonSize } from '../Buttons/RoudedButton';

export type SocialAccountCardProps = {
  name: string,
  icon: React.ComponentType,
  isConnected?: boolean,
};

export function SocialAccountCard({ name, icon: Icon, isConnected = false }: SocialAccountCardProps) {
  const backgroundColor = isConnected ? RoundedButtonColor.GREEN: RoundedButtonColor.GREY;
  const text = isConnected ? 'Connected': 'Not connected';

  return (
    <div className={styles['social-account-card']}>
      <Icon />

      <div className={styles['social-account-name-container']}>
        <span>{ name }</span>
      </div>

      <RoundedButton backgroundColor={ backgroundColor } size={ RoundedButtonSize.SMALL }>
        { text }
      </RoundedButton>

    </div>
  );
}