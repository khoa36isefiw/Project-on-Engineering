import React, { useState } from 'react';
import {
    FormControl,
    Select,
    MenuItem,
    OutlinedInput,
    Paper,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { names } from './data/TestData';
import { ITEM_HEIGHT, ITEM_PADDING_TOP, MenuProps } from './contants/TestValue';

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function ChooseAddress() {
    const theme = useTheme();
    const [personName, setPersonName] = useState('');

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                <Select
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) =>
                        selected ? selected : <em>Placeholder</em>
                    }
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="">
                        <em>Placeholder</em>
                    </MenuItem>
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default ChooseAddress;
