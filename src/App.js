import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Video from "./pages/Video";
import Controller from "./pages/Controller";
import {ChakraProvider, theme} from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact={true} path={"/"} component={Video}/>
                    <Route exact={true} path={"/control"} component={Controller}/>
                </Switch>
            </Router>
        </ChakraProvider>
    )
}

export default App;
