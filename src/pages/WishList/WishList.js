import React from 'react';
import classNames from 'classnames/bind';
import '~/Components/GlobalStyles'
import styles from './WishList.module.scss';
import { DataGrid } from '@mui/x-data-grid';
// MUI v5
import { Container, Box, Typography, Button, TextField, IconButton } from '@mui/material';

import WishListTable from './WishListData';


const cx = classNames.bind(styles);
function WishList() {
  return (
    // <Container className={cx('wishlist-container')}>
      <Container sx={{mb: '24px'}}>
      <Typography variant='h3' sx={{mt: 3, mb: 2, fontWeight:'bold', fontSize: '24px'}}>WISH LIST</Typography>

      <WishListTable />
    </Container>
  )
}

export default WishList

