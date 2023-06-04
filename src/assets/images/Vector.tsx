import * as React from 'react';
import { SVGProps } from 'react';

export const Vector = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={48}
    height={48}
    fill='none'
    {...props}
  >
    <path
      fill='#fff'
      d='M39.364.772c-4.616-1.66-9.98-.643-13.678 3.056-3.698 3.699-4.716 9.062-3.056 13.678L0 40.136 7.864 48l22.63-22.63c4.616 1.66 9.98.642 13.678-3.056 3.699-3.699 4.717-9.062 3.056-13.678l-7.958 7.958L33.6 14.4 31.406 8.73 39.364.772ZM9.447 38.552a2.31 2.31 0 1 1-3.268 3.269 2.31 2.31 0 0 1 3.268-3.268Z'
    />
  </svg>
);

