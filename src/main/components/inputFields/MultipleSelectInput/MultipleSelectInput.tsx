import {FC} from 'react';
import {Controller, DeepMap, FieldError, FieldValues, Control} from 'react-hook-form';
import {Chip, Autocomplete, TextField} from '@mui/material';
import {SelectOptionInterface} from '../../../../interfaces/select-option.interface';

type Props = {
  control: Control<FieldValues> | any;
  errorName: DeepMap<FieldValues, FieldError> | any;
  name: string;
  label: string;
  canUpdate?: boolean;
  options: SelectOptionInterface[];
  onChange: (value: number[] | string[]) => void;
  getValues?: (payload?: string | string[]) => any;
};

const MultipleSelectInput: FC<Props> = (props) => {
  const correctOptionsForm = (value: string[]) => {
    return props.options?.filter((option) => value?.includes(option.value));
  };

  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({field: {onChange, value}}) => (
        <Autocomplete
          multiple
          id="autocomplete-multiple"
          disableCloseOnSelect
          disabled={props.canUpdate}
          disablePortal
          ListboxProps={{style: {maxHeight: 150}}}
          value={value === null ? [] : correctOptionsForm(value)}
          options={props.options}
          getOptionLabel={(option) => {
            return option.label;
          }}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          onChange={(_, values) => {
            props.onChange(values.map((value) => value.value));
            onChange(values.map((value) => value.value));
          }}
          renderTags={(value, getTagProps) => value.map((option, index) => <Chip label={option.label} {...getTagProps({index})} />)}
          renderInput={(params) => (
            <TextField key={props.name} {...params} variant="standard" label={props.label} placeholder="Search..." helperText={props.errorName?.message} error={!!props.errorName} />
          )}
        />
      )}
    />
  );
};

export default MultipleSelectInput;
