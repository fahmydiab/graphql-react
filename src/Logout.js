import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {ApolloConsumer} from "react-apollo";

const LogoutPage = ({history}) => (
    <div>
        <LogoutButton history={history}/>
    </div>
);

class LogoutButton extends Component {
    logout = async (client) => {
        localStorage.removeItem('token');
        await client.resetStore();
        this.props.history.push('/login');
    }

    render() {
        return (
            <ApolloConsumer>
                {client => (
                    <button onClick={() => this.logout(client)}>Logout</button>
                )}
            </ApolloConsumer>

        );
    };

}

export default withRouter(LogoutPage);
export {LogoutButton};