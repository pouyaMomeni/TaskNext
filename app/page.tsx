'use client'
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { useGetPosts } from './_hook';
import { useRouter } from 'next/navigation'



export default function Home() {
  // Hook for fetch data
  const {data,isLoading} = useGetPosts()
  // for move between routes
  const router = useRouter()

  return (
    <Box >
      <Box sx={{display:'flex',justifyContent:'center',paddingTop:'2rem',fontWeight:'bold',fontSize:{xs:'1.1rem',sm:'1.3rem',md:'1.5rem',lg:'1.7rem'}}}>  Posts </Box>
    {isLoading ? 
    <Box sx={{display:'flex',flexDirection:'column',gap:'3rem',padding:'1rem',justifyContent:'center',alignItems:'center',marginTop:'3rem'}}>
      <Skeleton sx={{borderRadius:'15px'}} variant="rectangular" width={'95%'} height={350} />
      <Skeleton sx={{borderRadius:'15px'}} variant="rectangular" width={'95%'} height={350} />
      <Skeleton sx={{borderRadius:'15px'}} variant="rectangular" width={'95%'} height={350} />
      <Skeleton sx={{borderRadius:'15px'}} variant="rectangular" width={'95%'} height={350} />
    </Box>
    :
    <Box  sx={{display:'flex',flexDirection:'column',padding:'2rem',gap:'2rem'}}>
      {data?.data.slice(0,10).map((value : any , index : number)=>{
        return(
          <Box onClick={()=> router.push(`/post?number=${value.id}`)} className='bgGradient grow'  key={index}  sx={{display:'flex',justifyContent:'start',flexDirection:'column',gap:"0.5rem",padding:'1rem',borderRadius:'15px',boxShadow:3,cursor:'pointer',fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>
            <Box sx={{display:'flex',alignItems:'center',fontWeight:'bold'}}>{value.id} - {value.title}</Box>
            <Box sx={{display:'flex',alignItems:'center',gap:'5px'}}>
              <Box sx={{fontWeight:'bold'}}>URL :</Box>
              <Box className='decorationUrl' sx={{color:'#4361ee'}}>{value.url}</Box>
            </Box>
            <Box>Content : {value.content}</Box>
          </Box>
        )
      })}
    </Box>
   }
   </Box>
  );
}
