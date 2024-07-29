import {SelectOptionInterface} from '../interfaces/select-option.interface';
import {DimensionEnum} from '../enums/dimension.enum';
import {GenTypeEnum} from '../enums/gen-type.enum';
import {TemplateIdEnum} from '../enums/template-id.enum';
import {StyleTaskEnum} from '../enums/style-task.enum';
import {FlowEnum} from '../enums/flow.enum';

export const dimensionOptions: SelectOptionInterface[] = [
  {label: DimensionEnum.OneByOne, value: DimensionEnum.OneByOne},
  {label: DimensionEnum.SixteenByNine, value: DimensionEnum.SixteenByNine},
  {label: DimensionEnum.NineBySixteen, value: DimensionEnum.NineBySixteen}
];

export const generationOptions: SelectOptionInterface[] = [
  {label: GenTypeEnum.Cyclic, value: GenTypeEnum.Cyclic},
  {label: GenTypeEnum.Random, value: GenTypeEnum.Random}
];

export const templateIdOptions: SelectOptionInterface[] = [
  {label: TemplateIdEnum.Template1, value: TemplateIdEnum.Template1},
  {label: TemplateIdEnum.Template2, value: TemplateIdEnum.Template2}
];

export const styleTaskOptions: SelectOptionInterface[] = [
  {label: StyleTaskEnum.AnimeStyle, value: StyleTaskEnum.AnimeStyle},
  {label: StyleTaskEnum.UltraRealisticPhotography, value: StyleTaskEnum.UltraRealisticPhotography}
];

export const flowOptions: SelectOptionInterface[] = [
  {label: FlowEnum.MjModel, value: FlowEnum.MjModel},
  {label: FlowEnum.OtherModelsMix, value: FlowEnum.OtherModelsMix}
];
