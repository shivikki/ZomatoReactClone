import React from 'react'
import './Header.css'
import 'react-bootstrap-typeahead/css/Typeahead.css';
import TypeAheadDropDown from '../Dropdown/TypeAheadDropDown';
import Cities from '../../TestData/Cities';





function Header(props) {



  return (
    <div className='maxWidth header row'>

      <div className='col-lg-2 col-md-2 col-sm-12 '>
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt='zomato-logo'
          className='zomLogo'></img>
      </div>


      <div className='col-lg-7 col-md-12 col-sm-12'>
        <div className="input-group mb-3 searchBox ">
          <span className="input-group-text transparentBg dropIcon pr-2">
            <img src="/image/locationPin.png" height="30px" width="30px"
              alt="location pin"
            ></img>
          </span>


          <span id="locSpan" className='mt-2'>
            <TypeAheadDropDown iteams={Cities} />
          </span>



          <span className="input-group-text transparentBg dropIcon pr-2">
            <img src="/image/down.png" height="16px" width="16px" alt="down"
            ></img>
          </span>

          <span className="input-group-text transparentBg dropIcon pr-2">
            <img src="/image/find.png" height="25px" width="25px" alt="Search"
            ></img>

          </span>



          <input type="text" className="form-control locationInput inputTag" id="inputID"
            placeholder="Search for restrurant, cusine or dish" aria-label="Server" />
        </div>
      </div>

      <div className='col-lg-3 col-md-3 col-sm-12'>
        <a className='btn logBtn'>
          Login
        </a>
        <button className='btn logBtn'>
          Sign In
        </button>
      </div>



    </div>
  )
}

export default Header
