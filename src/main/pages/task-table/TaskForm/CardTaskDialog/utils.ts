import * as yup from 'yup';
import {DimensionEnum} from '../../../../../enums/dimension.enum';
import {StyleTaskEnum} from '../../../../../enums/style-task.enum';

export const schema = yup.object().shape({
  task_name: yup.string().required('Task name is required'),
  image_layers: yup.array().of(
    yup.object().shape({
      images: yup.array().of(yup.string()).required('Images are required'),
      dimension: yup.mixed<DimensionEnum>().oneOf(Object.values(DimensionEnum)).required('Dimension is required'),
      style: yup.mixed<StyleTaskEnum>().oneOf(Object.values(StyleTaskEnum)).required('Style is required'),
      manual_prompts: yup.string(),
      gen_per_ref: yup.number().required('Generates per ref is required').min(1, 'Must be at least 1'),
      flow: yup.string().required('Flow is required')
    })
  )
});
