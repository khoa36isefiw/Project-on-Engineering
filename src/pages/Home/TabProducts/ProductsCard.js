// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import { Button } from '@mui/material';
// import Box from '@mui/material/Box';
// import Switch from '@mui/material/Switch';
// import Paper from '@mui/material/Paper';
// import Zoom from '@mui/material/Zoom';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
// import GlobalStyles from '~/Components/GlobalStyles';
// import CheckIcon from '@mui/icons-material/Check';
// import CircularProgress from '@mui/material/CircularProgress';
// import Rating from '@mui/material/Rating';
// const CustomTooltip = styled(({ className, ...props }) => (
//     <Tooltip {...props} arrow classes={{ popper: className }} placement="top" />
// ))(({ theme }) => ({
//     [`& .${tooltipClasses.arrow}`]: {
//         color: 'var(--icon-hover)',
//     },
//     [`& .${tooltipClasses.tooltip}`]: {
//         backgroundColor: 'var(--icon-hover)',
//         fontSize: 14,
//     },
// }));

// export default function RecipeReviewCard() {
//     const navigate = useNavigate();
//     const [hoverCard, setHoverCard] = useState(false);
//     const [checkAddToWishList, setCheckAddToWishList] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [valueRating, setValueRating] = useState(5);

//     // mouse enter and leave event handlers
//     const handleHover = () => {
//         setHoverCard(true);
//     };

//     const handleUnhover = () => {
//         setHoverCard(false);
//     };

//     // handle adding product to the wish list
//     const handleAddProductToWishList = () => {
//         setIsLoading(true);
//         setTimeout(() => {
//             setCheckAddToWishList(true);
//             setIsLoading(false);
//         }, 2000);
//     };

//     // handle navigating to the wishlist page
//     const handleNavigateToWishlist = () => {
//         navigate('/my-wishlist');
//     };

//     return (
//         <Box>
//             <Card
//                 sx={{
//                     maxWidth: 270,
//                     maxHeight: 280,
//                     cursor: 'pointer',
//                     position: 'relative',
//                     transformStyle: 'preserve-3d',
//                     transform: 'rotateY(0deg)',
//                     transition: 'transform 0.3s ease-in-out',
//                     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//                 }}
//                 onMouseEnter={handleHover}
//                 onMouseLeave={handleUnhover}
//             >
//                 <CardMedia
//                     component="img"
//                     height="194"
//                     image="https://www.bike-discount.de/media/image/6f/89/4b/adidas_Terrex-Free-Hiker-2-Low-GTX-Wanderschuhe_IG5459_2.jpg"
//                     alt="Paella dish"
//                     style={{ objectFit: 'contain', 
//                     width:"95%",
//                     margin: '0 auto',
//                  }}
//                 />

//                 <CardActions disableSpacing sx={{ display: 'block' }}>
//                     <Zoom in={hoverCard}>
//                         <Box>
//                             <Button fullWidth variant="contained">
//                                 <AddShoppingCartIcon sx={{ mr: 2, fontSize: '20px' }} />
//                                 <Typography sx={{ fontSize: '16px' }}>Add to Cart</Typography>
//                             </Button>
//                         </Box>
//                     </Zoom>
//                     <Zoom in={hoverCard} style={{ transitionDelay: hoverCard ? '500ms' : '0ms' }}>
//                         <Box
//                             sx={{
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 justifyContent: 'space-around',
//                                 mt: '8px',
//                                 mb: '2px',
//                             }}
//                             onClick={handleAddProductToWishList}
//                         >
//                             {isLoading ? (
//                                 <CircularProgress size={20} />
//                             ) : checkAddToWishList ? (
//                                 <IconButton
//                                     aria-label="added to favorites"
//                                     onClick={handleNavigateToWishlist}
//                                 >
//                                     <CustomTooltip title="Browse WishList">
//                                         <CheckIcon
//                                             sx={{
//                                                 fontSize: '20px',
//                                                 '&:hover': {
//                                                     color: 'var( --icon-hover)',
//                                                 },
//                                             }}
//                                         />
//                                     </CustomTooltip>
//                                 </IconButton>
//                             ) : (
//                                 <IconButton aria-label="add to favorites">
//                                     <CustomTooltip title="Add to Wish List">
//                                         <FavoriteIcon
//                                             sx={{
//                                                 fontSize: '20px',
//                                                 '&:hover': {
//                                                     color: 'var( --icon-hover)',
//                                                 },
//                                             }}
//                                         />
//                                     </CustomTooltip>
//                                 </IconButton>
//                             )}
//                             <IconButton aria-label="Quick View">
//                                 <CustomTooltip title="Quick View">
//                                     <VisibilityIcon
//                                         sx={{
//                                             fontSize: '20px',
//                                             '&:hover': {
//                                                 color: 'var( --icon-hover)',
//                                             },
//                                         }}
//                                     />
//                                 </CustomTooltip>
//                             </IconButton>
//                         </Box>
//                     </Zoom>
//                 </CardActions>
//             </Card>
//             <Box
//                 maxWidth={'270px'}
                
