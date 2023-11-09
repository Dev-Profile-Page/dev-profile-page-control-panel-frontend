// Inspired from Flutter

import * as React from 'react';

export type SizedBoxProps = {
  width: number | string,
  height: number | string,
};

export function SizedBox({ width, height }: SizedBoxProps) {
  return (
    <div style={{ width, height }}></div>
  );
}