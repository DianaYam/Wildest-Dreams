
import React from 'react';
import {NavLink} from 'react-router-dom';

import './Footer.css';

const Footer = props => {
    return (
        <div className="Footer">
            <div className="footer-menu-wrapper">
                <ul>
                    <li>
                        <NavLink to="/" exact className="navLink footerNavLink">
                            На главную
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts" exact className="navLink footerNavLink">
                            Посты
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/authors" exact className="navLink footerNavLink">
                            Авторы
                        </NavLink>
                    </li>
                    { props.auth
                        ?
                        <li>
                            <NavLink to="/new-post" className="navLink footerNavLink">
                                Написать пост
                            </NavLink>
                        </li>
                        : null
                    }
                    <li>
                        <NavLink to="/about" className="navLink footerNavLink">
                            О нас
                        </NavLink>
                    </li>
                    { props.auth
                        ?
                        <li>
                            <NavLink to="/my-profile" className="navLink footerNavLink">
                                Мой профиль
                            </NavLink>
                        </li>
                        :
                        <li>
                            <NavLink to="/enter" className="navLink footerNavLink">
                                Вход
                            </NavLink>
                        </li>
                    }
                    { props.auth
                        ?
                        <li>
                            <NavLink to="/exit" className="navLink footerNavLink">
                                Выход
                            </NavLink>
                        </li>
                        :
                        <li>
                            <NavLink to="/register" className="navLink footerNavLink">
                                Регистрация
                            </NavLink>
                        </li>
                    }
                </ul>
            </div>

            <div className="websiteCreatorInfo">
                <ul>
                    <li>Created by Diana Yamtsova:</li>
                    <li>
                        <i className="fa fa-envelope" aria-hidden="true" />
                        &ensp;
                        dianayamtsova@mail.ru
                    </li>
                    <li>
                        <i className="fa fa-external-link" aria-hidden="true" />
                        &ensp;
                        <a href="https://murmansk.hh.ru/resume/108f707fff0623a6af0039ed1f7a5431465858">hh.ru</a>
                    </li>
                    <li>
                        <i className="fa fa-external-link" aria-hidden="true" />
                        &ensp;
                        <a href="https://www.fl.ru/users/dianayam/">fl.ru</a>
                    </li>
                    <li>
                        <i className="fa fa-vk" aria-hidden="true" />
                        &ensp;
                        <a href="https://vk.com/diyam">Вконтакте</a>
                    </li>
                    <li>
                        <i className="fa fa-telegram" aria-hidden="true" />
                        &ensp;
                        <a href="https://t.me/DianaYam">@DianaYam</a>
                    </li>
                    <li>
                        <i className="fa fa-whatsapp" aria-hidden="true" />
                        &ensp;
                        +7 911 796 57 44
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Footer;
