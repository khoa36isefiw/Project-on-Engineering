import React, {useState, useEffect, useContext} from 'react'

import {Container, Typography, Grid, Paper} from '@mui/material';


// Make drawer on the left-hand side 
// nó như 1 cái tab nằm ở bên trái
import {Box, Drawer, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox'; 

// reset css
import CssBaseline from '@mui/material/CssBaseline';

// customize styles for website
import { styled } from '@mui/system';

// Make toggle Dark/ Light styles
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {createTheme, ThemeProvider} from '@mui/material';
import HeaderDesign from '../../Components/Header/HeaderComponent';

function Home() {
  const MyDiv = styled('div')({
    backgroundColor: 'aliceblue',
    padding: 10,
    borderRadius: 20,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  })

  // make mode dark or light
  const [mode, setMode] = useState('light');
  const customTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const handleMode = () => {
      setMode(mode === 'light'? 'dark' : 'light');
  };


  return (
    <ThemeProvider theme={customTheme}>
      {/* <HeaderDesign/> */}

      <Container sx={{minHeight: '100vh', marginBottom:'100px'}}>
        {/* trinh duyet co su nhat quan */}
        <CssBaseline/>
          <Typography variant='h3' gutterBottom align='center'>
              Blog by ReactJS
          </Typography>

        
          
          

      </Container>
    </ThemeProvider>
   
  )
}

export default Home