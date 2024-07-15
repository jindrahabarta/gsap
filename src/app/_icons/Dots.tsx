import React from "react";

const Dots = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#10F"
      stroke="#10F"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M128 20a108 108 0 1 0 108 108A108.122 108.122 0 0 0 128 20Zm0 192a84 84 0 1 1 84-84 84.096 84.096 0 0 1-84 84Zm16-112a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm0 56a16 16 0 1 1-16-16 16 16 0 0 1 16 16Z" />
    </svg>
  );
};

export default Dots;
