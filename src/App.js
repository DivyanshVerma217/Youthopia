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
import Home1 from "./components/bhavya";
import Technical from "./components/technical";


function App() {
  return (
    <>
    {/* <Navbar/> */}
    {/* <Technical/> */}
    <Card/>
    
    

    
    
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
