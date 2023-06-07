import * as React from 'react';
import { SVGProps } from 'react';

export const Avatar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={28} height={28}
       fill='currentColor' {...props}
  >
    <title>user-circle-o</title>
    <path
      d='M14 0c7.734 0 14 6.266 14 14 0 7.688-6.234 14-14 14-7.75 0-14-6.297-14-14C0 6.266 6.266 0 14 0zm9.672 21.109C25.125 19.109 26 16.656 26 14c0-6.609-5.391-12-12-12S2 7.391 2 14c0 2.656.875 5.109 2.328 7.109C4.89 18.312 6.25 16 9.109 16a6.979 6.979 0 0 0 9.782 0c2.859 0 4.219 2.312 4.781 5.109zM20 11c0-3.313-2.688-6-6-6s-6 2.688-6 6 2.688 6 6 6 6-2.688 6-6z' />
  </svg>
);

