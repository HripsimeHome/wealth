import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppRouter from "../../router/AppRouter";
import scrollTop from "../../utils/scrollTop";
import HeaderMenu from "../global/HeaderMenu/HeaderMenu";
import Header from "../global/Header/Header";
//import Subscription from "../global/Subscription/Subscription";
import Footer from "../global/Footer/Footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    scrollTop();
  }, [location.pathname]);

  return (
    <>
      <HeaderMenu />
      <Header />
      <AppRouter />
      {/* <Subscription /> */}
      <Footer />
    </>
  );
}

export default App;
