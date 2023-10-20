import React, { Fragment } from 'react';
import styles from './BreadCrumb.scss';
import className from 'classnames/bind';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/material';

const cx = className.bind(styles);

// store about breadcrumbs path information
// show the current stage for the user who uses the website

const breadcrumbData = [
    { path: '/', name: 'Home' },
    { path: '/my-account', name: 'My Account' },
    { path: '/my-wishlist', name: 'Wish List' },
    {
        path: '/checkout',
        name: 'Checkout',
    },
    { path: '/signin', name: 'Sign In' },
    { path: '/register-account', name: 'Register Account' },
    { path: '/shop', name: 'Shop' },
    { path: '/recover-password', name: 'Recover Password' },
    { path: '/404', name: 'Page Not Found' },
];



function Breadcrumbs({ currentStepName }) {
    // get the current location
    const location = useLocation();
    const navigate = useNavigate();

    // Thêm một biến boolean để kiểm tra xem có phải là trang checkout hay không
    // const isCheckoutPage = location.pathname.startsWith('/checkout');
    // Gets a list of current breadcrumbs based on the current position of the page.
    const getCurrentBreadcrumbs = () => {
        const currentPath = location.pathname;
        const breadcrumbs = [];

        // Not the Home Page --> show Icon Home and Home Name
        // If the current path is Home Page --> hide both of them
        if (currentPath !== '/') {
            breadcrumbs.push(breadcrumbData[0]);
        }

        let path = '';
        const pathSegments = currentPath
            .split('/')
            // remove empty elements
            .filter((segment) => segment !== '');

        // loop each path segment
        for (let i = 0; i < pathSegments.length; i++) {
            // concatenate into the path variable
            //and then find the corresponding breadcrumb
            path += `/${pathSegments[i]}`;
            const breadcrumb = breadcrumbData.find(
                (item) => item.path === path,
            );
            // breadcrumb is true --> push into breadcrumbs array
            if (breadcrumb) {
                breadcrumbs.push(breadcrumb);
            }
        }

        return breadcrumbs;
    };

    const getBreadcrumbs = getCurrentBreadcrumbs();

    return (
        // need change Box --> Container
        <Box
            sx={{
                fontSize: '16px',
                display: 'flex',
                mt: 2,
                ml: 3,
                justifyContent: 'flex-start',
                alignItems: 'center',
                cursor: 'pointer',
            }}
        >
            {location.pathname !== '/' && (
                <HomeIcon
                    fontSize="16px"
                    color="action"
                    onClick={() => navigate('/')}
                />
            )}

            {/* Home > Path */}
            {getBreadcrumbs.map((breadcrumb, index) => (
                <Fragment key={index}>
                    <Link
                        to={breadcrumb.path}
                        className={
                            // location.pathname === breadcrumb.path
                            // ? 'breadcrumb-active'
                            cx('breadcrumb-active')
                        }
                    >
                        {breadcrumb.name}
                    </Link>
                    {/* for  2 steps of Menu: 
                            Home > Shop > GiayNam
                            */}
                    {/* {breadcrumb.path.startsWith('/checkout/step') && (
                            <span className={cx('breadcrumb-active')}>
                                {breadcrumb.name}
                            </span>
                        )} */}
                    {/* {index !== getBreadcrumbs.length - 1 && (
                        <span className="breadcrumb-arrow">&gt;</span>
                    )} */}

                    {/* Determines whether the current element 
                        is the last element in the breadcrumb list */}
                    {index !== getBreadcrumbs.length - 1 && (
                        <ArrowForwardIosIcon
                            fontSize="12px"
                            color="action"
                            sx={{ mx: 1 }}
                        />
                    )}
                </Fragment>
            ))}
        </Box>
    );
}

export default Breadcrumbs;
