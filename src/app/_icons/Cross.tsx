import React from "react";

const Cross = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon flat-line"
      data-name="Flat Line"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        cx={12}
        cy={12}
        r={9}
        style={{
          fill: "none",

          strokeWidth: 2,
        }}
      />
      <path
        d="M15 15 9 9"
        style={{
          fill: "none",
          stroke: "#10f",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
      <path
        d="m9 15 6-6"
        data-name="primary"
        style={{
          fill: "none",
          stroke: "#10f",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
      <circle
        cx={12}
        cy={12}
        r={9}
        data-name="primary"
        style={{
          fill: "none",
          stroke: "#10f",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
    </svg>
  );
};

export default Cross;
