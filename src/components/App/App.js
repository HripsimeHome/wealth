import AppRouter from "../../router/AppRouter";
import HeaderMenu from "../global/HeaderMenu/HeaderMenu";
import Subscription from "../global/Subscription/Subscription";
import Footer from "../global/Footer/Footer";

function App() {
  return (
    <>
      <HeaderMenu />
      <div className="container">
        <AppRouter />
      </div>
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
