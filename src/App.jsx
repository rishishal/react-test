import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import DataContextProvider from "./utils/DataContextProvider";

function App() {
  return (
    <>
      <DataContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </DataContextProvider>
    </>
  );
}

export default App;
