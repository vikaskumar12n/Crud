import React  from 'react'
import Layout from './Layout'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const schema = yup
  .object()
  .shape({
    name: yup.string().required().max(15).min(2),
    email: yup.string().required().max(12).min(5),
    password: yup.string().required().max(12)
   
  })
const AdminEdit = () => {
  const {id}=useParams()
  const Navigate=useNavigate()
  const { register, handleSubmit,formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });


const update=async(data)=>{
  const url=`http://localhost:3000/Admin/${id}`;
  const response= await axios.put(url,data,{headers:{"Content-type":"application/json"}})
  console.log(response)
  Navigate('/AdminView')
}



  return (
   <>
    <Layout>
       <div className='row'>
        <div className='col-sm-4 mx-auto border border-4 mt-5 rounded-2'>
        <h3 className='text-center '>Form <span className='text-danger mt-3 mb-4 '>Update</span></h3>
        <form onSubmit={ handleSubmit((d) => update(d))}>
      <input {...register('name')} className='form-control mt-3' placeholder='Enter Your Name'/>
      {errors.name && <p className='text-danger'>{errors.name.message}</p>}
      <input {...register('email')} className='form-control mt-3' placeholder='Enter your Email'/>
      {errors.email && <p className='text-danger'>{errors.email.message}</p>}
      <input {...register('password')} className='form-control mt-3 mb-3' placeholder='Enter your password' />
      {errors.password && <p className='text-danger'>{errors.password.message}</p>}
      <input type="submit" className='form-control  mb-3 btn btn-danger' value={"Submit"} />
    </form>
        </div>
       </div>
    </Layout>
   </>
  )
}

export default AdminEdit
