import {FC, useState} from 'react';
import {GridRenderCellParams} from '@mui/x-data-grid';
import {generateFormat} from '../../../../pages/task-table/api';
import CustomizedSnackbars from '../../../CustomizedSnackbars/CustomizedSnackbars';
import {SeverityEnum} from '../../../../../enums/severity.enum';
import {errorMessages, yupMessages} from '../../../../../helpers/yupMessages';

const GenerateButton: FC<GridRenderCellParams & {disabled?: boolean}> = (params) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: SeverityEnum.Error
  });
  const handleClick = async () => {
    try {
      await generateFormat(params.row);
      setSnackbar({
        open: true,
        message: yupMessages.itemCreated('Task'),
        severity: SeverityEnum.Success
      });
    } catch {
      setSnackbar({
        open: true,
        message: errorMessages.systemError,
        severity: SeverityEnum.Error
      });
    }
  };

  return (
    <>
      <button
        className={`px-2 py-1 text-sm font-medium rounded ${!params.disabled ? 'bg-yellow-300 hover:bg-yellow-500 text-black' : 'bg-[#84888a] text-white'}`}
        onClick={handleClick}
        disabled={params.disabled}>
        Generate
      </button>
      <div className="absolute bottom-0 left-0">
        <CustomizedSnackbars message={snackbar.message} severity={snackbar.severity} open={snackbar.open} onClose={() => setSnackbar((prev) => ({...prev, open: false}))} />
      </div>
    </>
  );
};

export default GenerateButton;
