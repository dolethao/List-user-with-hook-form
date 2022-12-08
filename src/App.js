
import Nav from './Views/Nav/Nav';
import ListUsers from './Views/Pages/ListUsers'
import AddNewUser from './Views/Pages/AddNewUser'
import UpdateUser from './Views/Pages/UpdateUser'
import { Routes, Route } from "react-router-dom"
import DetailUser from './Views/Pages/DetailUser';
import { ToastContainer } from 'react-toastify';


const App = (props) => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" exact element={<ListUsers />} />
        <Route path="/add-new-user" element={<AddNewUser />} />
        <Route path="/update-user/:id" element={<UpdateUser />} />
        <Route path="/detail-user/:id" element={<DetailUser />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
