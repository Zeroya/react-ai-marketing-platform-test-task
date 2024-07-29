import {DimensionEnum} from '../enums/dimension.enum';
import {GenTypeEnum} from '../enums/gen-type.enum';

export class TaskModel {
  public id: number;
  public task_name: string;
  public dimension: DimensionEnum;
  public template_id: string;
  public image_layers: string[] = [];
  public text_layers: string[] = [];
  public amount: number = 0;
  public gen_type: GenTypeEnum = GenTypeEnum.Random;
}
