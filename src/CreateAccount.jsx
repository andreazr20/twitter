import React, { useState } from 'react'
import logo from '../src/assets/img/logo.png'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import { Link } from 'react-router-dom';

// FUNCION PARA GUARDAR INF DE REACT EN FIREBASE.COM
const CreateAccount = ({ setEstado, estado }) => {
  const [email, setEmail] = useState();
  const [password, setPasword] = useState();

  const registro = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    })
  }

return (
    <div className='fixed w-screen h-screen backdrop-blur-sm flex items-center justify-center text-white top-0 left-0 create3'>
      <div className='bg-black w-[37vw] h-[40vw] p-10 relative create'>
        <div className='flex'>
          <svg className='fill-white w-3  mt-5 ml-4' onClick={() => setEstado(!estado)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
          <img className='w-[6%] ml-[50%] pt-2 logo' src={logo} alt="" />
        </div>

        <div className='flex'>

          <h1 className='font-bolder text-white text-[210%] mb-[2vw] ml-7 create1'><strong>Create your account</strong></h1>
        </div>

        <form action="" method="post" className='create1'>
          <input type="text" name='name' placeholder='Name' required className='bg-transparent create1 border-[1px] border-gray-500 rounded-sm p-6 w-[28vw] mb-2 ml-[1.5vw]' /><br />
          <input type="text" name='email' placeholder='Email' onChange={(e)=> setEmail(e.target.value)} autoComplete='off' required className='bg-transparent create1 border-[1px] border-gray-500 rounded-sm p-6 w-[28vw] mb-2 ml-[1.5vw]' />
          <input type="text" name='password' placeholder='Password' autoComplete='off' required onChange={(e)=> setPasword(e.target.value)} className='bg-transparent create1 border-[1px] border-gray-500 rounded-sm p-6 w-[28vw] mb-3 ml-[1.5vw]' />
          <h2><span className='texto-azul ml-[68%] create2'>Use email instead</span></h2>

          <div className='ml-[1.5vw]'>
            <h2 className='text-white mb-3 mt-6 create2'><strong>Date of birth</strong></h2>
            <p className='text-gray-400 text-left mb-5 mr-[6%] create2'>This will not be shown publicly. onfirm your own age,even if this account is for a business, a pet, or something else.</p>
            <div className='create4'>
              <input type="date" name='nacimiento' required className='p-4 create2 bg-transparent text-gray-400 border-[1px] border-gray-500 rounded-sm w-[28vw] h-[4vw] mb-10 create1' />
              <Link onClick={()=>registro(email, password)} to={'/MainPage'} className=' bg-gray-400 p-4 border-none rounded-3xl text-gray-800 pl-[13vw] pr-[13vw] '><strong>Next</strong></Link>
              <button></button>
            </div>
          </div>
        </form>

      </div>

    </div>
)
}

export default CreateAccount