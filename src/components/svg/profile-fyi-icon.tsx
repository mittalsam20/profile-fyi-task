import React, { SVGProps } from 'react';

const ProfileFyiIcon = React.memo((props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_2"
    viewBox="0 0 21.41 28"
    height={36}
    width={36}
    {...props}
  >
    <defs>
      <style>{'.cls-2{stroke-width:0;fill:#fff}'}</style>
    </defs>
    <g id="Layer_1-2">
      <path
        d="M0 14c0 11.5 1.92 14 10.71 14 8.79 0 10.71-2.5 10.71-14C21.41 2.5 19.5 0 10.71 0 1.92 0 0 2.5 0 14Z"
        style={{
          strokeWidth: 0,
          fill: '#ff2422',
        }}
      />
      <circle cx={11.1} cy={5.35} r={2.46} className="cls-2" />
      <path
        d="M6.3 24.35h-.99v-9.42c0-3.23 2.6-5.92 5.83-5.9s5.75 2.59 5.76 5.76c.02 3.23-2.67 5.83-5.9 5.83H9.35v-.99c0-.92.74-1.66 1.66-1.66 1.82 0 3.2-1.35 3.24-3.07.04-1.79-1.42-3.25-3.21-3.21s-3.07 1.49-3.07 3.21v7.8c0 .92-.74 1.66-1.66 1.66Z"
        className="cls-2"
      />
    </g>
  </svg>
));

ProfileFyiIcon.displayName = 'ProfileFyiIcon';
export default ProfileFyiIcon;
