import React from "react";
import "./Text.css";

function Text({ content, type, className, onClick, disabled, htmlFor, pointer }) {
  const combinedClassName = `${className} ${type.toLowerCase()} ${disabled ? "disabled" : ""
    }`;
  return (
    <>
      {
        pointer ? (
          <label
            htmlFor={htmlFor}
            className={`${type} ${combinedClassName} pointer`}
            onClick={onClick}
          >
            {content}
          </label>
        ) : (
          <label
            htmlFor={htmlFor}
            className={`${type} ${combinedClassName}`}
            onClick={onClick}
          >
            {content}
          </label>
        )
      }
    </>
  );
}

Text.defaultProps = {
  type: "subtitle2",
  disabled: false,
};

export default Text;
