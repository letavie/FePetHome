import React, { useState } from "react";
import "./BasicSelect.css";
import Text from "../Text/Text";

function BasicSelect({
  onChange,
  children,
  inherit,
  size,
  value,
  displayText,
  isDisabled,
  disabled,
  defaultValue,
}) {
  const combinedClass = `select-container ${inherit ? "inherit" : size}`;

  return (
    <>
      {/* used for unselect */}
      {isDisabled ? (
        <select
          name=""
          id=""
          value=""
          onChange={onChange}
          className={combinedClass}
          disabled={isDisabled}
        >
          <option value="" disabled>
            <Text content={displayText} type={"body2"} className={"italic"} />
          </option>
        </select>
      ) : // not allowed to select
      disabled ? (
        <select
          name=""
          id=""
          value={value ? value : ""}
          onChange={onChange}
          className={combinedClass}
          disabled={disabled}
        >
          <option value={value} disabled>
            <Text content={value} type={"body2"} className={"italic"} />
          </option>
        </select>
      ) : (
        <select
          name=""
          id=""
          value={value ? value : ""}
          onChange={onChange}
          className={combinedClass}
          defaultValue={defaultValue ? defaultValue : ""}
        >
          <option value="" disabled>
            <Text
              content={displayText ? `${displayText}` : `Please select one`}
              type={"body2"}
              className={"italic"}
            />
          </option>
          {children}
        </select>
      )}
    </>
  );
}

BasicSelect.defaultProps = {
  inherit: true,
  displayText: "Please select one",
};

export default BasicSelect;
