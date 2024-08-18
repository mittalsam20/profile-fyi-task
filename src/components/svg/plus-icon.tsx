import React, { SVGProps } from "react";

const PlusIcon = React.memo((props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-plus"
    {...props}
  >
    <path d="M5 12h14M12 5v14" />
  </svg>
));

PlusIcon.displayName = "PlusIcon";
export default PlusIcon;
