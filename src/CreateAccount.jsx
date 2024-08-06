import React, { useState } from 'react'
import logo from '../src/assets/img/logo.png'
import { Link } from 'react-router-dom'
import { db } from './Firebase';

const CreateAccount = ({setEstado, estado}) => {
//   const [details, setDetails] = useState({
//     fName: '',
//     lName: '',
//     email: '',
   
// })

// const PostData =async(event)=>{
//     event.preventDefault()

//     const{fName,email, password, date}=details;

//    const res = await fetch("https://twitter-ae81f-default-rtdb.firebaseio.com/",
//    {
//        method:'POST',
//        headers:{
//            'Content-Type':'application/json'
//        },
//        body:JSON.stringify({
//         fName,
//         email,
//         password,
//         date,
       
//        })
//     }) 
// if(res){
//   alert('hola')
// }else{
//   alert('error')
// }
// }

  const [details, setDetails] = useState({
    fName: '',
    email: '',
    password: '',
    date: '',
  });

  const PostData = async (event) => {
    event.preventDefault();

    const { fName, email, password, date } = details;

    try {
      await db.ref('users').push({
        fName,
        email,
        password,
        date,
      });
      console.log('Datos guardados con éxito');
    } catch (error) {
      console.error('Error al guardar datos:', error);
    }
  };

  return (

    <div className='fixed w-screen h-screen backdrop-blur-sm flex items-center justify-center text-white top-0 left-0'>
      <div className='bg-black w-[37vw] h-[40vw] p-10 relative'>
        <div className='flex'>
          <svg  className='fill-white w-3  mt-5 ml-4'  onClick={() => setEstado(!estado)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
          <img className='w-[6%] ml-[50%] pt-2' src={logo} alt="" />
        </div>
      
        <div className='flex'>
        
          <h1 className='font-bolder text-white text-[210%] mb-[2vw] ml-7'><strong>Create your account</strong></h1>
        </div>
        
        <form action="" method="post">
          <input type="text" name='name'  placeholder='Name' onChange={(event) => setDetails({ ...details, fName: event.target.value })} required className='bg-transparent border-[1px] border-gray-500 rounded-sm p-6 w-[28vw] mb-2 ml-[1.5vw]'/><br />
          <input type="text" name='email'  placeholder='Email' onChange={(event) => setDetails({ ...details, email: event.target.value })} autoComplete='off' required className='bg-transparent border-[1px] border-gray-500 rounded-sm p-6 w-[28vw] mb-2 ml-[1.5vw]' />
          <input type="text" name='password' placeholder='Password' autoComplete='off' required  onChange={(event) => setDetails({ ...details, password: event.target.value })} className='bg-transparent border-[1px] border-gray-500 rounded-sm p-6 w-[28vw] mb-3 ml-[1.5vw]' />
          <h2><span className='texto-azul ml-[68%] '>Use email instead</span></h2>

          <div className='ml-[1.5vw]'>
          <h2 className='text-white mb-3 mt-6'><strong>Date of birth</strong></h2>
          <p className='text-gray-400 text-left mb-5 mr-[6%]'>This will not be shown publicly. onfirm your own age,even if this account is for a business, a pet, or something else.</p>
            <div className=''>
                <input type="date" name='nacimiento' required onChange={(event) => setDetails({ ...details, date: event.target.value })} className='p-4 bg-transparent text-gray-400 border-[1px] border-gray-500 rounded-sm w-[28vw] h-[4vw] mb-10' />
            <Link to={"/MainPage"} required className=' bg-gray-400 p-4 border-none rounded-3xl text-gray-800 pl-[13vw] pr-[13vw]'><button onClick={PostData}><strong>Next</strong></button></Link>
            </div>
          </div>
        </form>
        
      </div>

      
    </div>
  )
}

export default CreateAccount