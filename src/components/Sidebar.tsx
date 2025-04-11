import React, { useState } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Box,
} from '@mui/material'
import {
  Menu as MenuIcon,
  Inventory2 as InventoryIcon,
  AddBox as AddIcon,
  History as HistoryIcon,  
  Help as HelpIcon,
} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import '../styles/Sidebar.css';  

const drawerWidth = 240

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const menuItems = [
    { text: 'Список товаров', icon: <InventoryIcon />, path: '/' },
    { text: 'Добавить товар', icon: <AddIcon />, path: '/add' },
    { text: 'История', icon: <HistoryIcon />, path: '/history' },
    { text: 'Справочник', icon: <HelpIcon />, path: '/reference' },
 
  ]

  return (
    <>
      <AppBar position="fixed" className="appBar">
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={toggleDrawer} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Система учёта товаров
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer open={open} onClose={toggleDrawer} className="drawer">
        <Box
          sx={{ width: drawerWidth }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path} className="listItemButton">
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Toolbar />
    </>
  )
}

export default Sidebar
