import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppRouter from "../../router/AppRouter";
import Header from "../global/Header/Header";
import PageHeadingWrapper from "../global/PageHeadingWrapper/PageHeadingWrapper";
import Subscription from "../global/Subscription/Subscription";
import Footer from "../global/Footer/Footer";
//import Modal from "../layout/Modal/Modal";
import { scrollTop } from "../../utils/scrollTop";

import {
  testStatePagePath,
  testRefPagePath,
  homePagePath,
  aboutPagePath,
  servicesPagePath,
} from "../../router/path";

function App() {
  const location = useLocation();
  const isTestStatePage = location.pathname === testStatePagePath;
  const isTestRefPage = location.pathname === testRefPagePath;

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
    //   {!isTestStatePage && (
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
      {/* <Modal /> */}
      <PageHeadingWrapper />
      <AppRouter />
      {/* {showSubscription && <Subscription />} */}
      <Footer />
    </>
  );
}

export default App;
