import styles from "./Header.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import { logoImage, logoWebpImage } from "../../../assets/images";
import { homePagePath } from "../../../router/path";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__test}>
          <Link to={homePagePath} className={styles.header__logoContainer}>
            <ImageWebp
              src={logoImage}
              srcSet={logoWebpImage}
              alt="Wealth Bento"
              className={styles.header__logo}
            />
          </Link>
          <HeaderMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
