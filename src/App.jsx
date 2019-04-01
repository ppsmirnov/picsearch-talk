import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CycleBlockingDemo from "./pages/CycleBlockingDemo";

import "./App.css";

const PageStub = () => <div>PageStub</div>;

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/demo-1">Демо 1</Link>
                            </li>
                            <li>
                                <Link to="/demo-2">Демо 2</Link>
                            </li>
                            <li>
                                <Link to="/demo-3">Демо 3</Link>
                            </li>
                        </ul>
                    </nav>
                    <main className="main">
                        <Route
                            path="/demo-1"
                            exact
                            component={CycleBlockingDemo}
                        />
                        <Route path="/demo-2" component={PageStub} />
                        <Route path="/demo-3" component={PageStub} />
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
