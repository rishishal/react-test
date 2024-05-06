import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import DataContextProvider from "./utils/DataContextProvider";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <>
        <DataContextProvider>
          <Header />
          <Outlet />
          <Footer />
        </DataContextProvider>
      </>
    </Provider>
  );
}

export default App;
