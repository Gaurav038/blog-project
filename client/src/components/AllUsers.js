import { useState, useEffect } from 'react';
import { getUsers, deleteUser} from '../Service/api';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core'
import Main from './Main';


const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
        
    }, []);


    const getAllUsers = async () => {   
         const id = localStorage.getItem("userD");
        let response = await getUsers(id);
        setUsers([response?.data]);
        
    }
    console.log(users)
    const DeleteUser = async(id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <>
        <Main />
        <div
        
            className="home-container container mt-4 animate__animated animate__fadeIn animate__slow"
            style={{marginBottom: '50px'}}
        >
            <div className="row">
                <div style={{display: "flex", justifyContent: 'space-around'}}>
                    <Button color="primary" variant="contained" style={{marginRight:10}}  component={Link} to={`/addPost`}>Add Post </Button>
                </div>
            </div>
            <h1>All Post List</h1>
            <div className="row">
                <div className="col">
                    <table
                        className="customers-table table table-dark table-striped table-bordered border-dark mt-4"
                    >
                        <thead className="text-center fs-6">
                            <tr>
                                <th>Title</th>
                                <th>Desc</th>
                                <th>Delete</th>
                                <th>Update</th>

                            </tr>
                        </thead>
                        <tbody className="text-center fs-6">
                            {users && users[0]?.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.title}</td>
                                    <td>{user.desc}</td>
                                   
                                    <td><Button color="primary" variant="contained" style={{marginRight:10}} onClick={() => DeleteUser(user._id)}>Delete Post</Button></td>
                                    <td><Button color="primary" variant="contained" style={{marginRight:10}}  component={Link} to={`/update/${user._id}`}>Update Post </Button></td>

                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
        </>
    )
}

export default AllUsers;