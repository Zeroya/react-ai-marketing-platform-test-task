import {useEffect, useState} from 'react';
import {errorMessages} from '../../../helpers/yupMessages';
import List from '@mui/material/List';
import {gridCellFocusStyle, gridColorStyles} from '../../../styles/mui-table-styles';
import {DataGrid, GridColDef, GridColumnVisibilityModel} from '@mui/x-data-grid';
import mockedTasks from '../../../constants/mockedTasks';
import CustomToolbar from '../../components/Table/CustomToolbar/CustomToolbar';
import {createTaskColumns} from '../../../helpers/muiColumns.helper';
import {useAppSelector, useAppDispatch} from '../../../hooks/redux-hooks';
import {AppDispatch} from '../../../store/store';
import {TaskModel} from '../../../models/task.model';
import {addTasks} from '../../../store/reducers/TasksSlice';
import CustomizedSnackbars from '../../components/CustomizedSnackbars/CustomizedSnackbars';
import {SeverityEnum} from '../../../enums/severity.enum';

function TaskTable() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: SeverityEnum.Error
  });
  const tasks: TaskModel[] = useAppSelector((state) => state.taskState.tasks);
  const dispatch: AppDispatch = useAppDispatch();

  const [columnsVisibilityConfigurator, setColumnsVisibilityConfigurator] = useState<GridColumnVisibilityModel>({});

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({...prev, open: false}));
  };

  const fetchTableTasks = async () => {
    try {
      dispatch(addTasks(mockedTasks));
    } catch {
      setSnackbar({
        open: true,
        message: errorMessages.systemError,
        severity: SeverityEnum.Error
      });
    }
  };

  const rows = tasks.map((task) => ({
    id: task.id,
    task_name: task.task_name,
    dimension: task.dimension,
    template_id: task.template_id,
    image_layers: task.image_layers,
    text_layers: task.text_layers,
    amount: task.amount,
    gen_type: task.gen_type
  }));

  const columns: GridColDef[] = createTaskColumns.map((column) => ({
    ...column,
    headerClassName: 'super-app-theme--header'
  }));

  useEffect(() => {
    fetchTableTasks();
  }, []);

  return (
    <div className="mt-[2rem] mx-[1rem]">
      <div className="ml-2 mb-4 font-bold text-2xl">AI-marketing platform TZ table</div>
      <List className="bg-white w-full m-0 p-0">
        <div>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowClassName={() => 'border-t border-gray-400'}
            slots={{
              toolbar: () => <CustomToolbar />
            }}
            sx={{
              border: 0,
              ...gridCellFocusStyle,
              ...gridColorStyles
            }}
            autoHeight={true}
            columnVisibilityModel={columnsVisibilityConfigurator}
            onColumnVisibilityModelChange={(newModel) => setColumnsVisibilityConfigurator(newModel)}
          />
        </div>
      </List>
      <CustomizedSnackbars message={snackbar.message} severity={snackbar.severity} open={snackbar.open} onClose={handleSnackbarClose} />
    </div>
  );
}

export default TaskTable;
