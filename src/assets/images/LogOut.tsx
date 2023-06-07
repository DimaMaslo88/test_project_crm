import * as React from 'react';
import { SVGProps } from 'react';

export const LogOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={32}
    fill='none'
    {...props}
  >
    <path
      fill='#000'
      fillRule='evenodd'
      d='M2.461 0A2.461 2.461 0 0 0 0 2.462v27.076A2.461 2.461 0 0 0 2.461 32h18.46a1.23 1.23 0 0 0 0-2.462H2.462V2.462h18.46a1.23 1.23 0 0 0 0-2.462H2.462Zm23.64 9.59a1.232 1.232 0 0 0-1.743 1.743l3.438 3.436h-16.72a1.23 1.23 0 0 0 0 2.462h16.72l-3.438 3.436A1.232 1.232 0 0 0 26.1 22.41l5.538-5.539a1.229 1.229 0 0 0 0-1.742L26.1 9.59Z'
      clipRule='evenodd'
    />
  </svg>
);

