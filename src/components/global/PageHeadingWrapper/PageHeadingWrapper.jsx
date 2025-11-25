import PageHeadingSmall from "./PageHeadingSmall/PageHeadingSmall";
//import PageHeadingBig from "./PageHeadingBig/PageHeadingBig";
import { useLocation } from "react-router-dom";
import { useAnimationInView } from "../../../hooks/useInViewAnimation";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";
import {
  articlesIcon,
  investmentsIcon,
  contactsIcon,
} from "../../../assets/svg";

const PageHeadingWrapper = () => {
  const { ref: headingSmallRef, inView: isHeadingSmallInView } =
    useAnimationInView({
      threshold: 0.5,
      //triggerOnce: false,
      // triggerOnce:true
    });
  const { pathname } = useLocation();

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
    <div
      ref={headingSmallRef}
      // style={{ height: "400px", backgroundColor: "green" }}
    >
      <TransitionProvider
        inProp={isHeadingSmallInView}
        delay={100}
        style={TransitionStyleTypes.zoomIn}
      >
        <PageHeadingSmall {...data} />
        {/* <PageHeadingBig {...data} /> */}
      </TransitionProvider>
    </div>
  );
};

export default PageHeadingWrapper;
