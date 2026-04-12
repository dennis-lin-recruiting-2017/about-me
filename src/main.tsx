import './i18n';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  AppBar,
  Box,
  ButtonGroup,
  Button,
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
import { useTranslation } from 'react-i18next';
import HomePage from './pages/HomePage';
import Project0001Page from './pages/Project0001Page';
import Project0002Page from './pages/Project0002Page';
import ResumePage from './pages/ResumePage';
import Project0003Page from './pages/Project0003Page';
import Project0004Page from './pages/Project0004Page';
import Project0005Page from './pages/Project0005Page';
import Project0006Page from './pages/Project0006Page';

const drawerWidth = 260;

const LANGUAGES = [
  { code: 'en',    label: 'EN' },
  { code: 'ja',    label: '日本語' },
  { code: 'zh-TW', label: '繁中' },
];

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
  },
});

function AppShell() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [projectsOpen, setProjectsOpen] = React.useState(
    location.pathname.startsWith('/projects')
  );

  React.useEffect(() => {
    if (location.pathname.startsWith('/projects')) setProjectsOpen(true);
  }, [location.pathname]);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  const navItems = [
    { label: t('nav.home'), path: '/home', icon: <HomeIcon /> },
    {
      label: t('nav.projects'),
      icon: <FolderIcon />,
      children: [
        { label: t('nav.project4'), path: '/projects/project-0004', icon: <DescriptionIcon /> },
        { label: t('nav.project2'), path: '/projects/project-0002', icon: <DescriptionIcon /> },
        { label: t('nav.project1'), path: '/projects/project-0001', icon: <DescriptionIcon /> },
        { label: t('nav.project3'), path: '/projects/project-0003', icon: <DescriptionIcon /> },
        { label: t('nav.project5'), path: '/projects/project-0005', icon: <DescriptionIcon /> },
        { label: t('nav.project6'), path: '/projects/project-0006', icon: <DescriptionIcon /> },
      ].map((child) => ({ ...child, label: child.label })),
    },
    { label: t('nav.resume'), path: '/resume', icon: <ArticleIcon /> },
  ];

  const drawer = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          <a href="mailto:dennis.lin.recruiting.2017@gmail.com">Dennis Lin</a>
        </Typography>
      </Toolbar>
      <Divider />

      {/* Language toggle */}
      <Box sx={{ px: 2, py: 1.5 }}>
        <ButtonGroup size="small" fullWidth>
          {LANGUAGES.map(({ code, label }) => (
            <Button
              key={code}
              variant={i18n.language === code ? 'contained' : 'outlined'}
              onClick={() => i18n.changeLanguage(code)}
              sx={{ fontSize: '0.7rem', px: 0.5 }}
            >
              {label}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
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

          const childSelected = item.children.some((c) => c.path === location.pathname);

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
                        key={child.path}
                        sx={{ pl: 4 }}
                        selected={selected}
                        onClick={() => handleNavigate(child.path!)}
                      >
                        <ListItemIcon>{child.icon}</ListItemIcon>
                        <ListItemText
                          primary={child.label}
                          primaryTypographyProps={{ variant: 'body2' }}
                        />
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
        sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}
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
          <Typography variant="h6" noWrap component="div" />
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
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
          <Route path="/projects/project-0001" element={<Project0001Page />} />
          <Route path="/projects/project-0002" element={<Project0002Page />} />
          <Route path="/projects/project-0003" element={<Project0003Page />} />
          <Route path="/projects/project-0004" element={<Project0004Page />} />
          <Route path="/projects/project-0005" element={<Project0005Page />} />
          <Route path="/projects/project-0006" element={<Project0006Page />} />
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
