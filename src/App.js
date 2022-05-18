import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import TodoApp from './Components/TodoApp/TodoApp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PrivateRoute>
          <TodoApp />
        </PrivateRoute>}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
