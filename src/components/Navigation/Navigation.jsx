import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss'


export const Navigation = () => {

    return (
        <nav className={style.navStyle} >
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/userposts">Posts</NavLink>
            </div>
        </nav>
    )
}