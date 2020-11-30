import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        exact
        to={routes.home}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
      >
        Главная
      </NavLink>
      <NavLink
        to={routes.movies}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
      >
        Фильмы
      </NavLink>
    </nav>
  );
};

export default Navigation;
