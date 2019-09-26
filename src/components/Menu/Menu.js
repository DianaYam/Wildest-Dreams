import React from 'react';
import {NavLink} from 'react-router-dom';

import './Menu.css';

const Menu = props => {
    return (
        <div className="Menu">
            <div className="menu-item">
                <NavLink to="/" exact className="navLink" activeClassName="active-menu-item">
                    <span className="menu-item_home">
                        Wildest<br/>Dreams
                    </span>
                </NavLink>
            </div>

            <div className="menu-item">
                <NavLink to="/posts" exact className="navLink one-line-link" activeClassName="active-menu-item">
                    <span>Посты</span>
                </NavLink>
            </div>

            <div className="menu-item">
                <NavLink to="/authors" exact className="navLink" activeClassName="active-menu-item">
                    <span className="menu-caption">Неординарные</span>
                    <br/>
                    <span>Авторы</span>
                </NavLink>
            </div>

            { props.auth ?
                <div className="menu-item">
                    <NavLink to="/new-post" className="navLink" activeClassName="active-menu-item">
                        <span className="menu-caption">Написать</span>
                        <br/>
                        <span>Пост</span>
                    </NavLink>
                </div>
                : null
            }

            <div className="menu-item">
                <NavLink to="/about" className="navLink one-line-link" activeClassName="active-menu-item">
                    <span>О нас</span>
                </NavLink>
            </div>

            { props.auth ?
                <div className="menu-item">
                    <div className="menu-item_separate">
                        <NavLink to="/my-profile"
                                 className="navLink menu-item_separate-link"
                                 activeClassName="active-menu-item"
                        >
                            Мой профиль
                        </NavLink>
                    </div>

                    <div className="menu-item_separate">
                        <NavLink to="/exit"
                                 className="navLink menu-item_separate-link"
                                 activeClassName="active-menu-item"
                        >
                            Выход
                        </NavLink>
                    </div>
                </div>
                :
                <div className="menu-item">
                    <div className="menu-item_separate">
                        <NavLink to="/enter"
                                 className="navLink menu-item_separate-link"
                                 activeClassName="active-menu-item"
                        >
                            Вход
                        </NavLink>
                    </div>

                    <div className="menu-item_separate">
                        <NavLink to="/register"
                                 className="navLink menu-item_separate-link"
                                 activeClassName="active-menu-item"
                        >
                            Регистрация
                        </NavLink>
                    </div>
                </div>
            }

        </div>
    )
};

export default Menu;
