import * as React from 'react';

import commonStyles from './CommonInput.module.css';
import { Pencil } from '../Icons/Icons';

export type TextInputProps = {
  label: string,
  placeHolder: string,
};

export function TextInput({ label, placeHolder }: TextInputProps) {
  const id = React.useId();

  return (
    <div className={commonStyles['input']}>
      <label htmlFor={id} className={commonStyles['input-label']}>{label}</label>
      <div className={commonStyles['input-wrapper']}>
        <input id={id} type='text' placeholder={placeHolder} />
        <div className={commonStyles['input-suffix']}>
          <div style={{
            width: 35,
            height: 35,
            borderRadius: '50%',
            backgroundColor: '#C4C4C4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}>
            <Pencil />
          </div>
        </div>
      </div>
    </div>
  );
}