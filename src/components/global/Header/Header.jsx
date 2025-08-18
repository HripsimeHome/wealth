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
      subtitle: "insightful articles paired with timely market updates",
    },
    "/services": {
      icon: investmentsIcon,
      sectionTitle: "Stock Analysis",
      title: "Services",
      subtitle: "quality research paired with real-time trade alerts",
    },
    "/contacts": {
      icon: contactsIcon,
      sectionTitle: "get in touch",
      title: "Contact",
      subtitle: "contact us today for support and tailored assistance",
    },
  };

  const data = headers[pathname];

  if (!data) return null;

  return (
    <>
      <PageHeader {...data} />
    </>
  );
};

export default Header;
