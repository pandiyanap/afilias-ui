import { Component } from "react";
import UsersService from "../service/UsersService";

export default class FriendsListComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    } 

    componentDidMount() {
        UsersService.findFriends(this.props.match.url)
            .then((response) => {
                this.setState({ users: response.data })
            });
    }

    render() {
        return (<div>
            <h1 className= "text-center">Friends List </h1>
            <table className= "table table-striped" >
                <thead>
                    <tr>
                        <td>User Id</td>
                        <td>Name</td>
                        <td>City</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map(user =>
                            <tr key = {user.userId} >
                                <td>{user.userId}</td>
                                <td>{user.name}</td>
                                <td>{user.city}</td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>);
        
    }

}