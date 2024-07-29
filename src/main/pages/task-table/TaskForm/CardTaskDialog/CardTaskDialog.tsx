import React, {useEffect, useState} from 'react';
import {useForm, Resolver, useFieldArray, useWatch, FormProvider} from 'react-hook-form';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import {TaskModel} from '../../../../../models/task.model';
import {schema} from './utils';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAppSelector} from '../../../../../hooks/redux-hooks';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ImageGenerationModel, ImageGenerationRequest} from '../../../../../models/image-generation.model';
import {SeverityEnum} from '../../../../../enums/severity.enum';
import {errorMessages, yupMessages} from '../../../../../helpers/yupMessages';
import {generateImage} from '../../api';
import CustomizedSnackbars from '../../../../components/CustomizedSnackbars/CustomizedSnackbars';
import AccordionForm from './AccordionForm';

const CardTaskDialog: React.FC<{open: boolean; onClose: () => void; taskId: number}> = ({open, onClose, taskId}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const tasks: TaskModel[] = useAppSelector((state) => state.taskState.tasks);
  const selectedTask = tasks.find((task) => task.id === taskId);
  const methods = useForm<ImageGenerationRequest>({
    mode: 'all',
    defaultValues: {
      id: taskId,
      task_name: selectedTask?.task_name || '',
      image_layers: selectedTask?.image_layers.map((layer) => ({...new ImageGenerationModel(), image_name: layer})) || []
    },
    resolver: yupResolver(schema) as unknown as Resolver<ImageGenerationRequest, any>
  });

  const {control, handleSubmit, reset, setValue} = methods;

  const {fields} = useFieldArray({
    control,
    name: 'image_layers'
  });

  const watchImageLayers: ImageGenerationModel[] = useWatch({
    control,
    name: 'image_layers'
  });

  const onSubmit = (data: ImageGenerationRequest) => {};

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: SeverityEnum.Error
  });

  const handleClick = async (image_name: string) => {
    try {
      console.log('watchImageLayers', watchImageLayers);
      await generateImage(watchImageLayers.find((image) => image.image_name === image_name) as ImageGenerationModel);
      setSnackbar({
        open: true,
        message: yupMessages.itemCreated('Image'),
        severity: SeverityEnum.Success
      });
    } catch {
      setSnackbar({
        open: true,
        message: errorMessages.systemError,
        severity: SeverityEnum.Error
      });
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files).map((file) => {
        const url = URL.createObjectURL(file);
        return url.replace('blob:', '');
      });
      setValue(`image_layers.${index}.images`, fileArray, {shouldValidate: true});
    }
  };

  useEffect(() => {
    reset({
      id: taskId,
      task_name: selectedTask?.task_name || '',
      image_layers: selectedTask?.image_layers.map((layer) => ({...new ImageGenerationModel(), image_name: layer})) || []
    });
  }, [selectedTask]);

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{
          sx: {
            width: '50%',
            height: '70%'
          }
        }}>
        <DialogTitle id="responsive-dialog-title">{selectedTask?.task_name ?? 'Task'}</DialogTitle>
        <DialogContent>
          <div className="mt-2"></div>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {fields.length > 0 ? (
                fields.map((field, index) => (
                  <Accordion key={field.id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
                      {field.image_name || 'Unnamed Image'}
                    </AccordionSummary>
                    <AccordionDetails>
                      <AccordionForm index={index} field={field} onGenerate={handleClick} handleImageUpload={handleImageUpload} />
                    </AccordionDetails>
                  </Accordion>
                ))
              ) : (
                <DialogContentText>No images available</DialogContentText>
              )}
            </form>
          </FormProvider>
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
          </div>
        </DialogActions>
      </Dialog>
      <div className="absolute bottom-0 left-0 z-999">
        <CustomizedSnackbars message={snackbar.message} severity={snackbar.severity} open={snackbar.open} onClose={() => setSnackbar((prev) => ({...prev, open: false}))} />
      </div>
    </>
  );
};

export default CardTaskDialog;
