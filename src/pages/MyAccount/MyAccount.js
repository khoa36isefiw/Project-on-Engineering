import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Container, Box, Typography, Button, TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import '~/Components/GlobalStyles'
import styles from './MyAccount.module.scss';

const cx = classNames.bind(styles);

const makeBorder = {
  bgcolor: 'background.paper',
  m: 1,
  borderColor: 'text.primary',
  width: '5rem',
  height: '5rem',
};

function MyAccount() {
  return (
    <Box className={cx('my-account-container')}>
      <Box>
        <Typography variant="h4" gutterBottom sx={{mt: 5, fontWeight: 'bold'}}>MY ACCOUNT</Typography>
        <Typography variant="h6" gutterBottom>Login</Typography>
          <Box className={cx('border-container')}>
            <Box sx={{mb: 2}}>
              <Typography variant="body1"  gutterBottom>
                Username or email address
                <span className={cx('required')}>*</span>
              </Typography>
              <TextField id="input-text-user-name" label="" variant="outlined"  fullWidth={true} />
            </Box>
            

            <Box>
              <Typography variant="body1" type="password" gutterBottom>
                Password
                <span className={cx('required')}>*</span>
              </Typography>
              <TextField id="input-text-password" label="" variant="outlined"  fullWidth={true}/>
            </Box>
            
            <Button variant='outlined' sx={{mb: 2, mt: 2}}>Login</Button>
            <Typography variant="body1" className={cx('recover-password')}>
              <NavLink to="/recover-password" >Lost your Password?</NavLink>
            </Typography>
          </Box>
      </Box>
    </Box>
  );
}

export default MyAccount;



