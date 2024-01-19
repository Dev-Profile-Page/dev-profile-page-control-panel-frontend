import * as React from 'react';

import classNames from 'classnames';

import commonStyles from './CommonInput.module.css';
import styles from './FileInput.module.css';

import { Autofill } from '../Autofill/Autofill';
import { UseControllerProps } from 'react-hook-form';
import { PageContentsFormContext, PageContentsFormValues } from '../../pages/PageContents/PageContents';

export type TextInputProps = {
  label: string,
  placeHolder: string,
} & UseControllerProps<PageContentsFormValues>;

export const FileInput = React.forwardRef<HTMLInputElement, TextInputProps>((_props, ref ) => {
  const { label, placeHolder, ...props } = _props;
  const id = React.useId();
  const { register, setValue, formState, trigger } = React.useContext(PageContentsFormContext);

  const className = classNames(commonStyles['input-wrapper'], styles['file-input-wrapper'])

  const errorObj = formState.errors[props.name];

  return (
    <div className={commonStyles['input']}>
      <label htmlFor={id} className={commonStyles['input-label']}>{label}</label>
      <div className={className}>
        <label htmlFor={id} className={styles['file-input-proxy']}>Pick a new file or autofil</label>
        <input
          {...register(props.name)}
          ref={ref}
          onChange={(e) => {
            if(e.target.files) {
              const fileReader = new FileReader();
              fileReader.readAsBinaryString(e.target.files[0]);
              fileReader.onload = function() {
                const file = btoa(typeof fileReader.result === 'string' ? fileReader.result: '');
                setValue(props.name, file);
                trigger(props.name);
              }
            }
          }}
          id={id}
          type='file'
          className={styles['file-input']}
          placeholder={placeHolder}
        />

        {
          errorObj
          ? <small className={`danger-text ${commonStyles['error-text']}`}>{errorObj?.message}</small>
          : null
        }
        <div className={commonStyles['input-suffix']}>
          <Autofill />
        </div>
      </div>
    </div>
  )
})