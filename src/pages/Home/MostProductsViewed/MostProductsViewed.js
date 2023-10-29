import React, { useState } from 'react';
import { Box, Tab, Typography, styled, Button, Divider } from '@mui/material';
import { CustomTypography } from '~/Layouts/DefaultLayout';

import { ArrowBackIos } from '@mui/icons-material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GridProducts, { ResponsiveGrid } from './GridProducts';

const ButtonContainer = styled(Button)({
    alignItems: 'center',
    justifyContent:'center'
});

export default function MostProductsViewed() {
    return (
        <Box sx={{ mt: 10 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
                <CustomTypography variant="h3" sx={{ fontSize: '24px', fontWeight: 'bold' }}>
                    MOST PRODUCTS VIEWED
                </CustomTypography>
                <Box >
                    <ButtonContainer variant='contained' sx={{mr: 2}}>
                        <ArrowBackIos sx={{ fontSize: '36px', marginRight:'-25%' }} />
                    </ButtonContainer>
                    <ButtonContainer variant='contained'>
                        <ArrowForwardIosIcon sx={{ fontSize: '36px', margin:'0 auto' }} />
                    </ButtonContainer>
                </Box>
            </Box>
            <Divider sx={{mt:2, mb:4}}/>
            {/* <GridProducts/> */}
            <ResponsiveGrid/>
        </Box>
    );
}





