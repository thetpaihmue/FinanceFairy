import React from "react";

const LinkText = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="font-mono block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 text-base"
    >
      {children}
    </a>
  );
};

export default LinkText;
