import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";
import RTLLayout from "./layouts/rtl";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const activeChain = "goerli";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ThirdwebProvider activeChain={activeChain}>
      <React.StrictMode>
        <HashRouter>
          <Switch>
            <Route path={`/auth`} component={AuthLayout} />
            <Route path={`/admin`} component={AdminLayout} />
            <Route path={`/rtl`} component={RTLLayout} />
            <Redirect from="/" to="/admin" />
          </Switch>
        </HashRouter>
      </React.StrictMode>
    </ThirdwebProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
