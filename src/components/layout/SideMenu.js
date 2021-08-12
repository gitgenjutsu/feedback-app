import React from "react";
import logo from "../../images/admec-logo.jpg";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import PaletteIcon from "@material-ui/icons/Palette";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import CommentIcon from "@material-ui/icons/Comment";

function SideMenu() {
  return (
    <div className='side-menu pt-2'>
      <div className='logo-div'>
        <Link to='/admin/dashboard' className='center'>
          <img className='headerLogo' src={logo} alt='logo' />
        </Link>
      </div>
      <div className='user-panel'>
        <div className='user-img btn btn-floating pink lighten-1'>MW</div>
        <div className='user-info'>
          <h5>Mohd Wasim</h5>
          <p>admin</p>
        </div>
      </div>
      <div className='filter-box'>
        <ul>
          <li>
            <IconButton>
              <HomeIcon  />
            </IconButton>
            <label>Home</label>
          </li>
          <li>
            <IconButton>
              <ExpandLessIcon  />
            </IconButton>
            <label>Latest</label>
          </li>
          <li>
            <IconButton>
              <ExpandMoreIcon  />
            </IconButton>
            <label>Earliest</label>
          </li>
          <li>
            <IconButton>
              <LanguageIcon  />
            </IconButton>
            <label>Web Students</label>
          </li>
          <li>
            <IconButton>
              <PaletteIcon  />
            </IconButton>
            <label>Graphic Students</label>
          </li>
          <li>
            <IconButton>
              <VideoCallIcon  />
            </IconButton>
            <label>Multimedia Students</label>
          </li>

          <li>
            <IconButton>
              <CommentIcon  />
            </IconButton>
            <label>Suggestions</label>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SideMenu;
