import * as React from 'react';

import commonStyles from './CommonInput.module.css';

import { Autofill } from '../Autofill/Autofill';

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
          <Autofill />
        </div>
      </div>
    </div>
  );
}