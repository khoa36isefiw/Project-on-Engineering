import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Card,
    CardActions,
    CardMedia,
    Button,
    Typography,
    Zoom,
    IconButton,
    CircularProgress,
    styled,
    TableCell,
    TextField,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import Rating from '@mui/material/Rating';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export const CustomTypography = styled(Typography)(({ fontSize, fontWeight }) => ({
    fontSize: fontSize || '16px',
    fontWeight: fontWeight || 'normal',
}));

export const CustomizeTableCell = styled(TableCell)(({}) => ({}));

export const CustomizeTextField = styled(TextField)(
    ({ fullWidth, id, label, mt, variant, inputFontSize, labelFontSize }) => ({
        // fullWidth: fullWidth || true,
        width: fullWidth ? '100%' : 'auto',
        id: id || 'outlined-basic',
        marginTop: mt || '8px',
        '& label': {
            fontSize: labelFontSize || '16px',
        },
        '& input': {
            fontSize: inputFontSize || '16px',
        },
        // make space for label in text field
        '& .MuiInputBase-root': {
            fontSize: '2rem',
        },
        label: label || 'Email',
        variant: variant || 'outlined',
    }),
);

// tooltip helps user knowing what is the icon/ something used for
export const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} placement="top" />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: 'var(--icon-hover)',
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'var(--icon-hover)',
        fontSize: 14,
    },
}));

export const CustomizeButton = styled(Button)(({ handleNavigateTo, fontSize }) => ({
    variant: 'contained',
    margin: '0 auto',
    display: 'flex',
    fontSize: fontSize || '15px',
    padding: '10px 50px 10px 50px',
    marginTop: '16px',
    fontWeight: 'bold',
    // bgcolor:'#fff',
    onClick: { handleNavigateTo },
}));

function DefaultLayout() {
    return <div></div>;
}

export default DefaultLayout;

// data for home page
export const products = [
    {
        id: 1,
        img: 'https://www.bike-discount.de/media/image/6f/89/4b/adidas_Terrex-Free-Hiker-2-Low-GTX-Wanderschuhe_IG5459_2.jpg',
        title: 'Jordan',
        price: '3,600,000',
        rating: 4,
        label: false,
    },
    {
        id: 2,
        img: 'https://res.cloudinary.com/dd4gcajeh/image/upload/v1698215220/Gimme-shoes-images/Adidas/adidas-rapidmove-trainers_udkzcn.jpg',
        title: 'RAPIDMOVE TRAINER',
        price: '3,200,000',
        rating: 3,
        label: false,
    },
    {
        id: 3,
        img: 'https://res.cloudinary.com/dd4gcajeh/image/upload/v1698216174/Gimme-shoes-images/Adidas/if2649_wht_01_vkqpnt.jpg',
        title: 'FORUM LOW SHOES',
        price: '2,600,000',
        rating: 4,
        label: false,
    },
    {
        id: 4,
        img: 'https://res.cloudinary.com/dd4gcajeh/image/upload/v1698222786/Gimme-shoes-images/Puma/Suede%20Brand%20Love.jpg',
        title: 'Suede Brand Love',
        price: '2,350,000',
        rating: 4,
        label: true,
    },
];

// Make Products Card Item for Home Page
export function MakeProductsCard({
    image,
    title,
    price,
    rating,
    label,
    minWidthCard,
    maxHeightCard,
    imgHeight,
    imgWidth,
    marginLeft
}) {
    const navigate = useNavigate();
    const [hoverCard, setHoverCard] = useState(false);
    const [checkAddToWishList, setCheckAddToWishList] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [valueRating, setValueRating] = useState(rating);

    // mouse enter and leave event handlers
    const handleHover = () => {
        setHoverCard(true);
    };

    const handleUnhover = () => {
        setHoverCard(false);
    };

    // handle adding product to the wish list
    const handleAddProductToWishList = () => {
        setIsLoading(true);
        setTimeout(() => {
            setCheckAddToWishList(true);
            setIsLoading(false);
        }, 2000);
    };

    // handle navigating to the wishlist page
    const handleNavigateToWishlist = () => {
        navigate('/my-wishlist');
    };

    // handle navigating to the product detail page
    const handleNavigateToProductDetails = () => {
        navigate('/product-details');
    };

    return (
        <Box>
            <Card
                sx={{
                    minWidth: minWidthCard || 270,
                    maxHeight: maxHeightCard || 285,
                    cursor: 'pointer',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    transform: 'rotateY(0deg)',
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
                    mr: 2,
                }}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            >
                {label && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '0',
                            right: '0',
                            transform: 'translate(30%, -10%) rotate(45deg)',
                            backgroundColor: 'red',
                            color: 'white',
                            padding: '4px 16px',
                            fontWeight: 'bold',
                        }}
                    >
                        {/* {label} */}
                        Sale
                    </Box>
                )}

                <CardMedia
                
                
                    component="img"
                    height={ imgHeight || "194"}
                    image={image}
                    alt="Product Image"
                    style={{ objectFit: 'contain', width: imgWidth || '95%', margin: '0 auto' }}
                />

                <CardActions disableSpacing sx={{ display: 'block' }}>
                    <Zoom in={hoverCard}>
                        <Box>
                            <Button fullWidth variant="contained">
                                <AddShoppingCartIcon sx={{ mr: 2, fontSize: '16px' }} />
                                <Typography sx={{ fontSize: '14px' }}>Add to Cart</Typography>
                            </Button>
                        </Box>
                    </Zoom>
                    {/* appear after 0.5 of Add to Cart */}
                    <Zoom in={hoverCard} style={{ transitionDelay: hoverCard ? '500ms' : '0ms' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                
                                mb: '2px',
                            }}
                        >
                            {/*  */}
                            {isLoading ? (
                                <CircularProgress size={20} />
                            ) : checkAddToWishList ? (
                                <IconButton
                                    aria-label="added to favorites"
                                    onClick={handleNavigateToWishlist}
                                >
                                    <CustomTooltip title="Browse WishList">
                                        <CheckIcon
                                            sx={{
                                                fontSize: '20px',
                                                '&:hover': {
                                                    color: 'var( --icon-hover)',
                                                },
                                            }}
                                        />
                                    </CustomTooltip>
                                </IconButton>
                            ) : (
                                <IconButton aria-label="add to favorites">
                                    <CustomTooltip title="Add to Wish List">
                                        <FavoriteIcon
                                            sx={{
                                                fontSize: '20px',
                                                '&:hover': {
                                                    color: 'var( --icon-hover)',
                                                },
                                            }}
                                            onClick={handleAddProductToWishList}
                                        />
                                    </CustomTooltip>
                                </IconButton>
                            )}

                            <IconButton aria-label="Quick View">
                                <CustomTooltip title="Quick View">
                                    <VisibilityIcon
                                        sx={{
                                            fontSize: '20px',
                                            '&:hover': {
                                                color: 'var( --icon-hover)',
                                            },
                                        }}
                                        onClick={handleNavigateToProductDetails}
                                    />
                                </CustomTooltip>
                            </IconButton>
                        </Box>
                    </Zoom>
                </CardActions>
            </Card>
            <Box maxWidth={minWidthCard} sx={{ textAlign: 'center', mt: 1 }}>
                <Typography sx={{ fontSize: '15px' }}>{title}</Typography>
                <Typography sx={{ fontSize: '14px' }}>
                    <strong>{price} VND</strong>
                </Typography>
                <Rating name="read-only" value={valueRating} readOnly size="large" />
            </Box>

            {/* More items button */}
        </Box>
    );
}
