// import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUsers } from '../services/userService';
import ReactPaginate from 'react-paginate';
const TableUsers = (props)=>{
    const[listUsers,setListUsers] = useState([]);
    const[totalUsers,setTotalUsers] = useState(0);
    const[totalPages,setTotalPages] = useState(0);
    useEffect(()=>{
        //call apis
        getUsers(1)
     
    },[])
    const getUsers = async(page)=>{
        let res= await fetchAllUsers(page);
        if (res && res.data) {
            setListUsers(res.data);
            setTotalUsers(res.total);
            setTotalPages(res.total_pages);
            console.log(totalUsers);
        }    
    }
    //phan trang 
    const handlePageClick = (event) => {
       console.log(event);
       getUsers(+event.selected+1)
      };
    return(<>
         <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                </tr>
            </thead>
         
            <tbody>
                   {listUsers && listUsers.length>0 &&
                        listUsers.map((item,index)=>{
                            return(
                                <tr key={`user-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                            </tr>
                            )
                        })
                    }
            </tbody>
        </Table>
        <ReactPaginate className='pagination'
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}

        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
      />
        
    </>)
}
export default TableUsers;