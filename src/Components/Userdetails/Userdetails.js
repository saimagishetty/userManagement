import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Userdetails.css'
import { useParams } from 'react-router-dom';
import { data, edituser } from '../../store/Data'

function Userdetails() {
    const params = useParams();
    const ID = params.id;
    let UserData;
    for (let a of data) {
        if (a.ID == ID) {
            UserData = a
        }
    }
    const [personData, setPersonData] = useState({
        Name: UserData.Name,
        email: UserData.email,
        role: UserData.role,
        Username: UserData.Username,
        ID: UserData.ID
    });
    console.log(personData)
    let personData_copy = JSON.parse(JSON.stringify(personData));
    const [openModel, setoOpenModel] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(personData)
        edituser(personData)
        closeModal()
    };
    const closeModal = () => {
        setoOpenModel(openModel ? false : true)
    }
    return (
        <div className="Userdetails">
            <div className="main-0">
                <Link to="/Dashboard">
                    Go back to Dash board</Link>
            </div>
            <div className="main-1">
                <h1 class="mt-4">User Details</h1>
                <div className="button-6" onClick={closeModal}>Edit User</div>
            </div>
            <div className="main-2">
                <div class="card">
                    <div class="card-body">
                        <div className="main-3">
                            <div>
                                <div><span >Name :</span>{personData_copy.Name}</div>
                                <div className="aaa" ><span >Username :</span>{personData_copy.Username}</div>
                            </div>
                            <img className="img-details" src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="" />
                        </div>
                        <hr />
                        <div className="main-4">
                            <div>Name : {personData_copy.Name}</div>
                            <div>Username : {personData_copy.Username}</div>
                            <div>ID : {personData_copy.ID}</div>
                            <div>email : {personData_copy.email}</div>
                            <div>role : {personData_copy.role}</div>
                        </div>
                    </div>
                </div>
            </div>
            {openModel &&
                <div class="overlay" >
                    <div class="modal1">
                        <h2>Edit New User</h2>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <div className="div-form">
                                <div>User Name</div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={personData.Name}
                                    onChange={(event) => setPersonData((prevState) => ({
                                        ...prevState,
                                        Name: event.target.value,
                                    }))}
                                />
                            </div>
                            <div className="div-form">
                                <div>User Name</div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={personData.Username}
                                    onChange={(event) => setPersonData((prevState) => ({
                                        ...prevState,
                                        Username: event.target.value,
                                    }))}
                                />
                            </div>
                            <div className="div-form">
                                <div>User Name</div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={personData.email}
                                    onChange={(event) => setPersonData((prevState) => ({
                                        ...prevState,
                                        email: event.target.value,
                                    }))}
                                />
                            </div>
                            <div className="div-form">
                                <div>User role</div>
                                <select name="role"
                                    value={personData.role}
                                    onChange={(event) => setPersonData((prevState) => ({
                                        ...prevState,
                                        role: event.target.value,
                                    }))} >
                                    <option value="user">user</option>
                                    <option value="admin">admin</option>
                                </select>
                            </div>
                            <div className="div-form1">
                                <button type="submit" class="btn btn-primary">Save</button>
                                <div type="submit" class="btn btn-secondary" onClick={closeModal}>Close</div>
                            </div>
                        </form>
                    </div>
                    <div class="modal0" onClick={closeModal}>
                    </div>
                </div>
            }
        </div>
    )

}
export default Userdetails