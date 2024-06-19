import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss';
import avatarPng from '@/assets/user_png.png';
import avatarJpg from '@/assets/user_jpg.jpg';
import AvatarSvg from '@/assets/user_svg.svg';

export const App = () => {
    return (
        <>
            <Link to={'/about'} className={classes.link}>About</Link>
            <Link to={'/shop'} className={classes.link}>Shop</Link>
            <div>
                <img width={100} height={100} src={avatarJpg} alt='avatar' />
                <img width={100} height={100} src={avatarPng} alt='avatar' />
                <AvatarSvg width={100} height={100} style={{color: 'green'}} />
            </div>
            <Outlet />
        </>
    )
}
