import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProvider } from './contexts/AppContexts';
import './App.css';

import Login from './pages/Login';
import AddEmployee from './pages/AddEmployee';
import Home from './pages/Home';
import RoomRegister from './pages/RoomRegister';
import RoomTimeTable from './pages/RoomTimeTable';
import AnnInfo from './pages/AnnInfo';
import EmployeeInfo from './pages/EmployeeInfo';
import AddRequest from './pages/AddRequest';
import Requests from './pages/Requests';
import EmployeeList from './pages/EmployeeList';

function App() {
  return (
    <div className=''>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/trang-chu' element={<Home />} />
            <Route path='/them-nhan-vien' element={<AddEmployee />} />
            <Route path='/gui-yeu-cau' element={<AddRequest />} />
            <Route path='/thong-bao/:id' element={<AnnInfo />} />
            <Route path='/danh-sach-yeu-cau' element={<Requests />} />
            <Route path='/dang-ky-phong-hop' element={<RoomRegister />} />
            <Route path='/lich-phong-hop' element={<RoomTimeTable />} />
            <Route path='/tai-khoan' element={<EmployeeInfo />} />
            <Route path='/danh-sach-nhan-vien' element={<EmployeeList />}/>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
