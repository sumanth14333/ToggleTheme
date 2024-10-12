// import React from 'react'
import * as yup from 'yup';


export const Validation = yup.object({
    firstname: yup.string().required('First Name is required'),
    surname: yup.string().required('Sur Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    dob: yup.date().required('Date of Birth is required')
}) 

