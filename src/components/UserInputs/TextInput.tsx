import * as React from 'react';

import commonStyles from './CommonInput.module.css';

import { Autofill } from '../Autofill/Autofill';
import { UseControllerProps, useController } from 'react-hook-form';
import { PageContentsFormValues } from '../../pages/PageContents/PageContents';

export type TextInputProps = {
  label: string,
  placeHolder: string,
} & UseControllerProps<PageContentsFormValues>;

export function TextInput({ label, placeHolder, ...props }: TextInputProps) {
  const id = React.useId();
  const { field, fieldState } = useController(props);

  return (
    <div className={commonStyles['input']}>
      <label htmlFor={id} className={commonStyles['input-label']}>{label}</label>
      <div className={commonStyles['input-wrapper']} data-invalid={fieldState.invalid}>
        <input {...field} id={id} type='text' placeholder={placeHolder} />
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