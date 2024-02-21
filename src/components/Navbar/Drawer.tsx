import React, { useState, KeyboardEvent, MouseEvent, useMemo } from 'react';
import Link from '@mui/material/Link';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const MenuDrawer = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const content = useMemo(
    () => [
      {
        id: 1,
        text: 'Главная',
        path: '/',
      },
      {
        id: 2,
        text: 'Поиск по акциям',
        path: '/filters',
      },
      {
        id: 3,
        text: 'Список акций',
        path: '/sales',
      },
      {
        id: 4,
        text: 'Список городов',
        path: '/cities',
      },
    ],
    []
  );

  const support = useMemo(
    () => [
      {
        id: 5,
        text: 'Тех. поддержка',
        path: '/support',
      },
    ],
    []
  );

  const styles = {
    textDecoration: 'none',
    color: 'black',
  };

  return (
    <React.Fragment key={'left'}>
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='menu'
        sx={{ mr: 2 }}
        onClick={toggleDrawer('left', true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={toggleDrawer('left', false)}
          onKeyDown={toggleDrawer('left', false)}
        >
          <List>
            {content.map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <Link sx={styles} component={RouterLink} to={item.path}>
                    <ListItemText> {item.text}</ListItemText>
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {support.map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <Link sx={styles} component={RouterLink} to={item.path}>
                    <ListItemText> {item.text}</ListItemText>
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default MenuDrawer;
