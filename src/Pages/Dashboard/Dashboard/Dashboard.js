import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PaymentIcon from '@mui/icons-material/Payment';
import useAuth from '../../../Hooks/useAuth';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import {
    Switch,
    Route,
    NavLink,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Pay from '../Pay/Pay';
import DashboardHome from '../DashboardHome/DashboardHome';
import AddReview from '../AddReview/AddReview';
import MyOrder from '../MyOrder/MyOrder';
import Footer from '../../Shared/Footer/Footer';
import AdminRoute from '../../Shared/AdminRoute/AdminRoute';
import PrivateRoute from '../../Shared/PrivateRoute/PrivateRoute';
import ManageOrders from '../Admin/ManageOrders/ManageOrders';
import AddProducts from '../Admin/AddProducts/AddProducts';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';

const drawerWidth = 230;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const Dashboard = () => {
    const { user, admin, logout } = useAuth();
    const { path, url } = useRouteMatch();

    console.log('dashboard', admin);

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                        <Typography variant="body1" noWrap component="div" sx={{ ml: 3 }}>
                            Logged In User: {user.email}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem button >
                                <ListItemIcon>
                                    <ArrowBackIcon />
                                </ListItemIcon>
                                <ListItemText primary='Go Back' />
                            </ListItem>
                        </NavLink>
                        <NavLink to={`${url}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem button >
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary='Home' />
                            </ListItem>
                        </NavLink>
                        {
                            admin ? <>
                                <NavLink to={`${url}/manageAllOrders`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <ListItem button >
                                        <ListItemIcon>
                                            <ManageAccountsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary='Manage All Orders' />
                                    </ListItem>
                                </NavLink>
                                <NavLink to={`${url}/addProducts`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <ListItem button >
                                        <ListItemIcon>
                                            <AddShoppingCartIcon />
                                        </ListItemIcon>
                                        <ListItemText primary='Add Products' />
                                    </ListItem>
                                </NavLink>
                                <NavLink to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <ListItem button >
                                        <ListItemIcon>
                                            <SupervisorAccountIcon />
                                        </ListItemIcon>
                                        <ListItemText primary='Make Admin' />
                                    </ListItem>
                                </NavLink>
                                <NavLink to={`${url}/manageProducts`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <ListItem button >
                                        <ListItemIcon>
                                            <ReviewsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary='Manage Products' />
                                    </ListItem>
                                </NavLink>
                            </> :
                                <>
                                    <NavLink to={`${url}/pay`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <ListItem button >
                                            <ListItemIcon>
                                                <PaymentIcon />
                                            </ListItemIcon>
                                            <ListItemText primary='Pay' />
                                        </ListItem>
                                    </NavLink>
                                    <NavLink to={`${url}/myOrder`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <ListItem button >
                                            <ListItemIcon>
                                                <ProductionQuantityLimitsIcon />
                                            </ListItemIcon>
                                            <ListItemText primary='My Order' />
                                        </ListItem>
                                    </NavLink>
                                    <NavLink to={`${url}/review`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <ListItem button >
                                            <ListItemIcon>
                                                <ReviewsIcon />
                                            </ListItemIcon>
                                            <ListItemText primary='Review' />
                                        </ListItem>
                                    </NavLink>
                                </>
                        }
                        <ListItem button onClick={logout}>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary='Logout' />
                        </ListItem>
                    </List>
                    <Divider />
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />

                    <Switch>
                        <PrivateRoute exact path={path}>
                            <DashboardHome></DashboardHome>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/pay`}>
                            <Pay></Pay>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/myOrder`}>
                            <MyOrder></MyOrder>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/review`}>
                            <AddReview></AddReview>
                        </PrivateRoute>
                        {/* Admin Routes */}
                        <AdminRoute path={`${path}/manageAllOrders`}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProducts`}>
                            <AddProducts></AddProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>

                    </Switch>
                    {/* <Footer></Footer> */}
                </Box>
            </Box>
        </div>
    );
}

export default Dashboard;
// DashboardInner
