import React from 'react'
import './login.css'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const Sign = () => {
  return (
         <div className="container-fluid">
          <div className="row">
        <div className='bg-dark d-flex justify-content-center align-items-center padd'>
          <h1 className='text-white'>REGISTER</h1>
        </div>
      </div>
      <div className="row">
      <div className='hr-w  mar-new'>
        <div className="col-sm-6 shadow-1">
          <Form className='padd-3'>
            <center><h1 className='mb-4'>Register</h1></center>
            <center><hr className='w-75'/></center>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Username*</Form.Label>
        <Form.Control type="text" placeholder="username" className='int'/>
      </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Password*</Form.Label>
        <Form.Control type="password" placeholder="password" className='int'/>
      </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" className='int' />
      </Form.Group>

            <center><Button className="btn btn-dark bt-con " variant="dark" type="submit" >Register</Button></center>
            <center><hr/></center>
            <center><p>Already have an account<Link to='/login'><span className="text-danger">-login</span></Link></p></center>
          </Form>
          </div>
        </div>
        </div>
        </div>
  )
}

export default Sign