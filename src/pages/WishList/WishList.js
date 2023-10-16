import React from 'react';
import classNames from 'classnames/bind';
import '~/Components/GlobalStyles'
import styles from './WishList.module.scss';
import { DataGrid } from '@mui/x-data-grid';
// MUI v5
import { Container, Box, Typography, Button, TextField, IconButton } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// Test data 
function createData(removeIcon, productImage, unitPrice, stockStatus, shoppingButton) {
  return { removeIcon, productImage, unitPrice, stockStatus, shoppingButton };
}

const rowsTest = [
  createData(
    <IconButton>
      <DeleteIcon />
    </IconButton>,
    // <ProductImage imageSrc="path/to/image" />,
    <img src='https://i.pinimg.com/564x/57/af/3a/57af3a52b9cf2cc14b7e8de3dd4b5020.jpg ' style={{ width: '100px', height: '100px' }}/>,
    69.0,
    true,
    <Button variant="contained" startIcon={<AddShoppingCartIcon />}>
      Add to Cart
    </Button>
  ),

  createData(
    <IconButton>
      <DeleteIcon />
    </IconButton>,
    // <ProductImage imageSrc="path/to/image" />,
    <img src='https://i.pinimg.com/originals/2f/39/cb/2f39cbc5566366d03f7f00c36854f552.gif ' style={{ width: '100px', height: '100px' }}/>,
    20.0,
    true,
    <Button variant="contained" startIcon={<AddShoppingCartIcon />}>
      Add to Cart
    </Button>
  ),

  createData(
    <IconButton>
      <DeleteIcon />
    </IconButton>,
    // <ProductImage imageSrc="path/to/image" />,
    <img src='https://i.pinimg.com/564x/39/a4/a6/39a4a617bb1fa017a1593eccba7df149.jpg ' style={{ width: '100px', height: '100px' }}/>,
    99.0,
    true,
    <Button variant="contained" startIcon={<AddShoppingCartIcon />}>
      Add to Cart
    </Button>
  ),
  
];
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Remove Icon</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Unit Price</TableCell>
            <TableCell align="right">Stock Status</TableCell>
            <TableCell align="right">Shopping</TableCell>
          </TableRow>
        </TableHead>
        {/* removeIcon, productImage, unitPrice, stockStatus, shoppingButton */}
        <TableBody>
          {rowsTest.map((row) => (
            <TableRow
              key={row.unitPrice}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.removeIcon}
              </TableCell>
              <TableCell align="right">{row.productImage}</TableCell>
              <TableCell align="right">{row.unitPrice}</TableCell>
              <TableCell align="right">
                {row.stockStatus ? 'In Stock' : 'Sold Out'}
              </TableCell>
              <TableCell align="right">{row.shoppingButton}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const cx = classNames.bind(styles);
function WishList() {
  return (
    <Container className={cx('wishlist-container')}>
      <Typography variant='h4' sx={{mb: 3}}>WishList</Typography>

      <BasicTable/>
    </Container>
  )
}

export default WishList

