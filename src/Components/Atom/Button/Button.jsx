import React from "react";
import "./Button.scss";
import PropTypes from "prop-types"; // Correct import
import { toast } from 'react-toastify';

function Button({
  className,
  iconLeft,
  iconRight,
  onlyIcon,
  type,
  variant,
  color,
  onClick,
  content,
  disabled,
}) {
  const getDarkenColor = (color) => {
    if (!color) return ""; // Handle the case when color is undefined

    const colorValue = color;
    const percent = -5;
    const num = parseInt(colorValue.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const B = ((num >> 8) & 0x00ff) + amt;
    const G = (num & 0x0000ff) + amt;
    const newColor = `#${(
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
      (G < 255 ? (G < 1 ? 0 : G) : 255)
    )
      .toString(16)
      .slice(1)}`;
    return newColor;
  };

  const btnStyles = {
    backgroundColor: color,
    "--btn-backgroundColor": getDarkenColor(color),
  };

  return (
    <>
      {
        disabled ? (
          onlyIcon ? (
            <button
              className={`only-btn-component button h-8 rounded-lg ${className} ${variant}`}
              style={btnStyles}
              onClick={onClick}
              type={type}
              disabled
            >
              {onlyIcon}
            </button>
          ) : (
            <button
              className={`btn-component button rounded-lg btn-diabled ${className} ${variant}`}
              style={btnStyles}
              onClick={onClick}
              type={type}
              disabled
            >
              <div className="btn-content">
                {iconLeft && (
                  <div className="icon w-6 h-6 relative">{iconLeft}</div>
                )}
                {content && (
                  <div className="btn-text text-content text-sm font-bold font-['Inter'] ">
                    {content}
                  </div>
                )}
                {iconRight && (
                  <div className="icon w-6 h-6 relative">{iconRight}</div>
                )}
              </div>
            </button>
          )
        ) : (
          onlyIcon ? (
            <button
              className={`only-btn-component button h-8 rounded-lg ${className} ${variant}`}
              style={btnStyles}
              onClick={onClick}
              type={type}
            >
              {onlyIcon}
            </button>
          ) : (
            <button
              className={`btn-component button rounded-lg ${className} ${variant}`}
              style={btnStyles}
              onClick={onClick}
              type={type}
            >
              <div className="btn-content">
                {iconLeft && (
                  <div className="icon w-6 h-6 relative">{iconLeft}</div>
                )}
                {content && (
                  <div className="btn-text text-content text-sm font-bold font-['Inter'] ">
                    {content}
                  </div>
                )}
                {iconRight && (
                  <div className="icon w-6 h-6 relative">{iconRight}</div>
                )}
              </div>
            </button>
          )
        )
      }
    </>
  );
}

Button.defaultProps = {
  variant: "filled",
  type: "button",
};

Button.propTypes = {
  onClick: PropTypes.func, // Correct PropTypes declaration
};

export default Button;
