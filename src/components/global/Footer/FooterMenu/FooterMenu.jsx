import styles from "./FooterMenu.module.scss";
import { NavLink } from "react-router-dom";
import { footerMenu } from "../../../../constants/menuItems";

const FooterMenu = () => {
  return (
    <section className={styles.footerMenu__container}>
      {footerMenu.map(({ title, list }) => (
        <div key={title}>
          <h3 className={styles.footerMenu__title}>{title}</h3>
          <nav>
            <ul className={styles.footerMenu__list}>
              {list.map(({ text, path }) => (
                <li key={text}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `${styles.footerMenu__link} 
                        ${isActive ? styles.footerMenu__link_active : ""}`
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
