import * as React from 'react';
import { SVGProps } from 'react';

export const House = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={34}
    fill='none'
    {...props}
  >
    <path
      fill='#1C1C1E'
      d='M12.973.783.95 12.826V25a1.999 1.999 0 0 0 2.004 2h7.014V16.997h6.012V27h7.014a2.006 2.006 0 0 0 2.004-2V12.756L12.973.783Z'
    />
  </svg>
);

