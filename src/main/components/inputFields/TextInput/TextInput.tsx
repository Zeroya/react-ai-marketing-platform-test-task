import {FC} from 'react';
import {Controller} from 'react-hook-form';
import {FormListItemInterface} from '../../../../interfaces/form-list-item.interface';
import {TextField, InputAdornment} from '@mui/material';
import {TextFieldProps} from '@mui/material';

const TextInput: FC<FormListItemInterface & TextFieldProps> = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={props.controlRules}
      render={({field}) => (
        <TextField
          {...field}
          {...(props.multiline && {multiline: true})}
          className="w-full"
          label={props.label}
          margin="dense"
          disabled={props.canUpdate}
          defaultValue={props.defaultValue}
          size="small"
          FormHelperTextProps={{
            style: {
              position: 'absolute',
              left: 0,
              bottom: '-1.2rem'
            }
          }}
          placeholder={props.placeholder || 'Write here...'}
          type={!props?.type ? 'text' : props?.type}
          error={!!props.errorName}
          helperText={props?.errorName?.message}
          autoComplete="off"
          required={props.required}
          InputProps={{
            startAdornment: props.prefix ? <InputAdornment position="start">{props.prefix}</InputAdornment> : null,
            endAdornment: props.type !== 'number' && props.suffix ? <InputAdornment position="end">{props.suffix}</InputAdornment> : null,
            onChange: (e) => {
              const value = props.type === 'number' ? parseInt(e.target.value) : e.target.value;
              field.onChange(value);
            },
            inputProps: {
              min: 0
            }
          }}
        />
      )}
    />
  );
};

export default TextInput;
