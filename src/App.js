import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import Myapp from "./Myapp";

function App() {
  return (
    <>
      <Provider store={store}>
        <Myapp />
      </Provider>
    </>
  );
}

export default App;
