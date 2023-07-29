import React from 'react'
import Header from '../../component/Header/Header'
import ContentWrapper from '../../component/ContentWrapper/ContentWrapper'
import { Box, Button, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { LoginSchema } from './schemas/LoginSchema'

const Login = () => {



  const inputStyle = {
    width:"100%",
    background:"black",
    border:"1px solid white",
    borderLeft:"none",
    borderRight:"none",
    outline:"none",
    borderTop:"none"
    ,color:"white",
    fontSize:"16px",marginTop:"30px"
  }

  const FormCss = {
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center"
}
const initialValues={
  email:"",
  password:""
}
const {values,errors,handleChange,handleBlur,handleSubmit,touched}=useFormik({
initialValues:initialValues,
validationSchema:LoginSchema,
onSubmit:(values,action)=>{
action.resetForm()
}
})
console.log(errors)


  return (
   <Box sx={{height:"80vh"}}>
      <Header/>
      <Box sx={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Box sx={{width:"500px",borderRadius:"20px",display:"flex",flexDirection:"column",alignItems:"center",height:"300px",background:"black"}}>
          <Typography variant='h5' sx={{color:"white",marginTop:"30px",fontSize:"700"}}>Login</Typography>
          <Box sx={{width:"85%"}}>
          <form  onSubmit={handleSubmit} style={FormCss}>
              <input type="email" placeholder='Email' name='email' value={values.email} style={inputStyle} onChange={handleChange}/>
              {errors.email && touched.email ? <p style={{color:"red"}}>{errors.email}</p> : null}


              <input type="password" placeholder='Password' name='password' value={values.password}  style={inputStyle} onChange={handleChange}/>
              {errors.password && touched.password ? <p style={{color:"red"}}>{errors.password}</p> : null}

              
              <Button type='submit' sx={{width:"200px",borderRadius:"0px",color:"white",background:"aqaue",fontWeight:"700",marginTop:"50px",":hover":{background:"white"}}} variant="contained">Go</Button>
          </form>
          </Box>
        </Box>
      </Box>
   </Box>
  )
}

export default Login
