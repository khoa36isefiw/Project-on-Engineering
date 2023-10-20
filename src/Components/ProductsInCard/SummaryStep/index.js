import React from 'react';
import classNames from 'classnames/bind';
import '~/Components/GlobalStyles';
import styles from './SummaryStep.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';

// MUI v5
import {
    Container,
    Box,
    Typography,
    Button,
    TextField,
    IconButton,
    Tooltip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Stack,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: '1px solid #757575',
    flexGrow: 1,
}));

// Data Products are added to cart
function createData(
    productImage,
    description,
    unitPrice,
    stockStatus,
    quantity,
    totalPriceQuantity,
    removeIcon,
) {
    return {
        productImage,
        description,
        unitPrice,
        stockStatus,
        quantity,
        totalPriceQuantity,
        removeIcon,
    };
}

const calculateTotalPrice = () => {
    let totalPrice = 0;
    var quantity = 4;
    rowsTest.forEach((row) => {
        // Tính tổng giá trị cho từng sản phẩm
        totalPrice += row.unitPrice * quantity;
    });
    return totalPrice;
};

const rowsTest = [
    createData(
        // image product
        <img
            src="https://i.pinimg.com/originals/2f/39/cb/2f39cbc5566366d03f7f00c36854f552.gif "
            style={{
                width: '100px',
                height: '100px',
                borderRadius: '20px',
                border: '1px solid #333',
            }}
        />,
        // description of the product
        <Box>
            <Typography variant="body1">Gimme Shoes</Typography>
            <Typography variant="body2">SKU: UTE S1</Typography>
            <Typography variant="body2">
                Size : 41, Color : Orange Black
            </Typography>
        </Box>,
        // price of the product
        true,

        // status of the product
        20.0,

        // update the quantity
        <Box sx={{ width: 200 }}>
            <Item>4</Item>
            <Stack
                spacing={{ xs: 2, sm: 2 }}
                sx={{ mt: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
            >
                <Item>-</Item>
                <Item>+</Item>
            </Stack>
        </Box>,
        // total the price for each product
        <Typography variant="body1">80</Typography>,
        // icon remove product
        <Tooltip arrow title="Delete">
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>,
    ),
    createData(
        // image product
        <img
            src="https://i.pinimg.com/564x/57/af/3a/57af3a52b9cf2cc14b7e8de3dd4b5020.jpg  "
            style={{
                width: '100px',
                height: '100px',
                borderRadius: '20px',
                border: '1px solid #333',
            }}
        />,
        // description of the product
        <Box>
            <Typography variant="body1">Gimme Shoes</Typography>
            <Typography variant="body2">SKU: UTE S1</Typography>
            <Typography variant="body2">
                Size : 41, Color : Orange Black
            </Typography>
        </Box>,
        // status of the product
        true,
        // price of the prodcut
        20.0,
        // update the quantity
        <Box sx={{ width: 200 }}>
            <Item>4</Item>
            <Stack
                spacing={{ xs: 2, sm: 2 }}
                sx={{ mt: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
            >
                <Item>-</Item>
                <Item>+</Item>
            </Stack>
        </Box>,
        // total the price for each product
        <Typography variant="body1">80</Typography>,
        // icon remove product
        <Tooltip arrow title="Delete">
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>,
    ),
];

function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {/* show image */}
                        <TableCell align="left">Product</TableCell>

                        {/* Show: 
                            + Product name
                            + Producer
                            + Size: ??, Color: ?? */}
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left">Unit Price</TableCell>
                        {/* can increase the quantity of the product */}
                        <TableCell align="left">Quantity</TableCell>
                        <TableCell align="left">Total</TableCell>
                        <TableCell align="left">Remove Icon</TableCell>
                    </TableRow>
                </TableHead>
                {/* removeIcon, productImage, unitPrice, stockStatus, shoppingButton */}
                <TableBody>
                    {rowsTest.map((row) => (
                        <TableRow
                            key={row.unitPrice}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.productImage}
                            </TableCell>
                            <TableCell align="left">
                                {row.description}
                            </TableCell>
                            <TableCell align="left">
                                {row.stockStatus ? 'In Stock' : 'Sold Out'}
                            </TableCell>
                            <TableCell align="left">{row.unitPrice}</TableCell>
                            <TableCell align="left">{row.quantity}</TableCell>
                            <TableCell align="left">
                                {row.totalPriceQuantity}
                            </TableCell>
                            <TableCell align="left">{row.removeIcon}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function TestLastRows() {
    return (
        <Box sx={{ mt: 2, border: '1px solid #757575', borderRadius: '5px'}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableBody align="right">
                        <TableRow>
                            <TableCell rowSpan={4} />
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">
                                <Typography
                                    sx={{
                                        width: '300px',
                                        pr: '99px',
                                        display: 'inline-block',
                                    }}
                                >
                                    1.000.000.000
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tax</TableCell>
                            <TableCell align="right"></TableCell>
                            {/* <TableCell sx={{display: 'inline-block', width: '100px', textAlign: 'right' }}>
                69,69%
              </TableCell> */}
                            <TableCell align="right">
                                <Typography
                                    sx={{
                                        width: '300px',
                                        pr: '99px',
                                        display: 'inline-block',
                                    }}
                                >
                                    10%
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">
                                <Typography
                                    sx={{
                                        width: '300px',
                                        pr: '99px',
                                        display: 'inline-block',
                                    }}
                                >
                                    123
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

const cx = classNames.bind(styles);

function SummaryStep() {
    return (
        <Container>
            <BasicTable />
            <TestLastRows />
        </Container>
    );
}

export default SummaryStep;
