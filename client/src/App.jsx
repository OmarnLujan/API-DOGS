import "./App.css";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// *! rafc recordar 
import Home from "./components/home/Home";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import Nav from "./components/nav/nav";
import Landing from "./components/landing/Landing";


function App() {
  const [access, setAccess] = useState(false);

  const navigate = useNavigate();

  async function login() {
    setAccess(true);
  }
  //Niego la navegacion a cualquier lado que no sea "/" la landing page
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const location = useLocation();
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing login = {login} />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}
//<Route exact path="/dogs" element={<Cards />} />
export default App;
