import React from "react";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import Myapp from "./Myapp";

function App() {
  return (
    <>
      <Provider store={store}>
        <Myapp />
        <Helmet>
          <script
            src="//code.tidio.co/juavsp7xyimuanjgd7uayohnf654etwl.js"
            async
          ></script>
        </Helmet>
      </Provider>
    </>
  );
}

export default App;
