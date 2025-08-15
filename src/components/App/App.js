import AppRouter from "../../router/AppRouter";
import HeaderMenu from "../global/HeaderMenu/HeaderMenu";
import Header from "../global/Header/Header";
//import Subscription from "../global/Subscription/Subscription";
import Footer from "../global/Footer/Footer";

function App() {
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
