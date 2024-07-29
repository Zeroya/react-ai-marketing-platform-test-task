import * as yup from 'yup';
import {errorMessages} from '../../../../../helpers/yupMessages';
import {DimensionEnum} from '../../../../../enums/dimension.enum';
import {GenTypeEnum} from '../../../../../enums/gen-type.enum';

export const schema = yup.object().shape({
  id: yup.number(),
  task_name: yup.string().required(errorMessages.requiredField),
  dimension: yup.mixed<DimensionEnum>().oneOf(Object.values(DimensionEnum)).required(errorMessages.requiredField),
  template_id: yup.string().required(errorMessages.requiredField),
  image_layers: yup.array().of(yup.string()).min(1, errorMessages.requiredField).required(errorMessages.requiredField),
  text_layers: yup.array().of(yup.string()).min(1, errorMessages.requiredField).required(errorMessages.requiredField),
  amount: yup.number().min(1, errorMessages.requiredField).required(errorMessages.requiredField),
  gen_type: yup.mixed<GenTypeEnum>().oneOf(Object.values(GenTypeEnum)).required(errorMessages.requiredField)
});
