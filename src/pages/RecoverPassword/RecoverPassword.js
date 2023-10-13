import React from 'react';
import classNames from 'classnames/bind';
import { Container, Box, Typography, Button, TextField } from '@mui/material';
import '~/Components/GlobalStyles'
import styles from './RecoverPassword.module.scss';

const cx = classNames.bind(styles);
function RecoverPassword() {
  return (
    <Box>
        <Box className={cx('my-account-container')}>
        <Box>
          <Typography variant="h4" gutterBottom sx={{mt: 5, fontWeight: 'bold'}}>MY ACCOUNT</Typography>
          <Typography variant="body1" gutterBottom>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</Typography>
          <TextField sx={{mb: 2, mt: 2}} id="input-text-password" label="UserName or Email" variant="outlined"  fullWidth={true}/>
          <Button 
            autoCapitalize='none'
            variant='outlined'
            sx={{
              mb: 2,
              mt: 2,
              color: 'grey', // Màu chữ là màu xám
              borderColor: 'grey', // Màu viền là màu xám
              '&:hover': {
                color: 'white', // Màu chữ khi hover là màu trắng
                backgroundColor: 'var(--primary)', // Màu nền khi hover là màu xám
                borderColor: 'grey', // Màu viền khi hover là màu xám
              },
            }}
            onClick = {() => {alert('xss attack lỏd :)))')}}
          >Recover Password</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default RecoverPassword