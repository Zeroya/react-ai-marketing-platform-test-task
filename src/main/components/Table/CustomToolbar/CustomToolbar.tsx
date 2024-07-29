import {GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarExport, GridToolbarDensitySelector} from '@mui/x-data-grid';
import {memo} from 'react';
import CreateButton from '../Buttons/CreateTaskButton/CreateTaskButton';

function CustomToolbar() {
  return (
    <div className="flex justify-between content-center">
      <div className="self-center flex justify-between content-center">
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </div>
      <div className="mr-4">
        <CreateButton />
      </div>
    </div>
  );
}

export default memo(CustomToolbar);
