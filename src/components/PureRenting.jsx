import { FaRightLong } from 'react-icons/fa6';
import { HiArrowSmRight } from 'react-icons/hi';


function PureNext() {
 return (
  <div className="row align-items-center">
   <div className="col-lg-4 col-md-6">
    <div className="Next-Gen d-flex flexcolumn">
     <div className="SubHeading">
      <h2>RENTING IS PURE CONVENIENCE</h2>
     </div>
     <div className="Para">
      <p>Maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas.</p>
     </div>
     <div className="Secondry-Button">
      <a href='/CheckYourCar' className="align-items-center">
       Check Your Car <FaRightLong />
      </a>
     </div>
    </div>
   </div>
   <div className="col-lg-4 col-md-6">
    <div className="Mid-Image">
     <img src="/audi.webp" className='img-cover' alt="" />
    </div>
   </div>
   <div className="col-lg-4 col-md-12">
    <div className="RenyList">
     <ul className="ListRental d-flex flexcolumn">
      <li className="Rental d-flex align-items-center">
       <div className="ArrowRight d-flex align-items-center justify-content-center">
        <HiArrowSmRight />
       </div>
       <div className="Description">
        <p>Service and full care included</p>
       </div>
      </li>
      <li className="Rental d-flex align-items-center">
       <div className="ArrowRight d-flex align-items-center justify-content-center">
        <HiArrowSmRight />
       </div>
       <div className="Description">
        <p>Possibility of changing the car.</p>
       </div>
      </li>
      <li className="Rental d-flex align-items-center">
       <div className="ArrowRight d-flex align-items-center justify-content-center">
        <HiArrowSmRight />
       </div>
       <div className="Description">
        <p>Predictable costs of operating the car</p>
       </div>
      </li>
     </ul>
    </div>
   </div>
  </div>
 )
}

export default PureNext;