import * as React from 'react';

export type DividerProps = {
  width?: string | number,
};

export function Divider({
  width = '90%'
}: DividerProps) {
  return (
    <div style={{
      height: 1,
      backgroundColor: 'var(--white)',
      width,
      margin: '35px auto'
    }}></div>
  );
}