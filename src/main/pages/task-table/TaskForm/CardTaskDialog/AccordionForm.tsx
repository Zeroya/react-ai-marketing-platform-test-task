import {FC} from 'react';
import {useFormContext} from 'react-hook-form';
import TextInput from '../../../../components/inputFields/TextInput/TextInput';
import SelectInput from '../../../../components/inputFields/SelectInput/SelectInput';
import {dimensionOptions, flowOptions, styleTaskOptions} from '../../../../../constants/selectPropData';
import {ImageGenerationRequest} from '../../../../../models/image-generation.model';

const AccordionForm: FC<{index: number; field: any; onGenerate: (image_name: string) => void; handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void}> = ({
  index,
  field,
  onGenerate,
  handleImageUpload
}) => {
  const {
    control,
    formState: {isValid, isSubmitting}
  } = useFormContext<ImageGenerationRequest>();

  return (
    <div key={field.id} className="mb-[0.2rem]">
      <div className="grid grid-cols-1 mb-[1.2rem]">
        <label htmlFor={`image-upload-${index}`} className="block mb-2 text-sm font-medium text-gray-700">
          Image refs
        </label>
        <input id={`image-upload-${index}`} type="file" multiple accept="image/*" onChange={(event) => handleImageUpload(event, index)} className="file-input" />
      </div>
      <div className="grid grid-cols-1 mb-[1.2rem]">
        <SelectInput name={`image_layers.${index}.dimension`} label="Dimension" control={control} options={dimensionOptions} />
      </div>
      <div className="grid grid-cols-1 mb-[1.2rem]">
        <SelectInput name={`image_layers.${index}.style`} label="Style" control={control} options={styleTaskOptions} />
      </div>
      <div className="grid grid-cols-1 mb-[0.5rem]">
        <SelectInput name={`image_layers.${index}.flow`} label="Flow" control={control} options={flowOptions} />
      </div>
      <div className="grid grid-cols-1 mb-[0.5rem]">
        <TextInput name={`image_layers.${index}.manual_prompts`} label="Manual Prompts" control={control} placeholder="Enter manual prompts" />
      </div>
      <div className="grid grid-cols-1 mb-[0.5rem]">
        <TextInput name={`image_layers.${index}.gen_per_ref`} label="Generates per ref" control={control} placeholder="Enter number of generates per ref" type="number" />
      </div>
      <button
        className={`mt-2 px-2 py-1 text-sm font-medium rounded ${!(!isValid || isSubmitting) ? 'bg-yellow-300 hover:bg-yellow-500 text-black' : 'bg-[#84888a] text-white'}`}
        onClick={() => onGenerate(field.image_name as any)}
        disabled={!isValid || isSubmitting}>
        Generate
      </button>
    </div>
  );
};

export default AccordionForm;
