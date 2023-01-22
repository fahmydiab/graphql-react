import React, {Component} from "react";
import activeSession from "./ActiveSession";

const ProfilePage = ({session}) => (
    <div>
        {session && session.me &&
            <Profile session={session}/>}
    </div>
);

class Profile extends Component {
    render() {
        console.log(this.props.session);
        return (
            <div>
                <h2>Hello again, {this.props.session.me.name}!</h2>
                <p>List of cars:</p>
                <ul>{this.props.session.me.car.length !== 0 ?
                    this.props.session.me.car.map(({id, make, model}) => <li
                        key={`${id}-${make}`}>{make} {model}</li>) :
                    <li>No car</li>}
                </ul>
            </div>
        );
    }
}

export default activeSession(ProfilePage);