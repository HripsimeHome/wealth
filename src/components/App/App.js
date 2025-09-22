import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppRouter from "../../router/AppRouter";
import Header from "../global/Header/Header";
import PageHeadingWrapper from "../global/PageHeadingWrapper/PageHeadingWrapper";
import Subscription from "../global/Subscription/Subscription";
import Footer from "../global/Footer/Footer";
import { scrollTop } from "../../utils/scrollTop";

import {
  testPagePath,
  homePagePath,
  aboutPagePath,
  servicesPagePath,
} from "../../router/path";

function App() {
  const location = useLocation();
  const isTestPage = location.pathname === testPagePath;

  const showSubscription = [
    homePagePath,
    aboutPagePath,
    servicesPagePath,
  ].includes(location.pathname);

  useEffect(() => {
    scrollTop();
  }, [location.pathname]);

  return (
    // <>
    //   {!isTestPage && (
    //     <>
    //       <Header />
    //       <PageHeadingWrapper />
    //       <Subscription />
    //       <Footer />
    //     </>
    //   )}
    //   <AppRouter />
    // </>
    <>
      <Header />
      <PageHeadingWrapper />
      <AppRouter />
      {/* {showSubscription && <Subscription />} */}
      <Footer />
    </>
  );
}

export default App;
