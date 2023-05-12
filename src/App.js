import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Adservices from './Pages/Adservice/Adservices';
import Home from './Pages/Home/Home/Home';
import ManageService from './Pages/MangeServices/ManageService';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Service from './Pages/Home/Service/Service';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/service" element={<Service/>}></Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/addService" element={<Adservices></Adservices>}></Route>
        <Route path="/manageservices" element={<ManageService></ManageService>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
