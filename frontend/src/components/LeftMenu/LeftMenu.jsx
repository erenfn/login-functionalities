import React from 'react';
import { List, ListItemIcon, ListItemText, Divider, ListItemButton } from '@mui/material';
import {
  HomeOutlined as HomeIcon,
  SportsSoccerOutlined as SportsIcon,
  ListOutlined as ListIcon,
  MarkChatUnreadOutlined as ChatIcon,
} from '@mui/icons-material';
import './LeftMenu.css';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { text: 'Home', icon: <HomeIcon />, route: '/' },
  { text: 'GET FEEDBACK', title: true },
  { text: 'Feedback', icon: <ChatIcon /> },
  { text: 'Surveys', icon: <ListIcon /> },
];

function LeftMenu() {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    if (route) navigate(route);
  };

  return (
    <div className="left-menu">
      <List>
        {menuItems.map((item, index) => (
          item.title ? (
            <ListItemText key={index} primary={item.text} className="title" />
          ) : (
            <ListItemButton
              key={index}
              className="menu-item"
              onClick={() => handleNavigation(item.route)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          )
        ))}
      </List>
      <div className="bottom-menu">
        <Divider />
        <ListItemButton className="menu-item">
          <ListItemIcon>
            <SportsIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItemButton>
      </div>
    </div>
  );
}

export default LeftMenu;
