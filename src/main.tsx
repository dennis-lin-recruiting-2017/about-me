import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  AppBar,
  Box,
  Collapse,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import ArticleIcon from '@mui/icons-material/Article';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { HashRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Project1Page from './pages/Project1Page';
import Project2Page from './pages/Project2Page';
import ResumePage from './pages/ResumePage';
import Project3Page from './pages/Project3Page';
import Project4Page from './pages/Project4Page';

const drawerWidth = 260;

type NavItem = {
  label: string;
  path?: string;
  icon?: React.ReactNode;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    label: 'Home',
    path: '/home',
    icon: <HomeIcon />,
  },
  {
    label: 'Projects',
    icon: <FolderIcon />,
    children: [
      { label: 'Browser Extension to Visually Record Test Cases', path: '/projects/project-1', icon: <DescriptionIcon /> },
      { label: 'Webapp to Create Computer-Vision Test Cases from Video', path: '/projects/project-2', icon: <DescriptionIcon /> },
      { label: 'Data Pipeline for Feature Extraction', path: '/projects/project-4', icon: <DescriptionIcon /> },
      { label: 'LLM Orchestration (Coming Soon)', path: '/projects/project-3', icon: <DescriptionIcon /> },
    ],
  },
  {
    label: 'Resume',
    path: '/resume',
    icon: <ArticleIcon />,
  },
];

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});


function AppShell() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [projectsOpen, setProjectsOpen] = React.useState(
    location.pathname.startsWith('/projects')
  );

  React.useEffect(() => {
    if (location.pathname.startsWith('/projects')) {
      setProjectsOpen(true);
    }
  }, [location.pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  const drawer = (
    <Box>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          <a href="mailto:dennis.lin.recruiting.2017@gmail.com">Dennis Lin</a>
        </Typography>
      </Toolbar>
      <Divider />
      <List disablePadding>
        {navItems.map((item) => {
          if (!item.children) {
            const selected = location.pathname === item.path;
            return (
              <ListItemButton
                key={item.label}
                selected={selected}
                onClick={() => handleNavigate(item.path!)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            );
          }

          const childSelected = item.children.some(
            (child) => child.path === location.pathname
          );

          return (
            <React.Fragment key={item.label}>
              <ListItemButton
                selected={childSelected}
                onClick={() => setProjectsOpen((prev) => !prev)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
                {projectsOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={projectsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.children.map((child) => {
                    const selected = location.pathname === child.path;
                    return (
                      <ListItemButton
                        key={child.label}
                        sx={{ pl: 4 }}
                        selected={selected}
                        onClick={() => handleNavigate(child.path!)}
                      >
                        <ListItemIcon>{child.icon}</ListItemIcon>
                        <ListItemText primary={child.label} />
                      </ListItemButton>
                    );
                  })}
                </List>
              </Collapse>
            </React.Fragment>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: 'background.default',
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects/project-1" element={<Project1Page />} />
          <Route path="/projects/project-2" element={<Project2Page />} />
          <Route path="/projects/project-3" element={<Project3Page />} />
          <Route path="/projects/project-4" element={<Project4Page />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Box>
    </Box>
  );
}

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <AppShell />
      </HashRouter>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);
