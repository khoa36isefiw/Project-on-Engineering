import { TableCell, Typography, TextField, styled } from '@mui/material';
import React from 'react';

export const CustomTypography = styled(Typography)(({ fontSize, fontWeight }) => ({
    fontSize: fontSize || '16px',
    fontWeight: fontWeight || 'normal',
}));

export const CustomizeTableCell = styled(TableCell)(({}) => ({}));

// export const CustomTextField = styled(TextField)(({ fullWidth, id, sx, label, variant }) => ({
//     fullWidth: fullWidth || true,
//     id: id || 'outlined-basic',
//     sx: {
//         mt: sx || 1,
//         '& label': {
//             fontSize: sx ||'16px',
//         },
//         '& input': {
//             fontSize: sx ||'16px',
//         },
//     },
//     label: label || 'Email',
//     variant: variant || 'outlined',
// }));

export const CustomizeTextField = styled(TextField)(({ fullWidth, id, label, mt, variant, inputFontSize, labelFontSize }) => ({
    // fullWidth: fullWidth || true,
    width: fullWidth? '100%' : 'auto',
    id: id || 'outlined-basic',
      marginTop: mt || '8px',
      '& label': {
        fontSize: labelFontSize || '16px',
      },
      '& input': {
        fontSize: inputFontSize || '16px',
      },
      // make space for label in text field
      '& .MuiInputBase-root': {
        fontSize: '2rem',
      },
    label: label || 'Email',
    variant: variant || 'outlined',
  }));

function DefaultLayout() {
    return <div></div>;
}

export default DefaultLayout;
