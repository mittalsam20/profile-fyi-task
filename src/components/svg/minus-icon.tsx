import React, { SVGProps } from "react";

const MinusIcon = React.memo((props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-minus"
    {...props}
  >
    <path d="M5 12h14" />
  </svg>
));

MinusIcon.displayName = "MinusIcon";
export default MinusIcon;
