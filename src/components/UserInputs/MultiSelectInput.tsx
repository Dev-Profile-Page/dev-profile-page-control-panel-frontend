import * as React from 'react';

import CreatableSelect from 'react-select/creatable';

import commonStyles from './CommonInput.module.css';
import styles from './MultiSelectInput.module.css';
import { MultiValue } from 'react-select';

export type MultiSelectOption = {
  readonly id: any,
  readonly label: string,
  readonly value: any,
  readonly icon?: React.ComponentType,
}

export type MultiSelectInputProps = {
  label: string,
  placeHolder: string,
  options: MultiSelectOption[],
};

export function MultiSelectInput({ label, placeHolder, options }: MultiSelectInputProps) {
  const id = React.useId();
  const [ selectedValues, setSelectedValues ] = React.useState<MultiValue<MultiSelectOption>>([]);

  console.log(selectedValues)

  const handleNewOption = (value: string) => {
    setSelectedValues(
      prevSelectedValues => [
        ...prevSelectedValues,
        {
          id: options.length + 1,
          label: value,
          value,
        },
      ]
    )
  }

  return (
    <div className={commonStyles['input']}>
      <label htmlFor={id} className={commonStyles['input-label']}>{label}</label>
      <div className={styles['input-wrapper']}>
        <CreatableSelect
          isClearable
          isMulti
          options={options}
          isSearchable
          placeholder={placeHolder}
          controlShouldRenderValue={false}
          onChange={(values: MultiValue<MultiSelectOption>) => setSelectedValues(values)}
          onCreateOption={handleNewOption}
          value={selectedValues}
          isDisabled={selectedValues.length >= 5}
          styles={{
            control: (baseStyles, { isDisabled }) => ({
              ...baseStyles,
              backgroundColor: isDisabled ? '#313131' : '#242424',
              borderColor: '#C4C4C4',
              borderWidth: 1,
              borderRadius: 10,
              height: '100%',
              minHeight: 50,
            }),
            container: (baseStyles, _) => ({
              ...baseStyles,
              height: '100%'
            }),
            input: (baseStyles, _) => ({
              ...baseStyles,
              color: '#FFFFFF',
            }),
            menu: (baseStyles, _) => ({
              ...baseStyles,
              backgroundColor: '#040404',
            }),
            multiValue: (baseStyles, _) => ({
              ...baseStyles,
              backgroundColor: '#040404'
            }),
            multiValueLabel: (baseStyles, _) => ({
              ...baseStyles,
              color: '#FFFFFF'
            }),
            multiValueRemove: (baseStyles, {isFocused}) => ({
              ...baseStyles,
              color: '#FF0000',
              backgroundColor: isFocused ? '#FF000011': '#040404'
            }),
            option: (baseStyles, {isFocused}) => ({
              ...baseStyles,
              backgroundColor: isFocused ? '#242424' : '#040404',
            }),
          }}
        />
      </div>

      <div className={styles['selected-options-container']}>
        {
          selectedValues.map(selectedValue => {
            return (
              <SelectedOption
                key={selectedValue.id}
                {...selectedValue}
                onClear={(id: any) => setSelectedValues(prevSelectedValues => prevSelectedValues.filter(value => value.id != id))}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export type SelectedOptionProps = { 
  onClear: (id: any) => void
 } & MultiSelectOption;

export function SelectedOption({ id, label, icon: Icon, onClear }: SelectedOptionProps) {
  return (
    <div className={styles['selection-option']}>
      <span>{label}</span>
      { Icon ? <Icon />: null }
      <span
        id={id}
        className={styles['selection-option-clear']}
        onClick={(e) => onClear((e.target as HTMLSpanElement).id)}
      >&#10006;</span>
    </div>
  );
}