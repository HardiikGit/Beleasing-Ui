import { FaRightLong } from 'react-icons/fa6';
import { IoStarSharp } from 'react-icons/io5';

function BannerSection() {
 return (
  <div className="BannerSection d-flex align-items-center justify-content-center">
   <div className="container">
    <div className="row">
     <div className="col-lg-12">
      <div className="Banner-Contant d-flex justify-space-between">
       <div className="Banner-Heading">
        <h1>WE'LL FIND FOR YOU THE <br /> BEST CAR FOR LEASING</h1>
       </div>
       <div className="Banner-Review">
        <div className="Review-Content d-flex align-items-center flexcolumn">
         <div className="Banner-Stars">
          <ul className="d-flex align-items-center">
           <li className="Stars"><IoStarSharp /></li>
           <li className="Stars"><IoStarSharp /></li>
           <li className="Stars"><IoStarSharp /></li>
           <li className="Stars"><IoStarSharp /></li>
           <li className="Stars"><IoStarSharp /></li>
          </ul>
         </div>
         <div className="Mid-Line"></div>
         <div className="Sales-Quality">
          <p>Sales-Quality</p>
         </div>
        </div>
       </div>
      </div>
      <div className="Banner-Bton">
       <button className="Banner-Button d-flex align-items-center">
        Check Your Car <FaRightLong />
       </button>
      </div>
      <div className="Purchase-Steps d-flex  flexwrap">
       <div className="O1">
        <p>1. Choose From 1200 New Cars</p>
       </div>
       <div className="O2">
        <p>2. Choose Equipment</p>
       </div>
       <div className="O3">
        <p>3. Contact Us</p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default BannerSection;