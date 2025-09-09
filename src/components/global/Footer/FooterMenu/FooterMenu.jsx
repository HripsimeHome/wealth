import styles from "./FooterMenu.module.scss";
import { NavLink } from "react-router-dom";
import { footerMenu } from "../../../../constants/menuItems";

const FooterMenu = () => {
  return (
    <section className={styles.footerMenu__menuContainer}>
      {footerMenu.map(({ title, list }) => (
        <div key={title}>
          <h3 className={styles.footerMenu__menuTitle}>{title}</h3>
          <nav>
            <ul className={styles.footerMenu__menuList}>
              {list.map(({ text, path }) => (
                <li key={text}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `${styles.footerMenu__menuLink} 
                        ${isActive ? styles.footerMenu__menuLink_active : ""}`
                    }
                  >
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ))}
    </section>
  );
};

export default FooterMenu;
