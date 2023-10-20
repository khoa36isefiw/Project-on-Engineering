import React from 'react';
import {
    Box,
    Button,
    Paper,
    Grid,
    Typography,
    TextField,
    Chip,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import styles from './SignIn.module.scss';
import classNames from 'classnames/bind';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
const cx = classNames.bind(styles);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

// for person who don't have account
// function SignIn({ isCheckout }) {
function SignIn() {
    return (
        // <Box sx={{height:'100%'}} className={cx({ 'my-account-container': isCheckout })}>
        <Box sx={{ height: '100%' }} className={cx('my-account-container')}>
            {/*  sx={{minHeight: '600px'}} */}
            <Box sx={{ flexGrow: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Item sx={{ p: 2, height: '100%' }}>
                            <Typography
                                fontWeight={700}
                                className={cx('page-subheading')}
                                gutterBottom
                            >
                                Create an account
                            </Typography>
                            <Typography
                                variant="body1"
                                textAlign={'left'}
                                gutterBottom
                            >
                                Please enter your email address to create an
                                account.
                            </Typography>
                            <Typography
                                variant="body1"
                                textAlign={'left'}
                                gutterBottom
                            >
                                Email address
                            </Typography>
                            <TextField
                                fullWidth={true}
                                id="outlined-basic"
                                sx={{ mt: 1 }}
                                label="Email"
                                variant="outlined"
                            />

                            {/* chỗ này cần check lại chiều ngang bất hợp lí */}
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 4,
                                    ml: 0,
                                    display: 'flex',
                                    width: '180px',
                                    justifyContent: 'flex-start', // Căn chỉnh nội dung bên trái
                                }}
                                startIcon={<AccountCircleIcon />}
                                component={Link}
                                to="/register-account"
                            >
                                Create Account
                            </Button>
                        </Item>
                    </Grid>

                    <Grid item xs={6}>
                        <Item sx={{ height: '100%', p: 2 }}>
                            <Typography
                                fontWeight={700}
                                className={cx('page-subheading')}
                                gutterBottom
                            >
                                Already Have An account
                            </Typography>
                            <Typography
                                variant="body1"
                                textAlign={'left'}
                                gutterBottom
                            >
                                Email address
                            </Typography>
                            <TextField
                                fullWidth={true}
                                id="outlined-basic"
                                sx={{ mt: 1 }}
                                label="Email"
                                variant="outlined"
                                gutterBottom
                            />
                            <Typography
                                variant="body1"
                                sx={{ textAlign: 'left', mt: 2 }}
                                gutterBottom
                            >
                                Password
                            </Typography>
                            <TextField
                                fullWidth={true}
                                id="outlined-basic"
                                sx={{ mt: 1 }}
                                label="Password"
                                type="password"
                                variant="outlined"
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 4,
                                    ml: 0,
                                    alignItems: 'flex-start',
                                    display: 'flex',
                                }}
                                startIcon={<LockIcon />}
                            >
                                Sign In
                            </Button>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default SignIn;
