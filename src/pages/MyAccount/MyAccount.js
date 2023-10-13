import React from 'react';
import classNames from 'classnames/bind';
import { Container, Box, Typography } from '@mui/material';
import '~/Components/GlobalStyles'
import styles from './MyAccount.module.scss';

const cx = classNames.bind(styles);

function MyAccount() {
  return (
    <Box className={cx('my-account-container')}>
      <Box>
        <Typography variant="h3">MY ACCOUNT</Typography>
        <Typography variant="h6">Login</Typography>

      </Box>
    </Box>
  );
}

export default MyAccount;