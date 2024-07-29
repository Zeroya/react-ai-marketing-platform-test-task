import {Control, FieldError, FieldErrorsImpl, Merge, RegisterOptions} from 'react-hook-form';
import {SxProps} from '@mui/system';

export interface FormListItemInterface {
  name: string;
  label: string;
  control: Control<any>;
  options?: Array<any> | null;
  errorName?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | any;
  type?: string;
  withEmptyOption?: boolean;
  value?: any;
  multiline?: boolean;
  canUpdate?: boolean;
  height?: number;
  onBlur?: () => void;
  onChange?: () => void;
  changeEvent?: (changeEventValue: string) => void;
  suffix?: string | JSX.Element;
  prefix?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  controlRules?: RegisterOptions;
  size?: 'small' | 'medium' | 'large';
  sx?: SxProps;
}
