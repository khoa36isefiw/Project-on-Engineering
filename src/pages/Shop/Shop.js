import React from 'react';
import {
    styled,
    Container,
    Box,
    Paper,
    Grid,
    Typography,
    Divider,
    IconButton,
} from '@mui/material';
import BrandInformation from './BrandInformation';
import PriceInformation from './PriceInformation';
import Color from './Color';

function Shop() {
    return (
        <Container>
            <BasicGrid />
        </Container>
    );
}

export default Shop;

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    fontSize: '16px',
}));

function BasicGrid() {
    return (
        <Container sx={{ flexGrow: 1, minHeight: '500vh', mt: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    {/* this box for category, filter products */}
                    <Box sx={{ border: '1px solid #333' }}>
                        <Typography
                            sx={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'center' }}
                        >
                            All Categories
                        </Typography>
                        <Divider sx={{ ml: 4, mr: 4 }} />
                        
                        {/* Filter by brand */}
                        <BrandInformation />
                        {/* Filter by Price */}
                        <PriceInformation/>

                        {/* Filter by Color */}
                        <Color/>
                    </Box>
                </Grid>

                {/* this box for item of website */}
                <Grid item xs={9}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        </Container>
    );
}
