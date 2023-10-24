import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Container, Box, Typography, Button, TextField, styled } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import '~/Components/GlobalStyles';
import styles from './MyAccount.module.scss';

const cx = classNames.bind(styles);

const makeBorder = {
    bgcolor: 'background.paper',
    m: 1,
    borderColor: 'text.primary',
    width: '5rem',
    height: '5rem',
};
const CustomizeTypography = styled(Typography)({
    variant: 'h4',
    marginBottom: '8px',
});

function MyAccount() {
    return (
        // <Container className={cx('my-account-container')}>s
        <Container sx={{ mb: ' 24px' }}>
            <Box>
                <CustomizeTypography
                    variant="h4"
                    sx={{ mt: 3, mb: 2 ,fontWeight: 'bold', fontSize: '24px' }}
                >
                    MY ACCOUNT
                </CustomizeTypography>
                <CustomizeTypography variant="h5" fontSize="20px" sx={{mb: 2}}>
                    Login
                </CustomizeTypography>
                <Box className={cx('border-container')}>
                    <Box sx={{ mb: 2 }}>
                        <CustomizeTypography variant="body1" fontSize="18px">
                            Username or email address
                            <span className={cx('required')}>*</span>
                        </CustomizeTypography>
                        <TextField
                            id="input-text-user-name"
                            label=""
                            variant="outlined"
                            fullWidth={true}
                        />
                    </Box>

                    <Box>
                        <CustomizeTypography
                            variant="body1"
                            type="password"
                            sx={{ fontSize: '18px' }}
                        >
                            Password
                            <span className={cx('required')}>*</span>
                        </CustomizeTypography>
                        <TextField
                            id="input-text-password"
                            label=""
                            variant="outlined"
                            fullWidth={true}
                        />
                    </Box>

                    <Button variant="outlined" sx={{ mb: 2, mt: 2, fontSize: '16px' }}>
                        Login
                    </Button>
                    <CustomizeTypography
                        variant="body1"
                        sx={{ fontSize: '16px' }}
                        className={cx('recover-password')}
                    >
                        <NavLink to="/recover-password">Lost your Password?</NavLink>
                    </CustomizeTypography>
                </Box>
            </Box>
        </Container>
    );
}

export default MyAccount;

// draw for recovery code
// function MyAccount() {
//   return (
//     <Box className={cx('my-account-container')}>
//       <Box>
//         <CustomizeTypography variant="h4" gutterBottom sx={{mt: 3, fontWeight: 'bold'}}>MY ACCOUNT</CustomizeTypography>
//         <Typography variant="h6" gutterBottom>Login</Typography>
//           <Box className={cx('border-container')}>
//             <Box sx={{mb: 2}}>
//               <Typography variant="body1"  gutterBottom>
//                 Username or email address
//                 <span className={cx('required')}>*</span>
//               </Typography>
//               <TextField id="input-text-user-name" label="" variant="outlined"  fullWidth={true} />
//             </Box>

//             <Box>
//               <Typography variant="body1" type="password" gutterBottom>
//                 Password
//                 <span className={cx('required')}>*</span>
//               </Typography>
//               <TextField id="input-text-password" label="" variant="outlined"  fullWidth={true}/>
//             </Box>

//             <Button variant='outlined' sx={{mb: 2, mt: 2}}>Login</Button>
//             <Typography variant="body1" className={cx('recover-password')}>
//               <NavLink to="/recover-password" >Lost your Password?</NavLink>
//             </Typography>
//           </Box>
//       </Box>
//     </Box>
//   );
// }

// export default MyAccount;
