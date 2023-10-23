import React, {useState} from 'react';
import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    Typography
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import StoreIcon from '@mui/icons-material/Store';

function ContactInformation() {
    const [open, setOpen] = useState(false);
    const daysOfWeek = [
        { day: 'Monday', opening: '9:00 AM', closing: '21:00 PM' },
        { day: 'Tuesday', opening: '9:00 AM', closing: '21:00 PM' },
        { day: 'Wednesday', opening: '9:00 AM', closing: '21:00 PM' },
        { day: 'Thursday', opening: '9:00 AM', closing: '21:00 PM' },
        { day: 'Friday', opening: '9:00 AM', closing: '21:00 PM' },
        { day: 'Saturday', opening: '9:00 AM', closing: '21:00 PM' },
        { day: 'Sunday', opening: '9:00 AM', closing: '18:00 PM' },
    ];

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{
                width: '95%',
                maxWidth: '320px',
                bgcolor: 'background.paper',
                ml: '-14px',
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <StoreIcon />
                </ListItemIcon>
                <ListItemText primary="View full store hours" />
                {open ? <ExpandMore /> : <ExpandLess />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {daysOfWeek.map((day, index) => (
                        <ListItemButton key={index} sx={{ pl: 4, ml: '-10px' }}>
                            <ListItemIcon>
                                <AccessAlarmsIcon />
                            </ListItemIcon>
                            <ListItemText
                                sx={{ ml: '-10px' }}
                                primary={
                                    <Typography variant="body1">
                                        <strong>{day.day}</strong>: {day.opening} - {day.closing}
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </List>
    );
}

export default ContactInformation;
