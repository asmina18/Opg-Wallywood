import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss'


export const Navigation = () => {

    return (
        <nav className={style.navStyle} >
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/post">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </nav>
    )
}