//                 sx={{textAlign:'center', mt: 1 }}
//             >
//                 <Typography sx={{fontSize: '15px'}}>
//                     ALPHABOOST V1 SHOES
//                 </Typography>
//                 <Typography sx={{fontSize: '15px'}}>
//                     <strong>3,600,000 VND</strong>
//                 </Typography>
//                 <Rating name="read-only" value={valueRating} readOnly size="large" />
//             </Box>
//         </Box>
//     );
// }



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardActions, CardMedia, Button, Typography, Zoom, IconButton, CircularProgress, styled } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import Rating from '@mui/material/Rating';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
const CustomTooltip = styled(({ className, ...props }) => (
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
function Test({ image, title, price, rating }) {
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

    return (
        <Box>
            <Card
                sx={{
                    maxWidth: 270,
                    maxHeight: 280,
                    cursor: 'pointer',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    transform: 'rotateY(0deg)',
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                }}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            >
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt="Product Image"
                    style={{ objectFit: 'contain', width: '95%', margin: '0 auto' }}
                />

                <CardActions disableSpacing sx={{ display: 'block' }}>
                    <Zoom in={hoverCard}>
                        <Box>
                            <Button fullWidth variant="contained">
                                <AddShoppingCartIcon sx={{ mr: 2, fontSize: '20px' }} />
                                <Typography sx={{ fontSize: '16px' }}>Add to Cart</Typography>
                            </Button>
                        </Box>
                    </Zoom>
                    <Zoom in={hoverCard} style={{ transitionDelay: hoverCard ? '500ms' : '0ms' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                mt: '8px',
                                mb: '2px',
                            }}
                            onClick={handleAddProductToWishList}
                        >
                            {isLoading ? (
                                <CircularProgress size={20} />
                            ) : checkAddToWishList ? (
                                <IconButton aria-label="added to favorites" onClick={handleNavigateToWishlist}>
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
                                    />
                                </CustomTooltip>
                            </IconButton>
                        </Box>
                    </Zoom>
                </CardActions>
            </Card>
            <Box maxWidth={'270px'} sx={{ textAlign: 'center', mt: 1 }}>
                <Typography sx={{ fontSize: '15px' }}>{title}</Typography>
                <Typography sx={{ fontSize: '15px' }}>
                    <strong>{price}</strong>
                </Typography>
                <Rating name="read-only" value={valueRating} readOnly size="large" />
            </Box>
        </Box>
    );
}



export default function RecipeReviewCard() {
    return (
        <Box display="flex" sx={{ justifyContent: 'space-between' }}>
            <Test
                image="https://www.bike-discount.de/media/image/6f/89/4b/adidas_Terrex-Free-Hiker-2-Low-GTX-Wanderschuhe_IG5459_2.jpg"
                title="Jordan"
                price="3,600,000 VND"
                rating="4"
                sx={{ margin: '0 20px' }}
            />
            <Test
               image="https://res.cloudinary.com/dd4gcajeh/image/upload/v1698215220/Gimme-shoes-images/Adidas/adidas-rapidmove-trainers_udkzcn.jpg" 
               title="RAPIDMOVE TRAINER"
                price="3,200,000 VND" 
                rating ="3"
                sx={{ margin: '0 20px' }}
            />
            <Test
                image="https://www.bike-discount.de/media/image/6f/89/4b/adidas_Terrex-Free-Hiker-2-Low-GTX-Wanderschuhe_IG5459_2.jpg"
                title="Jordan"
                price="3,600,000 VND"
                rating="4"
                sx={{ margin: '0 10px' }}
            />
            <Test
                image="https://www.bike-discount.de/media/image/6f/89/4b/adidas_Terrex-Free-Hiker-2-Low-GTX-Wanderschuhe_IG5459_2.jpg"
                title="Jordan"
                price="3,600,000 VND"
                rating="5"
                sx={{ margin: '0 20px' }}
            />
           
        </Box>
    );
}