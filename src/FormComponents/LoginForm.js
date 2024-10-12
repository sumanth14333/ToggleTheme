import React from 'react'
import { Formik,Form, Field, ErrorMessage } from 'formik'
import { Validation } from './Validation'
import { UserInput } from './types'

const LoginForm = () => {
    const initialvalues = UserInput = {
        firstname: '',
        lastname: '',
        email:'',
        dob:''
    }

    const onSubmit = (values= UserInput)=>{
        alert(Object.values(values))
    }



  return (
    <div>
        <h1>User Form</h1>
        <Formik
            initialValues={initialvalues}
            validationSchema={Validation}
            onSubmit={(values, {setSubmitting}) =>{
                setTimeout(() => {
                    setSubmitting(false)
                }, 300)
            }}
        >

            {({isValid, isSubmitting}) =>(
                <Form >
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <label>First Name</label>
                    <Field type='text' id='firstname' style={{width:'250px'}} />
                    <ErrorMessage name='' component='div' className='error'/>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <label>Last Name</label>
                    <Field type='text' id='lastname' style={{width:'250px'}}  />
                    <ErrorMessage name='' component='div' className='error'/>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <label>Email ID</label>
                    <Field type='email'id='email' style={{width:'250px'}} />
                    <ErrorMessage name='' component='div' className='error'/>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <label>DOB</label>
                    <Field type='date' id='dob' style={{width:'250px'}} />
                    <ErrorMessage name='' component='div' className='error'/>
                </div>
                <button type='submit' disabled={isSubmitting || !isValid}>Submit</button>
            </Form> 
            )}

        </Formik>
        
      
    </div>
  )
}

export default LoginForm
