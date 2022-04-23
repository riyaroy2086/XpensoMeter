import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";

import App from "./App";
import "./index.css";

ReactDOM.render( 
  <SpeechProvider appId = "e801a663-502e-4af4-aed4-0d9cd4bab558" language= "en-US">
    <Provider>
        <App />
    </Provider>
  </SpeechProvider>
  ,
 

document.getElementById("root")
);
