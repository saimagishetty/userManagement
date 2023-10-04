import React from "react";
import './Dashboard.css'
import { data, allusers, DeleteUser } from '../../store/Data'
import { Link } from "react-router-dom";
// import users from '../../reducers/index'

class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            Name: '',
            email: '',
            Username: '',
            role: 'user',
            modelOpen: false,
            currentpage: 0,
            current: data.slice(0, 10),
            total: Math.floor(data.length / 10)
        };
        this.pagenation(1)
    }
    pagenation = (p) => {
        this.setState((prevState) => ({
            currentpage: p,
        }));
        this.setState((prevState) => ({
            current: data.slice(p * 10, (p + 1) * 10),
        }));
    }
    // handleChange
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    // handleSubmit
    handleSubmit = (event) => {
        event.preventDefault();
        let formData = JSON.parse(JSON.stringify(this.state));
        let data_copy = JSON.parse(JSON.stringify(data));
        let last_user = data_copy.pop()
        let id = last_user.ID + 1
        formData.ID = id
        delete formData.modelOpen
        delete formData.currentpage
        delete formData.current
        delete formData.total
        console.log(formData)
        allusers(formData)
        this.setState({ modelOpen: false },
            console.log(this.state)
        );
    }
    closeModal = () => {
        this.setState({
            modelOpen: (this.state.modelOpen ? false : true),
        });
    }
    Delete = (a) => {
        DeleteUser(a)
        console.log("before")
        this.pagenation(this.state.currentpage)
        console.log("after")
    }
    refresh() {
        this.setState({});
    }
    render() {
        const { currentpage, total } = this.state
        return (
            <div className="Dashboard">
                <div className="main-1">
                    <div>
                        <h1 class="mt-4">List of all the Users</h1>
                        <span>Total Users : {data.length}</span>
                    </div>
                    <div>
                        <div className="button-6" onClick={() => this.closeModal()}>Add User</div>
                        <div className="cen">
                            {currentpage != 0 &&
                                <span onClick={() => this.pagenation(currentpage - 1)} class="material-symbols-outlined">
                                    first_page
                                </span>}
                            <span>
                                {currentpage + 1}
                            </span>
                            {currentpage <= total &&
                                <span onClick={() => this.pagenation(currentpage + 1)} class="material-symbols-outlined">
                                    last_page
                                </span>
                            }
                        </div>
                    </div>
                </div>
                <div className="main-2">
                    <div class="card">
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">userid</th>
                                        <th scope="col">ID</th>
                                        <th scope="col">email</th>
                                        <th scope="col">role</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                {/* <Link to="/about">About</Link> */}
                                <tbody>
                                    {this.state.current.map((i, k) => (
                                        <tr>
                                            <th scope="row">{k + 1}</th>
                                            <td>{i.Name}</td>
                                            <td>{i.Username}</td>
                                            <td><Link to={`/Userdetails/${i.ID} `}> {i.ID} </Link></td>
                                            <td>{i.email}</td>
                                            <td>{i.role}</td>
                                            <td onClick={() => this.Delete(i)} ><span class="material-symbols-outlined">
                                                delete
                                            </span></td>
                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {this.state.modelOpen &&
                    <div class="overlay" >
                        <div class="modal1">
                            <h2>Add New User</h2>
                            <hr />
                            <form onSubmit={this.handleSubmit}>
                                <div class="container">
                                    <div class="login-page">
                                        <div class="form">
                                            <div class="login-form">
                                                <div className="div-form">
                                                    <div>User Name</div>
                                                    <input
                                                        type="text"
                                                        name="Name"
                                                        placeholder="User Name"
                                                        value={this.state.Name}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="div-form">
                                                    <div>User Email</div>
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        placeholder="Email"
                                                        value={this.state.email}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="div-form">
                                                    <div>User Username</div>
                                                    <input
                                                        type="text"
                                                        name="Username"
                                                        placeholder="Username"
                                                        value={this.state.Username}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="div-form">
                                                    <div>User role</div>
                                                    <select name="role"
                                                        value={this.state.role}
                                                        onChange={this.handleChange} >
                                                        <option value="user">user</option>
                                                        <option value="admin">admin</option>
                                                    </select>
                                                </div>
                                                <div className="div-form1">
                                                    <button type="submit" class="btn btn-primary">Save</button>
                                                    <div type="submit" class="btn btn-secondary">Close</div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal0" onClick={this.closeModal}>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Dashboard