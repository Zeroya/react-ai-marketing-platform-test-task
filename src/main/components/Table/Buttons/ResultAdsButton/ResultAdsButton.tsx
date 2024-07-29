import {FC} from 'react';
import {GridRenderCellParams} from '@mui/x-data-grid';

const ResultAdsButton: FC<GridRenderCellParams> = (params) => {
  const handleClick = async () => {
    const {task_name, dimension} = params.row;
    const url = `https://testapi-jvqis72guq-lm.a.run.app/test_vidro/${task_name}_${dimension}/format_validation`;
    window.open(url, '_blank');
  };

  return (
    <>
      <button className="bg-green-300 hover:bg-green-500 text-black px-2 py-1 text-sm font-medium rounded" onClick={handleClick}>
        Folder
      </button>
    </>
  );
};

export default ResultAdsButton;
