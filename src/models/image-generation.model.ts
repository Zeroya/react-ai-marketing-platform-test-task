import {DimensionEnum} from '../enums/dimension.enum';
import {StyleTaskEnum} from '../enums/style-task.enum';

export class ImageGenerationRequest {
  public id: number;
  public task_name: string;
  public image_layers: ImageGenerationModel[] = [];
}

export class ImageGenerationModel {
  public id: number;
  public images: string[] = [];
  public image_name?: string = '';
  public dimension: DimensionEnum;
  public style: StyleTaskEnum;
  public manual_prompts: string = '';
  public gen_per_ref: number = 0;
  public flow?: string = '';
}
