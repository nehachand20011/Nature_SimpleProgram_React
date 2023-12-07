//signup ko kaam yesmai gareko mero page ma bhako signup ko kaam xaina tesma gareko tarika farak xa if herna man lagisi chai hami le herna sakxam routees ma gayera register gareko thau ma chai signup garnu parxa
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'


const Register = () => {
    return (
        < >
            <Formik
            //password validation
            initialValues={{fname:'', lname:'',email:'',password:'',cpassword:''}}
            validationSchema={Yup.object({

                fname:Yup
                .string()
                .required('First Name is requred')
                .max(20,'20 characters or less'),

                lname:Yup
                .string()
                .required('Last Name is requred')
                .max(20,'20 characters or less'),

                email:Yup
                .string()
                .required('Email is requred')
                .email('Invalid Email format'),

                password:Yup
                .string()
                .required('Password is requred')
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$!_?])[A-Za-z\s@#_$!?]{8,50}$/,'must contain one uppercase,lowercase,one digit and one special symbol and must be minium 8 characters'),

                cpassword:Yup
                .string()
                .required('Conform Password is requred')
                .oneOf([Yup.ref('password'),null],'conform password doesnot match')
            })}
            
            >

                <div className="container-fluid mt-2 mb-2">
                    <div className="row d-flex justify-content-center">
                        <div className='col-md-6 shadow p-3'>
                            <Form>
                                <div className="text-center">
                                    <img className="mb-4" src="https://th.bing.com/th/id/R.a4133da816a7ce938c467bc782d822b3?rik=HFXoVigXYi9FwA&pid=ImgRaw&r=0" alt="" width="72" height="57" />
                                </div>
                                <h1 className="h3 mb-3 fw-normal text-primary">Please Register</h1>

                                <div className="mb-2">
                                    <levele htmlFor='fname'>First Name</levele>
                                    <Field type='text' name='fname' id='fname'  className='form-control' />
                                    <ErrorMessage name='fname'>{msg => <div className='text-danger'>{msg}</div>}</ErrorMessage>
                                </div>

                                <div className="mb-2">
                                    <levele htmlFor='lname'>Last Name</levele>
                                    <Field type='text' name='lname' id='lname' className='form-control' />
                                    <ErrorMessage name='lname'>{msg => <div className='text-danger'>{msg}</div>}</ErrorMessage>
                                </div>

                                <div className="mb-2">
                                    <levele htmlFor='email'> Email</levele>
                                    <Field type='email' name='email' id='email' className='form-control' />
                                    <ErrorMessage name='email'>{msg => <div className='text-danger'>{msg}</div>}</ErrorMessage>
                                </div>

                                <div className="mb-2">
                                    <levele htmlFor='password'>Password</levele>
                                    <Field type='password' name='password' id='password' className='form-control' />
                                    <ErrorMessage name='password'>{msg => <div className='text-danger'>{msg}</div>}</ErrorMessage>
                                </div>

                                <div className="mb-2">
                                    <levele htmlFor='fname'>Conform Password </levele>
                                    <Field type='password' name='cpassword' id='cpassword' className='form-control' />
                                    <ErrorMessage name='cpassword'>{msg => <div className='text-danger'>{msg}</div>}</ErrorMessage>
                                </div>

                                <button className="w-100 btn btn-lg btn-primary" type="submit">sign up</button>
                                do you have an account?
                                <Link to="/login">login</Link>

                                <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>

                            </Form>
                        </div>
                    </div>
                </div>
            </Formik>
        </ >

    )
}

export default Register