import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import BGCOL from "../img/03.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-[#fffdf4]">
      <div className="flex justify-between sm:flex-row flex-col ">
        <div className="flex flex-col  lg:ml-48  sm:text-center justify-center bg-local bg-url('../src/img/03.png') ">
          <img className=" lg:mr-44 lg:-mt-48 px-4 py-4 " src={BGCOL} alt="" />
          <div className="-mt-80 sm:-ml-20 sm:mr-10  lg:-ml-20 lg:mr-10">
            <h1 className=" lg:text-9xl flex justify-center sm:items-center sm:text-center lg:text-right ">
              YOUTHOPIA
            </h1>
            <h5 className=" flex justify-end  lg:text-5xl">2022</h5>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="p-4 box">
            <h5 className="mb-3">WELCOME!</h5>
            <h2>Login to your account </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button variant="primary" type="Submit">
                  Log In
                </Button>
              </div>
            </Form>
            <hr />
            
          </div>
          <div className=" p-4 box mt-3 text-center">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
      <div className="bg-local ">
        

      </div>
    </div>
  );
};

export default Login;
