import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import UserForm from './components/UserForm';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className='bg-zinc-900 h-screen text-white'>
      <div className='flex items-center justify-center h-full'>
        <BrowserRouter>
        <Routes>
          <Route path="/show-users" element={<UsersList/>} />
          <Route path="/create-user" element={<UserForm/>} />
          <Route path="/edit-user/:id" element={<UserForm/>} />
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
