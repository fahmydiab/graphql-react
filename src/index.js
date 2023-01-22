import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

const client = new ApolloClient(
    {
        uri: 'http://localhost:3000/graphql',
        request: async operation => {
            const token = await localStorage.getItem('token');
            if (token) {
                operation.setContext({
                    headers: {
                        'x-auth-token': token
                    }
                });
            } else {
                operation.setContext(null);
            }
        }
    })
ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
    , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();