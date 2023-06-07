import * as React from 'react';
import { SVGProps } from 'react';

export const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={12}
    fill='none'
    {...props}
  >
    <path
      fill='#A8A8A8'
      d='M6.067.75a.5.5 0 0 1 .866 0l5.63 9.75a.5.5 0 0 1-.434.75H.871a.5.5 0 0 1-.433-.75L6.067.75Z'
    />
  </svg>
);


