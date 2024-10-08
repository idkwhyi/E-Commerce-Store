import React from 'react';

const ArrowTop = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    id="arrow"
    style={{
      marginInline: '.2rem'
    }}
  >
    <path
      d="M17 10c-.3 0-.5-.1-.7-.3l-5-5c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l5 5c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"
      style={{
        fill: '#F8F9FA',
        stroke: '#F8F9FA',
        strokeWidth: '1px',
      }}
    ></path>
    <path
      d="M7 10c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-5 5c-.2.2-.4.3-.7.3z"
      style={{
        fill: '#F8F9FA',
        stroke: '#F8F9FA',
        strokeWidth: '1px',
      }}
    ></path>
    <path
      d="M12 21c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1s1 .4 1 1v16c0 .6-.4 1-1 1z"
      style={{
        fill: '#F8F9FA',
        stroke: '#F8F9FA',
        strokeWidth: '1px',
      }}
    ></path>
  </svg>
);

export default ArrowTop;
