import React from 'react'
import './login.css'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
         <div className="container-fluid">
          <div className="row">
        <div className='bg-dark d-flex justify-content-center align-items-center padd'>
          <h1 className='text-white'>Login</h1>
        </div>
      </div>
      <div className="row">
      <div className='hr-w  mar-new'>
        <div className="col-sm-6 shadow-1">
          <Form className='padd-3'>
            <center><h1>Login</h1></center>
            <center><hr className='w-75'/></center>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Username*</Form.Label>
        <Form.Control type="text" placeholder="username" className='int' />
      </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Password*</Form.Label>
        <Form.Control type="password" placeholder="password" className='int'/>
      </Form.Group>
            <div className="forgot mt-2">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                />
                <p className="form-check-label" htmlFor="flexSwitchCheckChecked">
                  Remember me
                   </p>
              </div>
              <div>
                <p>Forgot?</p>
              </div>
            </div>
            <center><Button className="btn bt-con " variant="dark" type="submit" >Login</Button></center>
            <center><hr/></center>
            <center><p>don't have an account<Link to='/sign'><span className="text-danger">-get started</span></Link></p></center>
          </Form>
          </div>
        </div>
        </div>
        </div>
  )
}

export default Login