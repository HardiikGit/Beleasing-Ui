import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { HiXMark } from 'react-icons/hi2';

function HeaderSection() {
  const [isToggled, setIsToggled] = useState(false)
  const [ishovered, setIsHovered] = useState(false)

  return (
    <header className="MainHeader">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-3 col-sm-12">
            <div className="Head-Logo d-flex align-items-center">
              <div className="Logo-Image">
                <a href="/">
                  <img src="/beleasing2.png" className="img-cover d-flex" alt="" />
                </a>
              </div>
              <div className="Logo-Name">
                <h4>Luxury Cars For You</h4>
              </div>
              <div className="HamBurg d-none">
                <button className='Toggle-Button d-flex' onClick={() => setIsToggled(!isToggled)}>
                  <HiOutlineBars3 />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-9 col-sm-12">
            <div className={`NavBar d-flex justify-content-end ${isToggled ? 'isOpen' : ''}`}>
              <ul className="Nav-fl d-flex align-items-center relative">
                <li className='X-Cross d-none absolute'>
                  <button className='Close-Nav'>
                    <HiXMark onClick={() => setIsToggled(!isToggled)} />
                  </button>
                </li>
                <li className="Nav-Items">
                  <a href="#">Home</a>
                </li>
                <li className="Nav-Items">
                  <a href="#" className='d-flex align-items-center'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>Offer<FaAngleDown className='Down-Pin' /></a>
                </li>
                <li className="Nav-Items">
                  <a href="#">About</a>
                </li>
                <li className="Nav-Items">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderSection;