import {FC, ReactNode} from 'react';
import {Controller} from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';
import {TextField} from '@mui/material';
import {FormListItemInterface} from '../../../../interfaces/form-list-item.interface';

const SelectInput: FC<FormListItemInterface> = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({field: {onChange, value, ...field}}) => (
        <TextField
          {...field}
          value={value === null ? '' : value}
          onChange={(event) => {
            props.changeEvent && props.changeEvent(event.target.value);
            onChange(event.target.value);
          }}
          disabled={props.canUpdate}
          className="w-full"
          label={props.label}
          FormHelperTextProps={{
            style: {
              position: 'absolute',
              left: 0,
              bottom: '-1.1rem'
            }
          }}
          select
          error={!!props.errorName}
          placeholder={props.placeholder || 'Write here...'}
          helperText={props?.errorName?.message as ReactNode}
          size={props.size ? (props.size as any) : 'small'}
          SelectProps={{MenuProps: {PaperProps: {style: {maxHeight: 350}}}}}>
          {props.withEmptyOption && (
            <MenuItem value="">
              <em>-</em>
            </MenuItem>
          )}
          {props.options?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default SelectInput;
