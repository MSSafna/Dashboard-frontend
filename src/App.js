
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Signup from "./Components/Signup";


function App() {



  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={
          <div className='flex bg-gray-100'>
          <Sidebar/>
          <Header/>
          </div> 
          }/>

          <Route path='/signup' element={<Signup/>}/>
      </Routes>


      </BrowserRouter>
    
    </div>
  );
}

export default App;
