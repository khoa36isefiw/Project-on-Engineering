import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import RecipeReviewCard from './TabProducts';
// call some components are defined
import { MakeProductsCard, CustomizeButton } from '~/Layouts/DefaultLayout';
import { products } from '~/Layouts/DefaultLayout';

function MakeProductsCardItem() {
    const navigate = useNavigate();

    const handleNavigateToShop = () => {
        navigate('/shop');
    };

    
    return (
        <Box sx={{ mt: 4 }}>
            <Box display="flex" sx={{ justifyContent: 'space-between' }}>
                {products.map((product) => (
                    <MakeProductsCard
                        key={product.id}
                        image={product.img}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                        label={product.label}
                        sx={{ margin: '0 20px' }}
                    />
                ))}
            </Box>
            <CustomizeButton variant="contained" onClick={handleNavigateToShop}>
                More Items
            </CustomizeButton>
        </Box>
    );
}


export default MakeProductsCardItem;
