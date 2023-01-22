import React, {Component} from "react";

const ProfilePage = () => (
    <div>
        <Profile/>
    </div>
);

class Profile extends Component {
    render() {
        return (
            <div>
                <h2>Hello again, !</h2>
            </div>
        );
    }
}

export default ProfilePage;