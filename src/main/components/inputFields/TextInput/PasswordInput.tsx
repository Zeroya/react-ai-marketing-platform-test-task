import {FC, useState} from 'react';
import {Controller} from 'react-hook-form';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import {TextField} from '@mui/material';

import {FormListItemInterface} from 'src/app/interfaces/interfaces';

const PasswordInput: FC<FormListItemInterface> = (props) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const togglePasswordVisibility = () => setPasswordVisibility((show) => !show);
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({field}) => (
        <TextField
          {...field}
          {...(props.multiline && {multiline: true})}
          className="w-full"
          label={props.label}
          disabled={props.canUpdate}
          FormHelperTextProps={{
            style: {
              position: 'absolute',
              left: 0,
              bottom: '-2rem'
            }
          }}
          placeholder={props.placeholder || 'Write here...'}
          type={passwordVisibility ? 'password' : 'text'}
          error={!!props.errorName}
          helperText={props?.errorName?.message}
          autoComplete="off"
          variant="standard"
          InputProps={{
            sx: {
              height: props.height ? `${props.height}px` : 'auto',
              '&:hover .MuiInput-underline:before': {
                borderBottomColor: 'rgb(193, 106, 222) !important'
              }
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={togglePasswordVisibility} edge="end">
                  {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      )}
    />
  );
};

export default PasswordInput;
