import * as React from 'react';

import styles from './ToggleInputCard.module.css';
import ReactSwitch from 'react-switch';

export type ToggleInputCardProps = {
  id: any,
  icon: React.ComponentType,
  name: string,
  isSelected: boolean,
  onChange: (id: any, isSelected: boolean) => void,
};

export function ToggleInputCard({ id, icon: Icon, name, isSelected, onChange }: ToggleInputCardProps) {
  return (
    <div className={styles['toggle-input-card-container']}>
      <div>
        <Icon />
        <label htmlFor={id} className={styles['toggle-input-name']}>{name}</label>
      </div>
      
      <ReactSwitch
        checked={isSelected}
        onChange={(checked, _, id) => onChange(id, checked)}
        id={id}
        onColor='#424242'
        offColor='#424242'
        onHandleColor='#0DC885'
        handleDiameter={25}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={18}
        width={48}
      />
    </div>
  );
}