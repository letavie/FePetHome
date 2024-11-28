import React from 'react'
import './Headline.scss'

function Headline({ content, type, className, pointer }) {
  const combinedClassName = `${className} ${type.toLowerCase()}`;

  return (
    <>
      {
        pointer ? (
          <label htmlFor={`headline-content`} className={`${combinedClassName} pointer`}>
            {content}
          </label>
        ) : (
          <label htmlFor={`headline-content`} className={`${combinedClassName}`}>
            {content}
          </label>
        )
      }
    </>
  );
}

export default Headline;