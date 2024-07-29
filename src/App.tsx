import {HashRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import TaskTable from './main/pages/task-table/TaskTable';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<TaskTable />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
