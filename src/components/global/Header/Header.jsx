import styles from "./Header.module.scss";
import PageHeader from "../../global/PageHeader/PageHeader";
import { useLocation } from "react-router-dom";
import {
  articlesIcon,
  investmentsIcon,
  contactsIcon,
} from "../../../assets/svg";

const Header = () => {
  const { pathname } = useLocation();

  // Данные для заголовков прямо в компоненте
  const headers = {
    "/blog": {
      icon: articlesIcon,
      sectionTitle: "articles",
      title: "Blog",
      subtitle: "Lorem",
    },
    "/services": {
      icon: investmentsIcon,
      sectionTitle: "Stock Analysis",
      title: "Services",
      subtitle: "Quality research paired with real-time trade alerts",
    },
    "/contacts": {
      icon: contactsIcon,
      sectionTitle: "get in touch",
      title: "Contact",
      subtitle:
        "Contact us to discuss your project and find out how we can help you.",
    },
  };

  const data = headers[pathname];

  if (!data) return null; // если нет данных для этой страницы — ничего не рендерим

  return (
    <div className={styles.header}>
      <PageHeader {...data} /> {/* передаём всё разом */}
    </div>
  );
};

export default Header;
