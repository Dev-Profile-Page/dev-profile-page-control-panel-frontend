import * as React from 'react';

import TextareaAutosize from 'react-textarea-autosize';

import commonStyles from './CommonInput.module.css';

import { Autofill } from '../Autofill/Autofill';

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
          <Autofill />
        </div>
      </div>
    </div>
  );
}