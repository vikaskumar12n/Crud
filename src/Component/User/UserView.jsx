import React, { useEffect, useState } from 'react'
import Layout from '../User/UserLayout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const UserView = () => {
  const [data,setData]=useState([])
const navi=useNavigate()
const fetchData=async()=>{
  const url="http://localhost:3000/User";
  const response=await axios.get(url)
  setData(response.data)
}
useEffect(()=>{
  fetchData()
},[])


const del=async(id)=>{
  const url=`http://localhost:3000/User/${id}`
  const response= await axios.delete(url,data,{
    Headers:{"Content-type":"application/json"}
  })
  console.log(response);
  fetchData()
}

const Edit=(item)=>{
  navi(`/UserEdit/${item.id}`)
}

  return (
    <>
      <Layout>
<div className='row'>
<h3 className='text-center'>User<span className='text-info'>Form</span></h3>
<hr/>

  <div className='col-sm-12 border border-4 mt-5  mx-auto'>
  <table class="table">
  <thead className='table table-dark pt-4'>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Active</th>
    </tr>
  </thead>
  <tbody>
   {data?.map((item,index)=>{
  
      
     return(
      <tr key={index}>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.password}</td>
      <td>
        <button className='btn btn-danger ms-3 mt-2' onClick={()=>del(item.id)}>Delete</button>
        <button className='btn btn-info ms-3 mt-2'onClick={()=>Edit(item)}>Update</button>
      </td>
    </tr>
     )
   
   })}
   
  </tbody>
</table>
  </div>
</div>
       
      </Layout>
    </>
  )
}

export default UserView
