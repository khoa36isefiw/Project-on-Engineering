import React, {useState} from 'react';
import classNames from 'classnames/bind';
import { Typography, Button, Box, Container, Stack, IconButton, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, ShoppingCartOutlined as ShoppingCartIcon } from '@mui/icons-material';
import DividerDesign from '../DividerDesign/DividerDesign';
import styles from './GimmeMenu.module.scss';
import  '../GlobalStyles/GlobalStyles.scss';

const cx = classNames.bind(styles);
function GimmeMenu() {
  // show search field when user hover the pointer to search icon
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const handleSearchHover = () => {
    setIsSearchHovered(true);
  };

  const handleSearchHoverExit = () => {
    setIsSearchHovered(false);
  };

  return (
    <Container className={cx('gimme-mainnav_wrapper')}>
      <DividerDesign />
      <Box className={cx('gimme_mainnav')} >
        <Box sx={{ display: 'flex', mr: 12}}>
          <Stack direction="row" spacing={8} className={cx('menu-list-item')}>
            <Link color="inherit" component={Link} to="/"  className={cx('menu-child-item')}>
              HOME
            </Link>
            <Link color="inherit" component={Link} to="/shop" className={cx('menu-child-item')}>
              SHOP
            </Link>
            <Link color="inherit" component={Link} to="/blog" className={cx('menu-child-item')}>
              BLOG
            </Link>
            <Link color="inherit" component={Link} to="/contact" className={cx('menu-child-item')}>
              CONTACT
            </Link>
          </Stack>
        </Box>

        <Box sx={{ display: 'flex', justifyContent:'center'}} >
          <Box 
              sx={{ marginRight: 2, 
                justifyContent:'center', 
                alignItems:'center', 
                display: 'flex', 
                position: 'relative',
                width: isSearchHovered ? '100%' : 'auto',
              }}
              className={cx('menu-vertical-line')}
              onMouseEnter={handleSearchHover}
              onMouseLeave={handleSearchHoverExit}
          >
              {isSearchHovered && (
                <input placeholder="Search..." className={cx('search-input')} />
              )}
              <IconButton color="inherit" component={Link} to="/search">
                <SearchIcon />
              </IconButton>
          </Box >
            
          {/* card item */}
          <IconButton color="inherit" component={Link} to="/cart">
            <Badge badgeContent={0} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Box>
      <DividerDesign />
    </Container>
  );
}

export default GimmeMenu;
