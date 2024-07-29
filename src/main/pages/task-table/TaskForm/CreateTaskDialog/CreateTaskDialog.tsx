import React, {useEffect} from 'react';
import {useForm, Controller, Resolver, useWatch} from 'react-hook-form';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import {TaskModel} from '../../../../../models/task.model';
import GenerateButton from '../../../../components/Table/Buttons/GenerateButton/GenerateTaskButton';
import {schema} from './utils';
import {yupResolver} from '@hookform/resolvers/yup';
import {GridRenderCellParams} from '@mui/x-data-grid';
import {createNewTask} from '../../../../../store/reducers/TasksSlice';
import TextInput from '../../../../components/inputFields/TextInput/TextInput';
import {MuiChipsInput} from 'mui-chips-input';
import SelectInput from '../../../../components/inputFields/SelectInput/SelectInput';
import {dimensionOptions, generationOptions, templateIdOptions} from '../../../../../constants/selectPropData';
import {AppDispatch} from '../../../../../store/store';
import {useAppDispatch} from '../../../../../hooks/redux-hooks';

const CreateTaskDialog: React.FC<{open: boolean; onClose: () => void}> = ({open, onClose}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch: AppDispatch = useAppDispatch();
  const {control, handleSubmit, reset, formState} = useForm<TaskModel>({
    mode: 'all',
    defaultValues: new TaskModel(),
    resolver: yupResolver(schema) as Resolver<TaskModel, any>
  });

  const {errors, isValid, isSubmitting} = formState;

  const watchFields = useWatch({
    control
  });

  const onSubmit = (data: TaskModel) => {
    dispatch(createNewTask({...data, id: Math.floor(Math.random() * 1000000000)}));
    reset({});
    onClose();
  };

  useEffect(() => {
    reset({});
  }, []);

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        sx: {
          width: '50%',
          height: '85%'
        }
      }}>
      <DialogTitle id="responsive-dialog-title">{'Create a new task'}</DialogTitle>
      <DialogContent>
        <DialogContentText>Fill out the form below to create a new task.</DialogContentText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-2 mb-[1rem] mt-2">
            <TextInput name="task_name" label="Task name" control={control} errorName={errors.task_name} placeholder="Task name" />
            <TextInput name="amount" label="Amount" control={control} errorName={errors.amount} placeholder="Amount" type="number" />
          </div>
          <div className="grid grid-cols-1 mb-[1.5rem]">
            <Controller
              name="image_layers"
              control={control}
              render={({field}) => (
                <MuiChipsInput
                  {...field}
                  label="Image layers"
                  FormHelperTextProps={{
                    style: {
                      position: 'absolute',
                      left: 0,
                      bottom: '-1.2rem'
                    }
                  }}
                  placeholder="Add new image layers"
                  size="small"
                  error={!!errors.image_layers}
                  helperText={errors.image_layers?.message as any}
                />
              )}
            />
          </div>
          <div className="grid grid-cols-1 mb-[1rem]">
            <Controller
              name="text_layers"
              control={control}
              render={({field}) => (
                <MuiChipsInput
                  {...field}
                  label="Text layers"
                  placeholder="Add new text layers"
                  FormHelperTextProps={{
                    style: {
                      position: 'absolute',
                      left: 0,
                      bottom: '-1.2rem'
                    }
                  }}
                  size="small"
                  error={!!errors.text_layers}
                  helperText={errors.text_layers?.message as any}
                />
              )}
            />
          </div>
          <div className="grid grid-cols-1 mb-[1rem]">
            <SelectInput name="dimension" label="Dimension" control={control} errorName={errors.dimension} options={dimensionOptions} />
          </div>
          <div className="grid grid-cols-1 mb-[1rem]">
            <SelectInput name="template_id" label="Template id" control={control} errorName={errors.template_id} options={templateIdOptions} />
          </div>
          <div className="grid grid-cols-1 mb-[1rem]">
            <SelectInput name="gen_type" label="Generation Type" control={control} errorName={errors.gen_type} options={generationOptions} />
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <div className="mb-2 mr-4 flex gap-2">
          <button
            className="bg-[#84888a] hover:bg-[#636769] text-white px-2 py-1 text-sm font-medium rounded"
            onClick={() => {
              onClose();
              reset({});
            }}>
            Cancel
          </button>
          <button
            className={`px-2 py-1 text-sm font-medium rounded ${!formState.isValid || formState.isSubmitting ? 'bg-[#84888a] text-white' : 'bg-blue-300 hover:bg-blue-500 text-black'}`}
            onClick={handleSubmit(onSubmit)}
            disabled={!isValid || isSubmitting}>
            Create
          </button>
          <GenerateButton {...({row: watchFields} as GridRenderCellParams)} disabled={!isValid || isSubmitting} />
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default CreateTaskDialog;
