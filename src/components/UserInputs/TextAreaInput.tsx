import * as React from 'react';

import TextareaAutosize from 'react-textarea-autosize';

import commonStyles from './CommonInput.module.css';
import styles from './TextInput.module.css';
import { Pencil } from '../Icons/Icons';
import classNames from 'classnames';

export type TextAreaInputProps = {
  label: string,
  placeHolder: string,
};

export function TextAreaInput({ label, placeHolder }: TextAreaInputProps) {
  const id = React.useId();

  return (
    <div className={commonStyles['input']}>
      <label htmlFor={id} className={commonStyles['input-label']}>{label}</label>
      <div className={commonStyles['input-textarea-wrapper']}>
        <TextareaAutosize id={id} placeholder={placeHolder} minRows={10} maxRows={20} />
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