import {FC, useState} from 'react';
import PlussIcon from '../../../../../assets/PlussIcon';
import CreateTaskDialog from '../../../../pages/task-table/TaskForm/CreateTaskDialog/CreateTaskDialog';

const CreateTaskButton: FC = () => {
  const [open, setOpen] = useState(false);
  const handleClick = async () => {
    setOpen(true);
  };

  return (
    <>
      <button className="" onClick={handleClick}>
        <PlussIcon fill="#62c2de" size={42} />
      </button>
      {open && <CreateTaskDialog open={open} onClose={() => setOpen(false)} />}
    </>
  );
};

export default CreateTaskButton;
