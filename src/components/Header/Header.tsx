import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

type HeaderType = {
    isAuth: boolean,
    login: string | null
}

const Header = (props: HeaderType) => {
    debugger
    return (
        <header className={s.header}>
            <img src="https://wallpaperforu.com/wp-content/uploads/2020/08/vector-wallpaper-200827150908131024x768.jpg" alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login :  <NavLink to={'/login'} >Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;