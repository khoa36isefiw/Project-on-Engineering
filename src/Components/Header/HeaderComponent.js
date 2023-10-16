import React from 'react';
import {AppBar, Toolbar, Typography, Button, Box} from '@mui/material';
import {Link} from 'react-router-dom'
import classNames from 'classnames/bind';
import  '../GlobalStyles/GlobalStyles.scss';
import styles from './Header.module.scss';


// Icon
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyIcon from '@mui/icons-material/Key';

const cx = classNames.bind(styles);
function HeaderDesign() {
  return (
    <AppBar position='fixed' >
        <Toolbar className={cx('custom-header')}> 
            <HomeIcon fontSize='large'></HomeIcon>
            {/* <Typography variant='h5' sx={{flexGrow: 1}} paddingLeft={2} align='left'>GIMME Store</Typography> */}
            <Typography variant='h5' sx={{ flexGrow: 1 }} paddingLeft={2} align='left' className={cx('running-text')}>
                <span>GIMME Store</span>
            </Typography>
            <Box >
                <Button 
                    sx={{marginRight: 2}} 
                    className={cx('hearder-design_button')}
                    color='inherit' 
                    startIcon={<PersonIcon/>}
                    component={Link}
                    to = '/my-account'
                >My Account</Button>

                <Button 
                    className={cx('hearder-design_button')}
                    sx={{marginRight: 2}} 
                    color='inherit' 
                    startIcon={<FavoriteBorderIcon/>}
                    component={Link}
                    to = '/my-wishlist'
                >Wishlist</Button>
                
                <Button 
                    className={cx('hearder-design_button')}
                    sx={{marginRight: 2}} 
                    color='inherit' 
                    startIcon={<CheckCircleOutlineIcon/>}
                    component={Link}
                    to = '/checkout'
                >Checkout</Button>
                <Button 
                    className={cx('hearder-design_button')}
                    color='inherit' startIcon={<KeyIcon/>}>Login</Button>
            </Box>
        </Toolbar> {/* Corrected component name */}
    </AppBar>
  )
}

export default HeaderDesign;