import {
    Box,
    Button,
    Container,
    Divider,
    TextField,
    Typography,
    Grid,
    styled,
    Paper,
} from '@mui/material';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PropTypes from 'prop-types';
import { CustomTypography, CustomizeTextField } from '~/Layouts/DefaultLayout';
import CustomizeGridProfile from './CustomizeGridProfile';
import { Stack } from 'react-bootstrap';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CustomizeButtonPersonalAccount = styled(Button)(({pl = 15, pr = 15}) => ({
    marginTop: 4,
    paddingLeft: pl || 0,
    paddingRight: pr || 0,
    alignItems: 'center',
    marginLeft:99, 
    marginRight: 16,
    display: 'flex',
    justifyContent: 'center',
    fontSize: '14px',
    cursor: 'pointer',
}));

function PersonalAccount() {
    const [openDialog, setOpenDialog] = useState(false);

    const handleRegister = () => {
        // ??? bruh bruh???
        setOpenDialog(true);
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <Container sx={{ minHeight: '800px', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h4" sx={{ mt: 2, mb: 1 }}>
                Thông tin cá nhân
            </Typography>
            {/* input field */}

            <CustomizeGridProfile label={'First Name'} textField={'First Name'} />
            <CustomizeGridProfile label={'Last Name'} textField={'Last Name'} />
            <CustomizeGridProfile label={'Email'} textField={'Email'} />

            <Box display="flex" justifyContent={'center'} alignItems={'center'}>
                <CustomizeButtonPersonalAccount
                    variant="contained"
                    
                    onClick={handleOpenDialog}
                >
                    Save Profile
                </CustomizeButtonPersonalAccount>

                <CustomizeButtonPersonalAccount
                    variant="outlined"
                    sx ={{
                        pl: 4,
                        pr: 4,
                    }}
                    onClick={handleOpenDialog}
                >
                    Quay lại
                </CustomizeButtonPersonalAccount>
            </Box>
        </Container>
    );
}

export default PersonalAccount;
