import * as React from 'react';

import classNames from 'classnames';

import commonStyles from './CommonInput.module.css';
import styles from './FileInput.module.css';

import { Autofill } from '../Autofill/Autofill';

export type TextInputProps = {
  label: string,
  placeHolder: string,
};

export function FileInput({ label, placeHolder }: TextInputProps) {
  const id = React.useId();

  const className = classNames(commonStyles['input-wrapper'], styles['file-input-wrapper'])

  return (
    <div className={commonStyles['input']}>
      <label htmlFor={id} className={commonStyles['input-label']}>{label}</label>
      <div className={className}>
        <label htmlFor={id} className={styles['file-input-proxy']}>Pick a new file or autofil</label>
        <input id={id} type='file' className={styles['file-input']} placeholder={placeHolder} />
        <div className={commonStyles['input-suffix']}>
          <Autofill />
        </div>
      </div>
    </div>
  );
}