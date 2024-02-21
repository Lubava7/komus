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

// import { Sales, History, Support, Cities, Main, Search } from 'src/ui/icons';
import { ReactComponent as History } from 'src/ui/icons/history.svg';
import { ReactComponent as Sales } from 'src/ui/icons/sales.svg';
import { ReactComponent as Support } from 'src/ui/icons/support.svg';
import { ReactComponent as Cities } from 'src/ui/icons/cities.svg';
import { ReactComponent as Main } from 'src/ui/icons/main.svg';
import { ReactComponent as Search } from 'src/ui/icons/search.svg';

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
        icon: <Main />,
      },
      {
        id: 2,
        text: 'Поиск по акциям',
        path: '/filters',
        icon: <Search />,
      },
      {
        id: 3,
        text: 'Список акций',
        path: '/sales',
        icon: <Sales />,
      },
      {
        id: 4,
        text: 'Список городов',
        path: '/cities',
        icon: <Cities />,
      },
      {
        id: 4,
        text: 'История поиска',
        path: '/history',
        icon: <History />,
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
        icon: <Support />,
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
            {content.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
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
                  <ListItemIcon>{item.icon}</ListItemIcon>
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
