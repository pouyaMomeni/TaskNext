'use client'
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { useGetComments } from '@/app/_hook'; 
import { useSearchParams } from 'next/navigation'
import {BiArrowBack} from 'react-icons/bi'
import { useRouter } from 'next/navigation'
const Post = () => {
  // Hook for fetch data
  const {data,isLoading} = useGetComments()
  // for getting query param
  const searchParams = useSearchParams()
  let value  =  parseInt(searchParams.get('number') || '{}') 
  // for move between routes
  const router = useRouter()

  
  return (
    <Box>
      <Box sx={{display:'flex',justifyContent:'space-around',paddingTop:'2rem',fontWeight:'bold',fontSize:{xs:'1.1rem',sm:'1.3rem',md:'1.5rem',lg:'1.7rem'},alignItems:'center'}}>
          <BiArrowBack className='cursor-pointer' onClick={()=> router.push('/')}/>
          <Box>Comments</Box> 
          <Box></Box>
      </Box>
      {isLoading ? 
      <Box sx={{display:'flex',flexDirection:'column',gap:'3rem',padding:'1rem',justifyContent:'center',alignItems:'center',marginTop:'3rem'}}>
        <Skeleton sx={{borderRadius:'15px'}} variant="rectangular" width={'95%'} height={350} />
        <Skeleton sx={{borderRadius:'15px'}} variant="rectangular" width={'95%'} height={350} />
      </Box>
      :
      <Box  sx={{display:'flex',flexDirection:'column',padding:'2rem',gap:'2rem'}}>
        {data?.data.filter((name:any) => name?.postId === value).map((value : any , index : number)=>{
          return(
          <Box className='bgGradient grow'  key={index}  sx={{display:'flex',justifyContent:'start',flexDirection:'column',gap:"0.5rem",padding:'1rem',borderRadius:'15px',boxShadow:3,cursor:'pointer',fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>
            <Box sx={{display:'flex',alignItems:'center',fontWeight:'bold'}}>Comment number {index + 1} :</Box>
            <Box>{value.comment}</Box>
          </Box>
          )
        })}
      </Box>
    }
    </Box>
  )
}

export default Post