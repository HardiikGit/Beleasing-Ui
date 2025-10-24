import { FaRightLong } from 'react-icons/fa6';


function PureNext() {
 return (
  <div className="row align-items-center">
   <div className="col-lg-4">
    <div className="Next-Gen d-flex flexcolumn">
     <div className="SubHeading">
      <h2>RENTING IS PURE CONVENIENCE</h2>
     </div>
     <div className="Para">
      <p>Maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas.</p>
     </div>
     <div className="Banner-Bton">
      <a className="Banner-Button align-items-center">
       Check Your Car <FaRightLong />
      </a>
     </div>
    </div>
   </div>
   <div className="col-lg-4">
    <div className="Mid-Image">
     <img src="/audi.webp" className='img-cover' alt="" />
    </div>
   </div>
   <div className="col-lg-4">

   </div>
  </div>
 )
}

export default PureNext;