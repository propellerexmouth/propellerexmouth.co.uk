import React from "react";

interface EmailIconAttributes {
  className?: string;
}

export const EmailIcon: React.FC<EmailIconAttributes> = ({ className = "" }: EmailIconAttributes) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={23} height={18} fill="#ffffff" className={className}>
    <path
      fill="#fff"
      d="M21.467.5H1.533C.69.5 0 1.195 0 2.045v13.91c0 .85.69 1.545 1.533 1.545h19.934c.843 0 1.533-.695 1.533-1.546V2.045C23 1.195 22.31.5 21.467.5Zm-1.274 1.545L12.42 9.226c-.467.413-.64.547-.92.547s-.453-.134-.92-.547l-7.773-7.18h17.386Zm-18.66 13.91V2.964l8.035 7.423c.518.458 1.053.93 1.932.93.88 0 1.415-.472 1.932-.93l8.035-7.424v12.99H1.533Z"
    />
  </svg>
);
