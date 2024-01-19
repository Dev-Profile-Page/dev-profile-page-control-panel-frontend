import * as React from 'react';

import TextareaAutosize from 'react-textarea-autosize';

import commonStyles from './CommonInput.module.css';

import { Autofill } from '../Autofill/Autofill';
import { UseControllerProps, useController } from 'react-hook-form';
import { PageContentsFormValues } from '../../pages/PageContents/PageContents';

export type TextAreaInputProps = {
  label: string,
  placeHolder: string,
} & UseControllerProps<PageContentsFormValues>;

export function TextAreaInput({ label, placeHolder, ...props }: TextAreaInputProps) {
  const id = React.useId();
  const { field, fieldState } = useController(props);

  return (
    <div className={commonStyles['input']}>
      <label htmlFor={id} className={commonStyles['input-label']}>{label}</label>
      <div className={commonStyles['input-textarea-wrapper']}>
        <TextareaAutosize {...field} id={id} placeholder={placeHolder} minRows={10} maxRows={20} />
        {
          fieldState.invalid
          ? <small className={`danger-text ${commonStyles['error-text']}`}>{fieldState.error?.message}</small>
          : null
        }
        <div className={commonStyles['input-suffix']}>
          <Autofill />
        </div>
      </div>
    </div>
  );
}