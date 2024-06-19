import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss';

export const App = () => {
    return (
        <>
            <Link to={'/about'} className={classes.link}>About</Link>
            <Link to={'/shop'} className={classes.link}>Shop</Link>
            <Outlet />
        </>
    )
}
