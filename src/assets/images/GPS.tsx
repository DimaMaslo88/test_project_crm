import * as React from 'react';
import { SVGProps } from 'react';

export const GPS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={34}
    fill='none'
    {...props}
  >
    <path
      fill='#1C1C1E'
      d='M12.442 32a52.929 52.929 0 0 1-6.221-6.276C3.377 22.327 0 17.269 0 12.448a12.442 12.442 0 0 1 21.244-8.8 12.364 12.364 0 0 1 3.64 8.8c0 4.82-3.377 9.88-6.221 13.276A52.93 52.93 0 0 1 12.442 32Zm0-24.884a5.332 5.332 0 1 0 0 10.665 5.332 5.332 0 0 0 0-10.665Z'
    />
  </svg>
);
