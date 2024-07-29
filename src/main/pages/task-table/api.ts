import {API_URL, authHeader} from '../../../constants/general';
import {ImageGenerationModel} from '../../../models/image-generation.model';
import {TaskModel} from '../../../models/task.model';
import axios from 'axios';

const TASK_API_URL = `${API_URL}/tz-front`;

const generateImage = (taskImage: ImageGenerationModel) => {
  return axios.post(`${TASK_API_URL}/generate_images`, taskImage, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: authHeader
    }
  });
};

const generateFormat = (task: TaskModel) => {
  return axios.post(`${TASK_API_URL}/generate_formats`, task, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: authHeader
    }
  });
};

export {generateImage, generateFormat};
