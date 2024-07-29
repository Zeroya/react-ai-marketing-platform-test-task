import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {SeverityEnum} from '../../../enums/severity.enum';

interface CustomizedSnackbarsProps {
  message: string;
  severity: SeverityEnum;
  open: boolean;
  onClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}

const CustomizedSnackbars: React.FC<CustomizedSnackbarsProps> = ({message, severity, open, onClose}) => {
  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} variant="filled" sx={{width: '100%'}}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomizedSnackbars;
