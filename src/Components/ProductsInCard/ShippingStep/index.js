import React from 'react';
import DeliveryShip from '~/assets/images/delivery-truck.png';
import styles from './ShippingStep.module.scss';
import classNames from 'classnames/bind';
import { Typography, Box, Radio, Divider, Stack, Checkbox, Button } from '@mui/material';
import DeliveryTruck from '~/assets/images/delivery-truck.png';
import {Link} from 'react-router-dom'

const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    borderColor: 'text.primary',
    width: '100%',
    height: '100%',
};

const cx = classNames.bind(styles);
function ShippingStep() {
  const [checked, setChecked] = React.useState(true);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <Box>
            <Box sx={{ ...commonStyles, border: 1, p: 2 }}>
                <Typography variant="body1" fontWeight={'bold'}>
                    Choose a shipping option for this address: Em số 2 HCMUTE
                </Typography>
                <Box
                    sx={{
                        ...commonStyles,
                        border: 1,
                        display: 'flex',
                        alignItems: 'center',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,
                        bgcolor: 'background.paper',
                        color: 'text.secondary',
                        '& svg': {
                            m: 1.5,
                        },
                        '& hr': {
                            mx: 0.5,
                        },
                    }}
                >
                    <Radio
                        checked={selectedValue === 'a'}
                        onChange={handleChange}
                        value="a"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    <Divider orientation="vertical" flexItem borderColor="success" />
                    <Box sx={{ ml: 4, mr: 4 }}>
                        <img
                            src={DeliveryTruck}
                            alt="Shipping Truck"
                            sx={{ width: '50px', height: '50px' }}
                        />
                    </Box>
                    <Divider orientation="vertical" flexItem borderColor="success" />
                    <Typography variant="body1" sx={{ flexGrow: 4 }}>
                        <strong>My carrier</strong> Delivery next day!
                    </Typography>
                    <Divider orientation="vertical" flexItem borderColor="success" />
                    <Typography variant="body1" sx={{ flexGrow: 1 }}>
                        $2.00
                    </Typography>
                </Box>
              <Box>
                <Typography>Terms of service</Typography>
                <Stack direction={'row'} alignItems="center">
                  <Checkbox {...label}  />
                  <Typography>I agree to the terms of service and will adhere to them unconditionally.</Typography>
                </Stack>
                <Button component={Link} to="/policy">
    Read the Terms of Service
</Button>
              </Box>

            </Box>
        </Box>
    );
}

export default ShippingStep;
