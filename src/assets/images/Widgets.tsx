import * as React from 'react';
import { SVGProps } from 'react';

export const Widgets = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={30}
    fill='none'
    {...props}
  >
    <path
      fill='#1C1C1E'
      d='M28.8 5.945h-8.938l3.67-3.677L21.268 0 16 5.28 10.731 0 8.47 2.268l3.669 3.677H3.2A3.207 3.207 0 0 0 0 9.152v17.64A3.207 3.207 0 0 0 3.2 30h25.6c1.765 0 3.2-1.439 3.2-3.207V9.153a3.207 3.207 0 0 0-3.2-3.208ZM3.2 26.793V9.153h25.6l.003 17.64H3.2Z'
    />
  </svg>
);

