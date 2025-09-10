import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppRouter from "../../router/AppRouter";
import Header from "../global/Header/Header";
import PageHeadingWrapper from "../global/PageHeadingWrapper/PageHeadingWrapper";
//import Subscription from "../global/Subscription/Subscription";
import Footer from "../global/Footer/Footer";
import { scrollTop } from "../../utils/scrollTop";

function App() {
  const location = useLocation();

  useEffect(() => {
    scrollTop();
  }, [location.pathname]);

  return (
    <>
      <Header />
      <PageHeadingWrapper />
      <AppRouter />
      {/* <Subscription /> */}
      <Footer />
    </>
  );
}

export default App;
