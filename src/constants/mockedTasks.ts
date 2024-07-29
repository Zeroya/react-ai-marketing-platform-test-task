import {DimensionEnum} from '../enums/dimension.enum';
import {GenTypeEnum} from '../enums/gen-type.enum';
import {TemplateIdEnum} from '../enums/template-id.enum';
import {TaskModel} from '../models/task.model';

const mockedTasks: TaskModel[] = [
  {
    id: 1,
    task_name: 'Task 1',
    dimension: DimensionEnum.OneByOne,
    template_id: TemplateIdEnum.Template1,
    image_layers: ['https://example.com/image1.png'],
    text_layers: ['Text for task 1'],
    amount: 10,
    gen_type: GenTypeEnum.Random
  },
  {
    id: 2,
    task_name: 'Task 2',
    dimension: DimensionEnum.NineBySixteen,
    template_id: TemplateIdEnum.Template2,
    image_layers: ['https://example.com/image2.png'],
    text_layers: ['Text for task 2'],
    amount: 5,
    gen_type: GenTypeEnum.Cyclic
  },
  {
    id: 3,
    task_name: 'Task 3',
    dimension: DimensionEnum.SixteenByNine,
    template_id: TemplateIdEnum.Template2,
    image_layers: ['https://example.com/image3.png'],
    text_layers: ['Text for task 3'],
    amount: 15,
    gen_type: GenTypeEnum.Random
  },
  {
    id: 4,
    task_name: 'Task 4',
    dimension: DimensionEnum.OneByOne,
    template_id: TemplateIdEnum.Template1,
    image_layers: ['https://example.com/image4.png'],
    text_layers: ['Text for task 4'],
    amount: 8,
    gen_type: GenTypeEnum.Cyclic
  },
  {
    id: 5,
    task_name: 'Task 5',
    dimension: DimensionEnum.NineBySixteen,
    template_id: TemplateIdEnum.Template2,
    image_layers: ['https://example.com/image5.png'],
    text_layers: ['Text for task 5'],
    amount: 12,
    gen_type: GenTypeEnum.Random
  },
  {
    id: 6,
    task_name: 'Task 6',
    dimension: DimensionEnum.SixteenByNine,
    template_id: TemplateIdEnum.Template1,
    image_layers: ['https://example.com/image6.png'],
    text_layers: ['Text for task 6'],
    amount: 20,
    gen_type: GenTypeEnum.Cyclic
  }
];

export default mockedTasks;
