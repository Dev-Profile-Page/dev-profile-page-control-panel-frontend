import * as React from 'react';
import { Popover } from 'react-tiny-popover';
import { Github, Pencil, Stackoverflow, Twitter } from '../Icons/Icons';
import { SocialAccount, SocialAccountsSelector } from '../SocialAccountsSelector/SocialAccountsSelector';

export type AutofillProps = {  };

const socialAccounts: SocialAccount[] = [
  {
    id: 'TWITTER',
    icon: Twitter,
    onClick: (id: any) => console.log(id),
  },
  {
    id: 'STACKOVERFLOW',
    icon: Stackoverflow,
    onClick: (id: any) => console.log(id),
  },
  {
    id: 'GITHUB',
    icon: Github,
    onClick: (id: any) => console.log(id),
  }
];

export function Autofill({ }: AutofillProps) {
  const [ isOpen, setIsOpen ] = React.useState(false);

  return (
    <div
      onClick={() => setIsOpen(true)}
    >
      <Popover
        isOpen={isOpen}
        content={<SocialAccountsSelector socialAccounts={socialAccounts} />}
        positions={['bottom', 'right']}
        align='end'
        clickOutsideCapture={true}
        onClickOutside={() => setIsOpen(false)}
      >
        <div
          style={{
              width: 35,
              height: 35,
              borderRadius: '50%',
              backgroundColor: '#C4C4C4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
          }}
        >
          <Pencil />
        </div>
      </Popover>
    </div>
  );
}