import  React from "react";
import classNames from "classnames/bind";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter} from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MailIcon from '@mui/icons-material/Mail';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

import styles from '../Footer/Footer.module.scss';

const cx = classNames.bind(styles);
function Footer() {
  return (
    <Box
      component="footer"
      className={cx('footer fixed-footer')}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Contact Us section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h5" gutterBottom className={cx('footer-title')} style={{ fontWeight: 'bold' }}>
              CONTACT US
            </Typography>
            <Box >
              <Stack direction='row' sx={{mb: 2}}>
                <Avatar sx={{mr: 2}} className={cx('footer-icon')}>
                  <LocationCityIcon />
                </Avatar>
                <Typography variant="body2" color="text.secondary" display='flex' alignItems={'center'} >
                  Số 1 Võ Văn Ngân
                </Typography>
              </Stack>
                
              <Stack direction={'row'} sx={{mb: 2}}>
                <Avatar sx={{mr: 2}} className={cx('footer-icon')}>
                  <MailIcon/>
                </Avatar>
                <Typography variant="body2" color="text.secondary" sx={{display:'flex', justifyContent:'flex-start' ,alignItems:'center'}}>
                  gimme.shoes@ute.vn
                </Typography>
              </Stack>

              <Stack direction={'row'} >
                <Avatar sx={{mr: 2}} className={cx('footer-icon')}>
                  <SmartphoneIcon/>
                </Avatar>
                <Typography variant="body2" color="text.secondary" sx={{display:'flex', justifyContent:'flex-start' ,alignItems:'center'}}>
                  +84 234 567 8901
                </Typography>
              </Stack>
            </Box>

            

          </Grid>
          
          {/* ABOUT US section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h5"  gutterBottom className={cx('footer-title')} style={{ fontWeight: 'bold' }}>
              ABOUT US
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are student come HCMUTE.
            </Typography>
          </Grid>

          {/* ACCOUNT section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom className={cx('footer-title')} style={{ fontWeight: 'bold' }}>
              ACCOUNT?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are student come HCMUTE.
            </Typography>
          </Grid>

          {/* Follow Us section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom className={cx('footer-title')} style={{ fontWeight: 'bold' }}> 
              FOLLOW US
            </Typography>
            <Box sx={{ display: 'flex'}} >
              <Link href="https://www.facebook.com/" sx={{  mr: 2}} target="_blank" color="inherit" >
                <Facebook  sx={{cursor: 'pointer', fontSize: 32}}  className={cx('footer-follow-icon')} />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                sx={{ pl: 1, pr: 1, mr: 2 }}
                target="_blank"
              >
                <Instagram sx={{cursor: 'pointer', fontSize: 32}} className={cx('footer-follow-icon')} />
              </Link>
              <Link href="https://www.twitter.com/" target="_blank" color="inherit">
                <Twitter sx={{cursor: 'pointer', fontSize: 32}} className={cx('footer-follow-icon')}/>
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright section */}
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center" >
            {"Copyright © "}
            <Link color="inherit" href="https://www.facebook.com/profile.php?id=100016889957630" target="_blank">
              Gimme Shoes
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;