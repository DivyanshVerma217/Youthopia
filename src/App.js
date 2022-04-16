import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Navbar from "./components/Navbar";
import Card from "./components/card";

import Technical from "./components/technical";
import Debate from "./components/debate";
import Informal from "./components/informal";
import Cultral from "./components/cultural";
import Desc from "./components/desc";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/footer";
import Desc2 from "./components/desc2";
import Desc3 from "./components/desc3";
import Desc4 from "./components/desc4";


function App() {





  return (
    <>
    {/* <Navbar/> */}
    {/* <Technical/> */}
    <Navbar2 />
    <Routes>
      {/* <Route path ="/" element ={<Home/>}/> */}
      <Route path="/debate" element={<Debate />} />
      <Route path="/technical" element={<Technical/>} />
      <Route path="/cultural" element={<Cultral/>} />
      <Route path="/informal" element={<Informal/>} />
      
      <Route path="/debate/:eventname" element={<Desc/>} />
      <Route path="/technical/:eventname" element={<Desc2/>} />
      <Route path="/cultural/:eventname" element={<Desc3/>} />
      <Route path="/informal/:eventname" element={<Desc4/>} />
    </Routes>
    {/* <Cultral/> */}
    {/* <Debate/> */}
    {/* <Informal/> */}
    
    
    

    
    
    {/* <Container >
      
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container> */}
    </>
  );
}

export default App;
