import React, { useContext, useState } from 'react'
import './css/main.css'
import { useNavigate,Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { GiMultiDirections } from "react-icons/gi";
import { MdAcUnit } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { Apicontext } from '../context/Apicontext';

const Featured = () => {
  const{data}=useContext(Apicontext)

  const productdata=data.filter((ele,ind)=>{
    return ind>1 && ind<11
  })
    const [viewdata, setviewdata] = useState(null);
    const navigate=useNavigate()

    const handleCardClick = (item) => {
      setviewdata(item);
      navigate(`/shoesdata/${item._id}`);
    };

    const shoesdata=productdata.map((item)=>{
        return(
            <div  key={item._id} className="card-1">
              <p className='discount'>-10%</p>
              <div className='img-wrapper-2'>
            <img src={item.image} class="card-img-top img-fluid  inner-img-2 img-img"  />
            </div>
            <div className="card-body mar-2">
              <h5 className="card-title">Category : {item.category}</h5>
              <p className="card-text">Brand : {item.brand}</p>
              <p className="card-text">Price : {item.price}$</p>
            </div>
            <a href="#" className="card-2"><FaHeart /></a>
            <a href="#" className="card-3" onClick={() => handleCardClick(item)}><FaEye /></a>
            <a href="#" className="card-4" ><MdAcUnit /></a>
            <a href="#" className="card-5" ><GiMultiDirections /></a>
          </div>
        )
    })
  return (
   <div className="container-fluid padd-3 mt-5">
     <center><h1 className='font-dis-fea'>Featured Items</h1></center>
    <center><p className='font-dis-fea-2 mb-3'>There are many variations of passages of Lorem Ipsum available</p></center>
    <div className="row">
      <div className='featured'>
       {shoesdata}
       </div>
      <Link to="/productgrid">More products</Link>
    </div>
   </div>
  )
}
export default Featured