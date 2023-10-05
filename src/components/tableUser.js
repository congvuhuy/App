import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUsers } from '../services/userService';
const TableUsers = (props)=>{
    const[listUsers,setListUsers] = useState([]) 
    useEffect(()=>{
        //call apis
        getUsers()
       console.log(listUsers);
    },[])
    const getUsers = async()=>{
        let res= await fetchAllUsers();
        if (res && res.data) {
            setListUsers(res.data);
        }    
    }
    
    return(<>
         <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                </tr>
            </thead>
         
            <tbody>
                   {listUsers && listUsers.length>0 &&
                        listUsers.map((item,index)=>{
                            return(
                                <tr key={`user-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                            </tr>
                            )
                        })
                    }
            </tbody>
        </Table>
    </>)
}
export default TableUsers;