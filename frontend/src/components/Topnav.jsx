import React from 'react'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import './topnav.css'
import { Link } from 'react-router-dom';

const Topnav = () => {
  return (
    <div className="container-fluid bg-1">
        <div className="row sec">
            <div className="col-lg-6 text-center">
                <div className='d-flex justify-content-center align-items-center'>
                    <p className='font-1'>
                    World Wide Completely Free Returns and Free Shipping
                    </p>
                </div>
            </div>
            <div className="col-lg-6 dis-blank">
                <div className='dis'>
                    <div className='bor'>
                    <p><IoCall className='color-1'/></p>
                    <p className='font-color'>+00 123 456 789</p>
                    </div>
                    <div className='bor'>
                    <p><MdEmail className='color-1'/></p>
                    <p className='font-color'>demo@gamil.com</p>
                    </div>
                    <div className='bor'>
                    <p><VscAccount className='color-1'/></p>
                    <Link to="/account" className='text-black'><p className='font-color' >Account</p></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topnav