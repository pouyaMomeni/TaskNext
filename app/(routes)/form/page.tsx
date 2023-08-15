'use client'
import React from 'react'
import { useFormik } from "formik";
import { Box ,TextField,Button} from '@mui/material';
import {GiFlatPlatform} from 'react-icons/gi'
import { MyInpute } from '@/app/_components/client/inpute';
import { MyButton } from '@/app/_components/client/button';
import Image from 'next/image';
import logo from '../../_assets/images/logo-new.png'
import LoginSchema from '@/app/_schema/loginSchema';

const Form = () => {

    const formik = useFormik({
      initialValues: {
        username: '',
        password: '',
      },
      validationSchema: LoginSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  return (
    <Box sx={{width:'100%',height:'98vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
     <Box   sx={{width:'25rem',height:'25rem',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'15px',boxShadow:3}}>
      <form className='form-post' onSubmit={formik.handleSubmit}>
        <Box sx={{display:'flex',alignItems:'center',gap:'5px',justifyContent:'center'}}>
            <Image width={140} src={logo} alt='logo'/>
        </Box>
        <Box sx={{display:'flex',justifyContent:'center'}}>
            <MyInpute 
             id="username"
             name='username'
             value={formik.values.username}
             onChange={formik.handleChange}
             size='small' label="Username"
             onBlur={formik.handleBlur}
             error={formik.touched.username && Boolean(formik.errors.username)}
             helperText={formik.touched.username && formik.errors.username}
             />
        </Box>
        <Box sx={{display:'flex',justifyContent:'center',marginTop:'2rem'}}>
            <MyInpute 
            id="password"
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            size='small' label="Password"
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            />

        </Box>
        <Box sx={{display:'flex',justifyContent:'center',marginTop:'1.5rem'}}>
        <button type='submit' className='border-2 rounded p-2 bg-slate-200 w-[9rem] flex justify-center items-center gap-2 hover:bg-slate-300'>Submit</button>
        </Box>
      </form>
     </Box>
    </Box>
  )
}

export default Form