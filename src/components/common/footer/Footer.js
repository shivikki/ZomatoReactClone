import { Stack } from '@mui/material';
import { useState } from 'react'
import "./Footer.css"
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CtryDrop from '../../CtryDrop/CtryDrop';
import LangDrop from './LangDrop/LangDrop';


const countryList = [
  {
    id: 1,
    ctry: "India",
    img: "/image/flags/india.png"
  },
  {
    id: 2,
    ctry: "Australia",
    img: "/image/flags/australia.png"
  },
  {
    id: 3,
    ctry: "Brazil",
    img: "/image/flags/brazil.png"
  },
  {
    id: 4,
    ctry: "Canada",
    img: "/image/flags/canada.png"
  },
  {
    id: 5,
    ctry: "Chile",
    img: "/image/flags/chile.png"
  },
  {
    id: 6,
    ctry: "Czech Republic",
    img: "/image/flags/czech-republic.png"
  },
  {
    id: 7,
    ctry: "Indonesia",
    img: "/image/flags/indonesia.png"
  },
  {
    id: 8,
    ctry: "Ireland",
    img: "/image/flags/ireland.png"
  },
  {
    id: 9,
    ctry: "Italy",
    img: "/image/flags/italy.png"
  },
  {
    id: 10,
    ctry: "Lebanon",
    img: "/image/flags/lebanon.png"
  },
  {
    id: 11,
    ctry: "Malaysia",
    img: "/image/flags/malaysia.png"
  },
  {
    id: 12,
    ctry: "New Zealand",
    img: "/image/flags/new-zealand.png"
  }
];

const langList = [
  "English", "Hindi", "French", "Spanish", "Polish", "Italian"
];







function Footer() {



  //popover starts

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  //popover ends

  //popover 2 starts

  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const open2 = Boolean(anchorEl2);
  const id2 = open ? 'simple-popover' : undefined;


  //popover ends

  //set country drop default value
  const [ctry, setCountry] = useState({
    id: 1,
    ctry: "India",
    img: "/image/flags/india.png"
  });

  let changeCtry = (obj) => {
    setCountry(obj);

  }

  const [lang,setlang]=useState('English')

  let changeLang=(obj)=>{
    setlang(obj);
  }


  return (
    <div className='setBg'>

      <div className='maxWidth p-4'>
        <div className='row'>
          <div className='floatLeft  disFlex col-lg-4 col-md-4 com-sm-4'>
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt='zomato-logo'
              className='zomLogo'></img>
          </div>

          <div className='alignRight col-lg-8 col-md-8 com-sm-8'>


            <div style={{ border: "1px solid rgb(181, 181, 181)", borderRadius: "5%", marginRight: "4rem" }} className="pr-4">
              <Button aria-describedby={id} className="ctryDrop" onClick={handleClick}>
                <span >
                  <img src={ctry.img} alt="flag" className="flagStyle" />
                </span>
                <span className='dropSelected'>{ctry.ctry}</span>
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
              >
                <Typography sx={{ p: 2 }}>
                  <CtryDrop countryList={countryList} changeCtry={changeCtry} />
                </Typography>
              </Popover>
            </div>


            {/* Lang dropdown */}

            <div>
              <Button aria-describedby={id2} variant="contained" onClick={handleClick2}>
                {lang}
              </Button>
              <Popover
                id={id2}
                open={open2}
                anchorEl={anchorEl2}
                onClose={handleClose2}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
              >
                <Typography sx={{ p: 2 }} className="cursorPointer">
                  <LangDrop langList={langList} changeLang={changeLang}/>
                </Typography>
              </Popover>
            </div>





          </div>

        </div>

      </div >
      <br /><br /><br /><br />
    </div >


  )
}

export default Footer
