import React from "react";
import ReactDOM from "react-dom";
import {Container} from 'shards-react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";


import Chat from 'chat/Chat';

import "./index.css";

const App = () => (
    <Container>
        <p>Começe a usar avontade!</p>
        <h1>Chat!</h1>
        <Chat />
        <p>By Jefferson Brandão</p>
    </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
