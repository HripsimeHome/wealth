import styles from "./Header.module.scss";
//import Svg from "../../layout/Svg/Svg";

import { homePagePath } from "../../../router/path";

import //arrowPrevIcon
"../../../assets/svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <span>title</span>
        <h1 className={styles.header__title}>Contacts</h1>
      </div>

      <h5 className={styles.header__subtitle}>
        Contact us to discuss your project and find out how we can help you
      </h5>
    </header>
  );
};

export default Header;
