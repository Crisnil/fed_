
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import App from "./App";
import Listing from "./Listing";

export default function Routes() {

    return (
        <Router>
                <Switch>
                    <Route path={`/:topicId`}>
                        <Topic />
                    </Route>
                    <Route path="/">
                        <Listing />
                    </Route>
                </Switch>
        </Router>
    );
}



function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}