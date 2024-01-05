/* eslint-disable no-unused-vars */
import * as React from 'react';
import './style.css'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DraftsIcon from '@mui/icons-material/Drafts';
import MailIcon from '@mui/icons-material/Mail';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import PaidIcon from '@mui/icons-material/Paid';
import { Chip } from '@mui/material';

export default function SideBar() {
    return (
        <Box className='sideBar' sx={{ width: '100%', maxWidth: 260, bgcolor: 'background.paper', height: '100vh'}}>
            <nav>
                <span className='logo'>Vuexy</span>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                            <Chip label="New" color='error'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="E-mail" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <QuestionAnswerRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Chat" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PaidIcon />
                            </ListItemIcon>
                            <ListItemText primary="Invoice" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            <Divider />
        </Box>
    );
}