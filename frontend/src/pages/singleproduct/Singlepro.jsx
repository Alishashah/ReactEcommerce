import React, { useContext,} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import './single.css'
import Accordion from "react-bootstrap/Accordion";
import Rating from '@mui/material/Rating';
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Related from './Related';
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { Apicontext } from '../context/Apicontext';

// import { Link } from 'react-router-dom';


const Singlepro = () => {
  const{data}=useContext(Apicontext)
  const{_id}=useParams()
  // console.log(_id)
    const [value, setValue] =useState(2);
    const[incre,setincre]=useState(0)
    const product=data.filter((item)=>{ return item._id===_id})
    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey);

        return (
          <button
            className="acc"
            type="button"
            style={{ backgroundColor: "transparent", border: "0" }}
            onClick={decoratedOnClick}
          >
            {children}
          </button>
        );
      }

  return (
    <div>
<div className="container-fluid">
    <div className="row py-5 text-center text-white">
        <div className="col-12">
            <div className='wisht py-5'>
                <h1 className='text-dark'>Product page</h1>
                <h1>Home //Product page</h1>
            </div>
        </div>
    </div>
    {product.map((i)=>{
                    return(
                      <div className="row padd-5">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                          <div className="pro-img padd-7">
                              <div className="row">

                                  <div className="col-12">
                                  <div>
                                  <img src={i.image} alt="" className='img-fluid w-100' />
                              </div>
                                  </div>
                              </div>
                             <div className="row py-3">
                              <div className="col-3"><img src={i.image} alt=""  className='img-fluid'/></div>
                              <div className="col-3"><img src={i.image} alt=""  className='img-fluid'/></div>
                              <div className="col-3"><img src={i.image} alt=""  className='img-fluid'/></div>
                              <div className="col-3"><img src={i.image} alt=""  className='img-fluid'/></div>
                             </div>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                          <div className="pro-img-2 padd-7">
                             <h3>{i.category}</h3>
                             <h5>{i.price}</h5>
                             <h5>{i.slug}</h5>
                             <h5>{i.brand}</h5>
                             <p className='d-flex flex-wrap gap-3'><p><Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    /></p> <p>(5 customer reviews)</p></p>
                             <hr/>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vitae sit tenetur iure velit reiciendis voluptatem sequi rem incidunt odit sapiente pariatur corrupti aperiam quidem repellat asperiores, veniam omnis beatae!</p>
                             <div className='d-flex'>
                              <h3>Color : </h3>
                              <ul className='ul-review'>
                                  <li className='li-review active'></li>
                                  <li className='li-review-2'></li>
                                  <li className='li-review-3'></li>
                                  <li className='li-review-4'></li>
                              </ul>
                              </div>
                             <div className='d-flex'>
                              <h3>Size : </h3>
                              <ul className='ul-review'>
                                  <li className='li-reviews active'>S</li>
                                  <li className='li-reviews-2'>M</li>
                                  <li className='li-reviews-3'>XL</li>
                                  <li className='li-reviews-4'>XXL</li>
                              </ul>
                              </div>
                               <div className='main-side'>
                                  <div className='quantity'>
                                      <p className='inp-inp'>{incre}</p>
                                      <div className='sub' onClick={()=>{setincre(incre-1)}}>-</div>
                                      <div className='plus'  onClick={()=>{setincre(incre+1)}}>+</div>
                                  </div>

                                  <Link className='btn-theme'>Add to cart</Link>
                               </div>
                             <div>
                              <div className='d-flex gap-4 flex-wrap mt-3'>
                                  <div className='d-flex gap-2 fs-4'>
                                      <p ><FaRegHeart className='text-danger'/></p>
                                      <p>Add To List</p>
                                  </div>
                                  <div className='d-flex gap-2 fs-4'>
                                      <p><FaCodeCompare className='text-danger' />
              </p>
                                      <p>Add To Compare</p>
                                  </div>
                              </div>
                              <hr/>
                              <div className='d-flex justify-content-between align-items-center flex-wrap'>
                              <p><span className='text-danger fs-4'>code</span> : Ch-3xml</p>
                              <p className='text-end fs-4'><span className='text-danger' >share</span>  <FaFacebook /> <FaInstagram /> <FaWhatsapp /> <FaTwitter /></p>
                              </div>

                             </div>
                          </div>

                      </div>
                  </div>
                    )
                  })}
    <div className="container">
        <div className="row">
        <Tabs
      defaultActiveKey="Review"
      id="justify-tab-example"
      className="mb-3"
      justify
      variant='underline'

    >
      <Tab eventKey="Information" title="Information">
       <div className='bor-review'>
         <p className='font-review'>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adlo minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in tun tuni reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserun mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rel aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
         </p>
       </div>
      </Tab>
      <Tab eventKey="description" title="Description">
      <div className='bor-review'>
         <p className='font-review'>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adlo minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in tun tuni reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserun mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rel aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
         </p>
       </div>
      </Tab>
      <Tab eventKey="Review" title="Review (05)" variant="underline" color='red'>
       <div className='bor-review'>
        <div className='bor-review-2'>
            <h2>Customer Reviews</h2>
            <Accordion>
              <div>
                <div className='d-flex justify-content-between align-items-center mt-3 flex-wrap'>
                    <div className='d-flex gap-3 flex-wrap'>
                <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
                   <p>Based on 5 reviews</p>
                   </div>
                  <p><CustomToggle eventKey="0" className="flex-end">write a review</CustomToggle></p>
                </div>
                <br/>
                <hr/>
                <Accordion.Collapse eventKey="0">
                 <div>
                    <h3 className='mt-3'>Write a review</h3>
                    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" size="lg" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" size="lg" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Review</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" size="lg"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Rating</Form.Label>
        <br/>
        <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Review title</Form.Label>
        <Form.Control type="text" placeholder="" size="lg"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Body of Review(1500 words)</Form.Label>
        <Form.Control as="textarea" rows={12} />
      </Form.Group>
      <Button className='btn btn-dark text-end '>Post Comment</Button>
    </Form>
                 </div>
                </Accordion.Collapse>
              </div>
            </Accordion>

            <div className='mar-review'>
            <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <h3 className='mar-review-2'>
Awesome shipping service!</h3>
<p  className='mar-review-2 text-gray'>Nantu Nayal no Sep 30, 2022</p>
<p  className='mar-review-2'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<p className='text-end'>Report as Inappropriate</p>
            </div>
            <hr/>
            <div  className='mar-review-2'>
            <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <h3  className='mar-review-2'>
Awesome shipping service!</h3>
<p  className='mar-review-2'>Nantu Nayal no Sep 30, 2022</p>
<p  className='mar-review-2'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<p className='text-end'>Report as Inappropriate</p>
            </div>
            <hr/>
            <div>
            <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)

        }}
        className='mar-review-2'
      />
      <h3  className='mar-review-2'>
Awesome shipping service!</h3>
<p  className='mar-review-2'>Nantu Nayal no Sep 30, 2022</p>  className='mar-review-2'
<p  className='mar-review-2'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<p className='text-end'>Report as Inappropriate</p>
            </div>
            <br/>
            <hr/>
            <div>
            <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);  className='mar-review-2'
        }}
      />
      <h3  className='mar-review-2'>Awesome shipping service!</h3>
< p className='mar-review-2'>Nantu Nayal no Sep 30, 2022</p>
<p  className='mar-review-2'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<p className='text-end'>Report as Inappropriate</p>
            </div>
            <br/>
            <hr/>
            <div>
            <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className='mar-review-2'
      />
      <h3  className='mar-review-2'>
Awesome shipping service!</h3>
<p>Nantu Nayal no Sep 30, 2022</p>
<p  className='mar-review-2'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<p className='text-end'>Report as Inappropriate</p>
            </div>
            <br/>
            <hr/>
        </div>
       </div>
      </Tab>
    </Tabs>
        </div>
    </div>
</div>
<Related/>
</div>

  )
}

export default Singlepro