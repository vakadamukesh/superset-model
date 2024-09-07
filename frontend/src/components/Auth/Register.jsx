


import React, { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";

import { FaPencilAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";
import { apiUrl } from "../../apiConfig";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Register= () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${apiUrl}/api/v1/user/register`,
        { name, phone, email, role, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };


  if (isAuthorized) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <section className="authPage">
        <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
          <Row className="auth-box shadow-lg rounded p-5 bg-white">
            <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
              <img src="/JobZeelogo.png" alt="logo" className="mb-4" style={{ width: '150px' }} />
              <h3 className="mb-4 text-center">Create your account</h3>
              <Form onSubmit={handleRegister} className="w-100">
                <Form.Group className="mb-3" controlId="formRole">
                  <Form.Label>Register As</Form.Label>
                  <div className="input-group">
                    <Form.Select value={role} onChange={(e) => setRole(e.target.value)} required>
                      <option value="">Select Role</option>
                      <option value="Employer">Employer</option>
                      <option value="Job Seeker">Job Seeker</option>
                    </Form.Select>
                    <span className="input-group-text"><FaRegUser /></span>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>Name</Form.Label>
                  <div className="input-group">
                    <Form.Control
                      type="text"
                      placeholder="MUKESH KUMAR VAKADA"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <span className="input-group-text"> <FaPencilAlt /></span>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <div className="input-group">
                    <Form.Control
                      type="email"
                      placeholder="mukeshkumarvakada9@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <span className="input-group-text"><MdOutlineMailOutline /></span>
                  </div>
                </Form.Group>
                 <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <div className="input-group">
                    <Form.Control
                     type="number"
                  placeholder="7842857268"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                    />
                    <span className="input-group-text"><FaPhoneFlip /></span>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <div className="input-group">
                    <Form.Control
                      type="password"
                      placeholder="Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span className="input-group-text"><RiLock2Fill /></span>
                  </div>
                </Form.Group>

                <button  type="submit" className="w-100 new-btn" id="loginBtn">
                  Register
                </button>
              </Form>
               {/* <Link to={"/login"} className ="new-btn2 w-100">Login</Link> */}
            </Col>
            <Col md={6} className="d-none d-md-block">
              <img src="/login.png" alt="login" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Register;
