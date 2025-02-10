import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
const UserActivity = () => {

  const[mydata,setMydata] = useState([]);

  const loadData=async()=>{
    let api = 'http://localhost:8080/customer/customerdisplay';
    try {
      const response = await axios.get(api);
      setMydata(response.data);
      console.log(response.data);
    } catch (error) {
      message.error(error.response.data.msg);
    } 
  }

  useEffect(()=>{
    loadData();
  },[])

  const deleteData=async(id)=>{
    let api =  'http://localhost:8080/customer/customerdelete';
    try {
      const response = await axios.post(api,{id:id});
      message.success(response.data);
      loadData();
    } catch (error) {
      message.error(error.response.data.msg);
    }
  }

  let sno=0;
  const res = mydata.map((key)=>{
    sno++;
    return(
      <>
        <tr>
          <td>{sno}</td>
          <td style={{textAlign:'start'}}>{key.customername}</td>
          <td style={{textAlign:'start'}}>{key.customeremail}</td>
          <td style={{textAlign:'start'}}>{key.customermobile}</td>
          <td>
          <i class="fas fa-trash" onClick={()=>{deleteData(key._id)}}></i>
          </td>
        </tr>
      </>
    )
  })

  return (
    <div>
        <h1>UserActivity</h1>
        <Table bordered striped hover responsive>
          <thead>
            <tr>
              <th>S.No</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Phone</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
          {res}
          </tbody>
        </Table>
    </div>
  )
}

export default UserActivity