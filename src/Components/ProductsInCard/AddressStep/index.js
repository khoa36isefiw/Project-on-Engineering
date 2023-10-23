import {
    Box,
    Container,
    Typography,
    Stack,
    InputLabel,
    MenuItem,
    Grid,
    Select,
    Checkbox,
    FormControlLabel,
    FormControl,
    Paper,
    Button,
    IconButton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import styles from './AddressStep.module.scss';
import classNames from 'classnames/bind';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DialerSip } from '@mui/icons-material';
import ChooseAddress from './ChooseAddress';
const cx = classNames.bind(styles);

function AddressStep() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ height: '100%' }}>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                {/* delivery address*/}
                <Box>
                    <Typography variant="body1">
                        Choose a delivery address:
                    </Typography>
                    {/* Choose address */}
                    <ChooseAddress />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Use the delivery address as the billing address."
                    />
                </Box>

                {/* billing address */}
                <Box>
                    <Box sx={{ ml: 29 }}>
                        <Typography variant="body1">
                            Choose a billing address:
                        </Typography>

                        <ChooseAddress />
                    </Box>
                </Box>
            </Stack>

            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}
            >
                <Box>
                    <ShowDeliveryInformation />
                </Box>
                <Box>
                    <ShowDeliveryInformation />
                </Box>
            </Stack>
            <Button sx={{mt: 2}} variant='contained'>Add A New Address</Button>
        </Box>
    );
}
export default AddressStep;



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function ShowDeliveryInformation() {
    return (
        <Box sx={{ border: '1px solid #ebebeb', width: '500px', p: 2 }}>
            <Typography variant="h4" gutterBottom>
                YOUR DELIVERY ADDRESS
            </Typography>
            <Box sx={{ border: '1px solid #ebebeb' }}></Box>
            <Typography variant="body2" mt={2}>
                Luna Kei
            </Typography>
            <Typography variant="body2">Japan HCMUTE</Typography>
            <Typography variant="body2">
                Đệ Nhị Số 2 Võ Văn Ngân Đệ Tam Số 3 Võ Văn Ngân
            </Typography>
            <Typography variant="body2">
                HCMUTE Vip Pro Max, Alabama 09982
            </Typography>
            <Typography variant="body2">United States</Typography>
            <Typography variant="body2">0123</Typography>
            <Typography gutterBottom variant="body2">
                0123
            </Typography>
            <Button variant="contained" endIcon={<ArrowForwardIosIcon />}>
                Update
            </Button>
        </Box>
    );
}
