import {GridColDef, GridRenderCellParams} from '@mui/x-data-grid';
import {BorderedCell} from '../main/components/Table/TableCell/BorderedCell/BorderCell';
import GenerateButton from '../main/components/Table/Buttons/GenerateButton/GenerateTaskButton';
import ResultAdsButton from '../main/components/Table/Buttons/ResultAdsButton/ResultAdsButton';
import TaskNameCell from '../main/components/Table/TableCell/TaskNameCell/TaskNameCell';

export const createTaskColumns: GridColDef[] = [
  {
    field: 'task_name',
    headerName: 'Task Name',
    flex: 1,
    minWidth: 160,
    renderCell: (params) => <TaskNameCell params={params} />
  },
  {
    field: 'dimension',
    headerName: 'Dimension',
    width: 120,
    renderCell: (params: GridRenderCellParams) => <BorderedCell value={params.value} />
  },
  {
    field: 'template_id',
    headerName: 'Template ID',
    width: 170,
    renderCell: (params: GridRenderCellParams) => <BorderedCell value={params.value} />
  },
  {
    field: 'image_layers',
    headerName: 'Images',
    flex: 1,
    minWidth: 300,
    renderCell: (params: GridRenderCellParams) => <BorderedCell value={params.value} />
  },
  {
    field: 'text_layers',
    headerName: 'Texts',
    width: 140,
    renderCell: (params: GridRenderCellParams) => <BorderedCell value={params.value} />
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 120
  },
  {
    field: 'gen_type',
    headerName: 'Gen Type',
    width: 170,
    renderCell: (params: GridRenderCellParams) => <BorderedCell value={params.value} />
  },
  {
    field: 'gen_tasks',
    headerName: 'Gen Tasks',
    width: 120,
    renderCell: (params: GridRenderCellParams) => <GenerateButton {...params} />,
    sortable: false,
    filterable: false
  },
  {
    field: 'result_ads',
    headerName: 'Result Ads ',
    width: 120,
    renderCell: (params: GridRenderCellParams) => <ResultAdsButton {...params} />,
    sortable: false,
    filterable: false
  }
];
