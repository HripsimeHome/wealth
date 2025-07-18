import styles from "./HeaderMenu.module.scss";
//import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";

import { headerMenuItems } from "../../../constants/menuItems";
import { logoImage, logoWebpImage } from "../../../assets/images";

import { homePagePath } from "../../../router/path";

const HeaderMenu = () => {
  return (
    <div className={styles.headerMenu}>
      <Link to={homePagePath}>
        <ImageWebp
          src={logoImage}
          srcSet={logoWebpImage}
          alt="Wealth Bento"
          className={styles.headerMenu__logoImg}
        />
      </Link>

      <nav
        className={`
            ${styles.headerMenu__menu}
            `}
      >
        {headerMenuItems.map(({ text, link }, index) => (
          <NavLink
            to={link}
            key={index}
            className={({ isActive }) =>
              isActive
                ? `${styles.headerMenu__menuLink} ${styles.headerMenu__menuLink_active}`
                : styles.headerMenu__menuLink
            }
          >
            {text}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default HeaderMenu;
