import React, {useState, FC} from 'react';
import {GridRenderCellParams} from '@mui/x-data-grid';
import CardTaskDialog from '../../../../pages/task-table/TaskForm/CardTaskDialog/CardTaskDialog';

interface TaskNameCellProps {
  params: GridRenderCellParams;
}

const TaskNameCell: FC<TaskNameCellProps> = ({params}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <div onClick={handleClick} style={{cursor: 'pointer', color: '#62c2de'}}>
        {params.value}
      </div>
      {open && <CardTaskDialog open={open} onClose={() => setOpen(false)} taskId={params.row.id} />}
    </>
  );
};

export default TaskNameCell;
