import React, { SVGProps } from 'react';

const SearchIcon = React.memo((props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-search"
    {...props}
  >
    <circle cx={11} cy={11} r={8} />
    <path d="m21 21-4.3-4.3" />
  </svg>
));

SearchIcon.displayName = 'SearchIcon';
export default SearchIcon;
