import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
// import '../GlobalStyles/GlobalStyles.scss';
import '~/Components/GlobalStyles';
import styles from './Header.module.scss';

// Icon
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyIcon from '@mui/icons-material/Key';

const cx = classNames.bind(styles);
const CustomizeButton = styled(Button)({
    marginRight: 4,
    marginLeft: 4,
    fontSize: '16px',
    color: 'inherit',

    position: 'relative',

    // make divider
    '&::after': {
        content: "''",
        position: 'absolute',
        top: '50%',
        right: '-4px',
        transform: 'translateY(-50%)',
        width: '1px',
        height: '80%',
        backgroundColor: '#474747',
    },

    // hide the last divider
    '&:last-child::after': {
        display: 'none',
    },
    '&:hover': {
        color: '#e34444',
    },
});

function HeaderDesign() {
    return (
        <AppBar position="fixed">
            <Toolbar className={cx('custom-header')}>
                <HomeIcon fontSize="large"></HomeIcon>
                {/* <Typography variant='h5' sx={{flexGrow: 1}} paddingLeft={2} align='left'>GIMME Store</Typography> */}
                <Typography
                    variant="h5"
                    sx={{ flexGrow: 1, fontSize: '16px' }}
                    paddingLeft={2}
                    align="left"
                    className={cx('running-text')}
                >
                    <span>GIMME STORE</span>
                </Typography>
                <Box>
                    <CustomizeButton component={Link} to="/my-account" startIcon={<PersonIcon />}>
                        My Account
                    </CustomizeButton>

                    <CustomizeButton
                        component={Link}
                        to="/my-wishlist"
                        startIcon={<FavoriteBorderIcon />}
                    >
                        Wish List
                    </CustomizeButton>

                    {/* <Button
                        className={cx('hearder-design_button')}
                        sx={{ marginRight: 2 }}
                        color="inherit"
                        startIcon={<FavoriteBorderIcon />}
                        component={Link}
                        to="/my-wishlist"
                    >
                        Wishlist
                    </Button> */}

                    <CustomizeButton
                        component={Link}
                        to="/checkout"
                        startIcon={<CheckCircleOutlineIcon />}
                    >
                        Checkout
                    </CustomizeButton>
                    {/* <Button
                        className={cx('hearder-design_button')}
                        sx={{ marginRight: 2 }}
                        color="inherit"
                        startIcon={<CheckCircleOutlineIcon />}
                        component={Link}
                        to="/checkout"
                    >
                        Checkout
                    </Button> */}

                    <CustomizeButton component={Link} to="/signin" startIcon={<KeyIcon />}>
                        Sign In
                    </CustomizeButton>

                    {/* <Button
                        className={cx('hearder-design_button')}
                        color="inherit"
                        startIcon={<KeyIcon />}
                        component={Link}
                        to="/signin"
                    >
                        Sign In
                    </Button> */}
                </Box>
            </Toolbar>{' '}
            {/* Corrected component name */}
        </AppBar>
    );
}

export default HeaderDesign;

// draw to recover

// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
// import { Link } from 'react-router-dom';
// import classNames from 'classnames/bind';
// import '../GlobalStyles/GlobalStyles.scss';
// import styles from './Header.module.scss';

// // Icon
// import PersonIcon from '@mui/icons-material/Person';
// import HomeIcon from '@mui/icons-material/Home';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import KeyIcon from '@mui/icons-material/Key';

// const cx = classNames.bind(styles);
// function HeaderDesign() {
//     return (
//         <AppBar position="fixed">
//             <Toolbar className={cx('custom-header')}>
//                 <HomeIcon fontSize="large"></HomeIcon>
//                 {/* <Typography variant='h5' sx={{flexGrow: 1}} paddingLeft={2} align='left'>GIMME Store</Typography> */}
//                 <Typography
//                     variant="h5"
//                     sx={{ flexGrow: 1 }}
//                     paddingLeft={2}
//                     align="left"
//                     className={cx('running-text')}
//                 >
//                     <span>GIMME Store</span>
//                 </Typography>
//                 <Box>
//                     <Button
//                         sx={{ marginRight: 2 }}
//                         className={cx('hearder-design_button')}
//                         color="inherit"
//                         startIcon={<PersonIcon />}
//                         component={Link}
//                         to="/my-account"
//                     >
//                         My Account
//                     </Button>

//                     <Button
//                         className={cx('hearder-design_button')}
//                         sx={{ marginRight: 2 }}
//                         color="inherit"
//                         startIcon={<FavoriteBorderIcon />}
//                         component={Link}
//                         to="/my-wishlist"
//                     >
//                         Wishlist
//                     </Button>

//                     <Button
//                         className={cx('hearder-design_button')}
//                         sx={{ marginRight: 2 }}
//                         color="inherit"
//                         startIcon={<CheckCircleOutlineIcon />}
//                         component={Link}
//                         to="/checkout"
//                     >
//                         Checkout
//                     </Button>
//                     <Button
//                         className={cx('hearder-design_button')}
//                         color="inherit"
//                         startIcon={<KeyIcon />}
//                         component={Link}
//                         to="/signin"
//                     >
//                         Sign In
//                     </Button>
//                 </Box>
//             </Toolbar>{' '}
//             {/* Corrected component name */}
//         </AppBar>
//     );
// }

// export default HeaderDesign;
