import {FC, ReactElement} from 'react';

const PlussIcon: FC<{fill: string; size: number; icon?: ReactElement; disabled?: boolean}> = ({fill, size}) => (
  <div style={{width: `${size}px`, height: `${size}px`}}>
    <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 76">
      <g>
        <path d="M37.9889 7.91667C21.3836 7.91667 7.92221 21.378 7.92221 37.9834 7.92221 54.5887 21.3836 68.0501 37.9889 68.0501 54.5943 68.0501 68.0556 54.5887 68.0556 37.9834 68.0556 37.9823 68.0556 37.9812 68.0556 37.9802 68.0613 21.3823 54.6106 7.92237 38.0127 7.91667 38.0048 7.91666 37.9968 7.91666 37.9889 7.91667ZM52.729 40.66 40.6655 40.66 40.6655 52.7203 35.3123 52.7203 35.3123 40.6568 23.2489 40.6568 23.2489 35.3036 35.3123 35.3036 35.3123 23.2402 40.6655 23.2402 40.6655 35.3036 52.729 35.3036Z" />
      </g>
    </svg>
  </div>
);

export default PlussIcon;
