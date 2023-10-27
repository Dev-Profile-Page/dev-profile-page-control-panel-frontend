import * as React from 'react';

import styles from './RoundedButton.module.css';
import classNames from 'classnames';

// We can strictly limit colors to only colors of our application design
export enum RoundedButtonColor {
  GREEN,
  GREY,
};

export enum RoundedButtonSize {
  SMALL,
  MEDIUM,
};

export type RoundedButtonProps = {
  backgroundColor: RoundedButtonColor,
  size?: RoundedButtonSize,
} & React.PropsWithChildren;

export function RoundedButton({ children, backgroundColor, size=RoundedButtonSize.MEDIUM }: RoundedButtonProps) {

  const classes: any = {
    [styles['rounded-button']]: true,
  };

  switch (backgroundColor) {
    case RoundedButtonColor.GREEN:
      classes['green-bg'] = true;
      break;
    case RoundedButtonColor.GREY:
      classes['grey-bg'] = true;
      break;
  }

  switch (size) {
    case RoundedButtonSize.SMALL:
      classes[styles['rounded-button-small']] = true;
      break;
    case RoundedButtonSize.MEDIUM:
      classes[styles['rounded-button-medium']] = true;
      break;
  }

  return (
    <button className={classNames(classes)}>
      { children }
    </button>
  );
}