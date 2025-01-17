import * as React from 'react';
import styles from './DiagramSvg.module.css';

export default function DiagramSvg() {
  return (
    <>
      <svg
        className={styles.diagramsvg}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 4.2H3V14H0V4.2ZM5.6 0H8.4V14H5.6V0ZM11.2 8H14V14H11.2V8Z"
          //   fill="#52555F"
        />
      </svg>
    </>
  );
}
