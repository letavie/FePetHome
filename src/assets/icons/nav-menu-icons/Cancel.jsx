import React from "react";

export default function Cancel({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm130.1 117.9c65.4 65.4 70 165.5 20.7 235.6L150.5 105.2c70.2-49.4 170.2-44.7 235.6 20.7zM125.9 386.1c-65.4-65.4-70-165.5-20.7-235.6L361.5 406.8c-70.2 49.4-170.2 44.7-235.6-20.7z" />
    </svg>
  );
}
