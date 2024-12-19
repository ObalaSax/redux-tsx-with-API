import { Provider } from "react-redux";
import "./App.css";
import ShowData from "./Redux/ShowData";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { myStore } from "./Redux/store";
import { productsApi } from "./Redux/productsApiSlice";
function App() {
  return (
    <>
      <ApiProvider api={productsApi}>
        <Provider store={myStore}>
          <ShowData />
        </Provider>
      </ApiProvider>
    </>
  );
}

export default App;
