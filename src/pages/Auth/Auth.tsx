import * as React from 'react';

import styles from './Auth.module.css';

import { AuthButton } from '../../components/AuthButton/AuthButton';
import { Github, Stackoverflow, Twitter } from '../../components/Icons/Icons';

export function AuthPage() {
  return (
    <div className={styles['auth-page-container']}>
      <main className={styles['auth-page']}>
        <div className={styles['headline-container']}>
          <h1>Unlock your <span>&lt;developer /&gt;</span> profile</h1>
          <h3>Sign in now to showcase your developer profile and connect with coding community!</h3>
        </div>

        <div className={styles['auth-buttons']}>
          <AuthButton icon={Github} name='Github' id='GITHUB' onClick={(id: any) => console.log(id)} />
          <AuthButton icon={Stackoverflow} name='Stackoverflow' id='STACKOVERFLOW' onClick={(id: any) => console.log(id)} />
          <AuthButton icon={Twitter} name='Twitter' id='TWITTER' onClick={(id: any) => console.log(id)} />
        </div>

      </main>
      <footer>
        <h5>Let's <span>git init start</span></h5>
        <p>By signing up you accept our Terms and Conditions</p>
      </footer>
    </div>
  );
}