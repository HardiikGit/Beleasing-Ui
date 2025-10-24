import { FaRightLong } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';

function NewCar() {
 return (
  <div className='NewCarsSection'>
   <div className="container">
    <div className="row">
     <div className="col-lg-12">
      <div className="Second-Heading d-flex align-items-center justify-space-between">
       <div className="SubHeading">
        <h2>CHOOSE FROM 1,200 NEW CARS</h2>
       </div>
       <div className="See-All">
        <a href="#" className='d-flex align-items-center'>See All <FaRightLong /> </a>
       </div>
      </div>
      <div className="NewCarsCollection d-flex align-items-center justify-space-between flexwrap">
       <div className="NewCar-Wrapper">
        <div className="NewCar-Image">
         <img src="/bmv.webp" className='img-cover' alt="" />
        </div>
        <div className="Box-fl">
         <div className="CarImage-Name">
          <h3>Bmw Commando Ipsum</h3>
         </div>
         <div className="Check-Details">
          <a href="#" className='d-flex align-items-center justify-space-between'>
           Check Details <FaArrowRightLong />
          </a>
         </div>
        </div>
       </div>
       <div className="NewCar-Wrapper">
        <div className="NewCar-Image">
         <img src="/ford.webp" className='img-cover' alt="" />
        </div>
        <div className="Box-fl">
         <div className="CarImage-Name">
          <h3>Ford Enim Nibh Litora</h3>
         </div>
         <div className="Check-Details">
          <a href="#" className='d-flex align-items-center justify-space-between'>
           Check Details <FaArrowRightLong />
          </a>
         </div>
        </div>
       </div>
       <div className="NewCar-Wrapper">
        <div className="NewCar-Image">
         <img src="/lamb.webp" className='img-cover' alt="" />
        </div>
        <div className="Box-fl">
         <div className="CarImage-Name">
          <h3>Lamborghini Rutrum Libero</h3>
         </div>
         <div className="Check-Details">
          <a href="#" className='d-flex align-items-center justify-space-between'>
           Check Details <FaArrowRightLong />
          </a>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default NewCar;