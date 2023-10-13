import React from 'react';
import classNames from 'classnames/bind';
import styles from './SubHeader.module.scss';
import { Typography, Button, Box, Container, Stack, Divider} from '@mui/material';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
// Icon
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const cx = classNames.bind(styles);

function SubHeader() {
  return (
    <Container>
        <Stack sx={{marginTop: 12, mb: 4}} direction="row" alignItems="center" justifyContent={'space-around'}>
          <Box className={cx('web-logo')}>
            <Link  to='/' title='GIMME SHOES'>
              <img src='https://t3.ftcdn.net/jpg/05/58/61/32/360_F_558613274_Z1zbjnHZKjpnTvvsjfZzYXk2TIeUl54a.jpg' alt='Logo' />
            </Link>
          </Box>
          <Stack direction="row" alignItems="center"  >
            <Avatar sx={{ marginRight: 2}} className={cx('subHeader-icon')} >
              <LocalShippingIcon />
            </Avatar>
            <Stack direction="column" spacing={0} >
              {/* body1 makes the right font size */}
              <Typography variant='body1' align='left' >
                FREE DELIVERY WORLDWIDE
              </Typography>
              <Typography variant='body1' align='left'  >
                On order over $100
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center"  >
            <Avatar sx={{ marginRight: 2}} className={cx('subHeader-icon')} >
              <CloudUploadIcon />
            </Avatar>
            <Stack direction="column" spacing={0} >
              <Typography variant='body1' align='left'>
                UP TO 20% OFF COSY LAYERS
              </Typography>
              <Typography variant='body1' align='left'>
                Lorem ipsum dolor sit amet
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center"  >
            <Avatar sx={{ marginRight: 2}} className={cx('subHeader-icon')} >
              <CardGiftcardIcon />
            </Avatar>
            <Stack direction="column" spacing={0} >
              <Typography variant='body1' align='left'>
                BUY 1 GET 1 FREE
              </Typography>
              <Typography variant='body1' align='left'>
                On order over $100
              </Typography>
            </Stack>
          </Stack>
      </Stack>
    </Container>
  );
}

export default SubHeader;

