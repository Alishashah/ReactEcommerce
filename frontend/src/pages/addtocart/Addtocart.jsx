import React, { useContext, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import './add.css'
import { Cartcontext } from '../context/Cartcontext';

const Addtocart = () => {
  const [count ,setcount]=useState(0)
  const{cartdata,deletedata,setcartdata}=useContext(Cartcontext)
  console.log(cartdata)


  const deleteitemdata=(pid)=>{
    const deletedata=cartdata.filter((ele,ind)=> ind!==pid)
    setcartdata(deletedata)
    localStorage.setItem("cart",JSON.stringify(deletedata))
 }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className='bg-dark d-flex justify-content-center align-items-center padd'>
          <h1 className='text-white'>HOME / ADD TO CART</h1>
        </div>
      </div>
      <div className='add-padd'>
        <div className="row">
    <Table responsive >
    <thead>
      <tr className='add-font-cart bg-body-secondary'>
        <th>Product</th>
        <th>Price</th>
        <th>quantity</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>

        {
          cartdata.map((e,ind)=>{
            return (
              <tr className='text-center '>
              <td className='align-middle'>
              <div className='d-flex justify-content-evenly align-items-center'>
              <p onClick={()=>{deleteitemdata(ind)}}><MdDelete  className='icon-add' /></p>
              <img src={e.image} alt="image" className='add-image' />
              <p className='icon-add'>{e.category}</p>
              </div>
          </td>
          <td className='align-middle'><p className='icon-add' >${e.price}</p></td>
          <td className='align-middle'><center><p className='icon-add add-flex-g align-middle'> <p onClick={()=>{setcount(count-1)}}>-</p> <p>{count}</p> <p onClick={()=>{setcount(count+1)}}>+</p></p></center></td>
          <td className='icon-add align-middle'>${e.total}</td>
          </tr>
            )
          })
        }
    </tbody>
  </Table>
  </div>
  <div className='add-mar'>
  <div className="row">
    <div className="col-lg-6 col-md-6 col-sm-12"><p className='mt-4'><Link to='/address' className='add-butt'> Continue shopping</Link></p></div>
    <div className="col-lg-4 col-md-3 col-sm-12"><p className='mt-4 text-end'><Link className='add-butt-2' onClick={deletedata}> Clear cart</Link></p></div>
    <div className="col-lg-2 col-md-3 col-sm-12"><p className='mt-4'><Link to='/' className='add-butt-2 '>Update cart</Link></p></div>
  </div>
  </div>

  <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className='add-mar col-padd'>
            <h3>Calculate Shipping</h3>
            <p>Estimate your shipping fee *</p>
            <p>Calculate Shipping</p>
            <Form>
            <Form.Select className='int-2'>
        <option>Select country</option>
      </Form.Select>
      <br />
            <Form.Control
          type="text"
          placeholder="state/country"
          name="email"
          className='int-2'
        />
        <br/>
        <Form.Control
          type="select"
          placeholder="city/town"
          name="password"
      className='int-2'
        />
        <br/>
        <Form.Control
          type="select"
          placeholder="zip code"
          name="password"
      className='int-2'
        />

            </Form>

            <p className='update-total'>Update total</p>
            <p className='card-total'>Card total</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className='add-mar col-padd'>
          <h3>Coupon Code</h3>
          <p>Enter your coupon code if you have one.</p>
          <Form.Control
          type="text"
          placeholder="enter coupon code"
          name="text"
          className='int-2'
        />
        <br/>
          <p className='update-total'>Appy coupon</p>
        </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <h3 className='new-mar'>Card total</h3>
          <div className='shadow-add col-padd'>

             <div>
              <div className='d-flex  align-items-center gap-4'>
                <p>subtotal</p>
                <p>$7657</p>
              </div>
              <div className='d-flex gap-4'>
                <p>shipping</p>
               <div>
               <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label class="form-check-label" for="exampleRadios1">
  shipping
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label" for="exampleRadios2">
  shipping
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"/>
  <label class="form-check-label" for="exampleRadios3">
  shipping
  </label>
</div>
               </div>
              </div>
              <div className='d-flex align-items-center gap-4 mt-2'>
                <p>Total</p>
                <p>$7657</p>
              </div>
             </div>
          </div>
          <Link to='/address' className='bt-add btn btn-dark w-100 mt-3' >PROCEED TO CHECKOUT</Link>
        </div>
  </div>
  </div>
  </div>
  )
}

export default Addtocart