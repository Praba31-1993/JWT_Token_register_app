import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate'
// import { useAuthStore } from '../store/store'

import styles from '../styles/Username.module.css';

export default function Password() {

//   const navigate = useNavigate();
//   const setUsername = useAuthStore(state => state.setUsername);

  const formik = useFormik({
    initialValues : {
      password : 'admin@123'
    },
    validate : passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
    //   setUsername(values.username);
    //   navigate('/password')
    console.log("values", values);
    }
  })

  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Hello Again!</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Explore More by connecting with us.
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                  <img src={avatar}  alt="avatar" className={styles.profile_img}/>
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('password')} type="text" placeholder='Password' className={styles.textbox}/>
                  <button  type='submit' className={styles.btn}>Sign In</button>
              </div>

              <div className="text-center py-4">
                <span className='text-gray-500'>Not a Member <Link className='text-red-500' to="/recovery">Forget Password</Link></span>
              </div>

          </form>

        </div>
      </div>
    </div>
  )
}