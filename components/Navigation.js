import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useRouter } from 'next/router';
import { logout } from '@/firebase/Authentication';

const pages = [
    {
        name: 'Home',
        url: '/home'
    },
    {
        name: 'Portfolio',
        url:'/portfolio'
    },
    {
        name: 'News',
        url:'/news'
    },
    {
        name: 'Live Market',
        url:'/company'
    }
];

const settings = [

    {
        name: 'Profile',
        url: '/home'
    },
    
    {
        name: 'Logout',
        url:'/login'
    },
];

function Navigation() {
    const router = useRouter()
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (e, page, index) => {
        e.preventDefault()
        router.push(page.url)
        setAnchorElNav(null);
    };

    // const handleCloseUserMenu = (e, settings, index) => {
    //     e.preventDefault();
    //     setAnchorElUser(null);
    //     if (settings) {
    //       router.push(`/${settings.toLowerCase()}`);
    //     }
    // };

    const handleCloseUserMenu = async (e, settings, index) => {
        e.preventDefault();
        setAnchorElUser(null);
        if (settings.name === 'Logout') {
          await logout();
          router.push('/login');
        } else {
          router.push(settings.url);
        }
    };
    

    return (
        <AppBar 
            position='fixed'
            sx={{
                opacity: 0.9
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            position: 'sticky',
                            fontFamily: 'monospace',
                            fontWeight: 900,
                            color: 'inherit',
                            textDecoration: 'none',
                            fontStyle: 'italic'
                        }}
                    >
                        Nepse Pulse
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page,index) => {
                                {
                                    return(
                                        <MenuItem key={index} onClick={(e)=>handleCloseNavMenu(e,page,index)}>
                                            <Typography textAlign="center">{page.name}</Typography>
                                        </MenuItem>
                                    )
                                }
                            })}

                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            fontStyle: 'italic'
                        }}
                    >
                        Nepse Pulse
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                onClick={(e) => handleCloseNavMenu(e, page, index)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Stock app" />
                            </IconButton>
                        </Tooltip>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={(e) => handleCloseUserMenu(e)}
                        > 
                            {settings.map((settings ,index) => (
                            <MenuItem key={index} onClick={(e) => handleCloseUserMenu(e, settings, index)}>
                                <Typography textAlign="center">{settings.name}</Typography>
                            </MenuItem>
                            ))}
                        </Menu>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navigation;