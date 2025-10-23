function CarsCategory() {
 return (
  <div className="CarsCategorySection">
   <div className="container">
    <div className="row">
     <div className="col-lg-12 col-md-12">
      <div className="Cat-Boxes d-flex justify-space-between align-items-center flexwrap">
       <a href="#">
        <div className="Category-Childs d-flex align-items-center">
         <div className="Car-Image">
          <img src="/Sedan.png" className="img-cover" alt="" />
         </div>
         <div className="Car-Content">
          <div className="Heading-Title">
           <h3>Sedan</h3>
          </div>
          <div className="Para">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quibusdam!</p>
          </div>
         </div>
        </div>
       </a>
       <a href="#">
        <div className="Category-Childs d-flex align-items-center">
         <div className="Car-Image">
          <img src="/HetchBack.png" className="img-cover" alt="" />
         </div>
         <div className="Car-Content">
          <div className="Heading-Title">
           <h3>Hetchback</h3>
          </div>
          <div className="Para">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quibusdam!</p>
          </div>
         </div>
        </div>
       </a>
       <a href="#">
        <div className="Category-Childs d-flex align-items-center">
         <div className="Car-Image">
          <img src="/Combi.png" className="img-cover" alt="" />
         </div>
         <div className="Car-Content">
          <div className="Heading-Title">
           <h3>Combi</h3>
          </div>
          <div className="Para">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quibusdam!</p>
          </div>
         </div>
        </div>
       </a>
       <a href="#">
        <div className="Category-Childs d-flex align-items-center">
         <div className="Car-Image">
          <img src="/SUV.png" className="img-cover" alt="" />
         </div>
         <div className="Car-Content">
          <div className="Heading-Title">
           <h3>Suv</h3>
          </div>
          <div className="Para">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quibusdam!</p>
          </div>
         </div>
        </div>
       </a>
      </div>
     </div>
    </div>
   </div >
  </div >
 )
}

export default CarsCategory;