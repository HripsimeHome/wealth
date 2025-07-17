import Header from "../global/Header/Header";
import Footer from "../global/Footer/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </>
  );
}

export default App;
