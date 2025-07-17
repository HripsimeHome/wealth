import AppRouter from "../../router/AppRouter";
import Header from "../global/Header/Header";
import Subscription from "../global/Subscription/Subscription";
import Footer from "../global/Footer/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <AppRouter />
      </div>
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
