import {useRef} from 'react';
import {getRandomColor} from '../../../../../helpers/getRandomColor';
import {isDarkColor} from '../../../../../helpers/isDarkColor';

interface BorderedCellProps {
  value: string;
}

export const BorderedCell = ({value}: BorderedCellProps): JSX.Element => {
  const colorRef = useRef<string>(getRandomColor());
  const color = colorRef.current;
  const textColor = isDarkColor(color) ? 'text-white' : 'text-black';
  return (
    <div className="flex items-center h-full w-full">
      <div className={`flex items-center justify-center px-3 h-[2rem] w-fit rounded-xl ${textColor}`} style={{backgroundColor: color, borderColor: color}}>
        {value}
      </div>
    </div>
  );
};
