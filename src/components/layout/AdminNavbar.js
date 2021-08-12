import React, { Component } from 'react';
import { AppBar,  Grid, IconButton, Toolbar } from '@material-ui/core';
import logo from "../../images/admec-logo.jpg";
import { Link } from "react-router-dom";
import {  PowerSettingsNew } from '@material-ui/icons'

 class AdminNavbar extends Component {
    render() {
        return (
            <div className="header">
                <AppBar position="static" />
                 <Toolbar className="nav-head">
                <Grid container alignItems="center">
                    <Grid item  >
                        <Link to='/admin/dashboard' className='center'>
                            <img className='headerLogo' src={logo} alt='logo' />
                        </Link>
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item >
                         <div className="admin-info">
                          <h5>Welcome <span>Wasim</span></h5>
                        <div className='user-img btn btn-floating pink lighten-2 z-depth-0'>MW</div>
                         <IconButton>
                            <PowerSettingsNew />
                        </IconButton>
                        </div>
                    </Grid>
                </Grid>
            </Toolbar>
            </div>
        )
    }
}
export default AdminNavbar;