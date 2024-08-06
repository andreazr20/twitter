// import React, { useState } from 'react'
import logo from '../src/assets/img/logo.png'
import linea from '../src/assets/img/linea.png'
import google from '../src/assets/img/googlelogo.png'
import { useState } from 'react'
import CreateAccount from '../src/CreateAccount'
import SignIn from './SignIn'


const Principal = () => {

  const [estado, setEstado] = useState(false);
  const [boton, setBoton] = useState(false);

  return (

    <div className='flex bg-black'>
      {/* PÁGINA PRINCIPAL CON LOG IN DE GOOGLE Y FB */}
      <div className='mt-[10%] ml-[15%] mr-[11%]'>
        <img className='w-[80%]' src={logo} alt="" />
      </div>

      <div className='mt-[6%] mb-[8%]'>
        <h1 className='titulo text-[600%] text-white mb-[5%]'>Hapening now</h1>
        <h2 className='titulo text-[170%] mb-[4%] text-white' >Join today.</h2>


        <div className='bg-white relative w-[50%] h-12 border rounded-3xl'>
          <button className='absolute mt-3 ml-28 text-[100%]'><strong>Sign up with Google</strong></button>
          <img className='mt-[5%] ml-20' src={google} alt="" />
        </div>

        <div className='bg-white relative w-[50%] h-12 border rounded-3xl mt-4'>
          <button className='absolute mt-3 ml-28 text-[100%]'><strong>Sign up with Apple</strong></button>
          <svg className='w-5 mt-[2.5%] ml-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
        </div>


        <div className='flex mt-5'>
          <img className='h-[1%] w-36 mt-3 mr-1' src={linea} alt="" />
          <h3 className='text-white text-[100%] ml-2 mr-2'>or</h3>
          <img className='h-[1%] w-36 mt-3 ml-1' src={linea} alt="" />
        </div>

        <div>
          <button id='container' onClick={() => setEstado(!estado)} className='text-white  w-[50%] h-12 border rounded-3xl mt-4 text-[100%] fondo-btn mb-3' ><strong>Create account</strong></button>
          {estado && <CreateAccount setEstado={setEstado} estado={estado} />}
        </div>

        <p className='text-gray-500 text-sm mb-16'>By signing up, you agree to the <span className='texto-azul'>Terms of service</span> and <br /> <span className='texto-azul'>Privacy Policy,</span> including <span className='texto-azul'>Cookie use.</span></p>


        <h2 className='text-white text-[120%]'><strong>Already have an account?</strong></h2>
        <button onClick={()=> setBoton(!boton)} className='texto-azul w-[50%] h-12 border rounded-3xl mt-4 text-[100%]'><strong>Sign in</strong></button>
        {boton && <SignIn setBoton={setBoton} boton={boton} />}
      </div>


      {/* MODAL SIGN IN TO X */}


        {/* <div className='modal-container2' id='modal_container2'>
            <div className='modal p-10 border-black rounded-xl'>
            <div className='relative bg-black'>
                <svg className='fill-white w-3 absolute mt-5 ml-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
                <img className='w-[6%] ml-[50%] pt-2' src={logo} alt="" />
            </div>

            <h1 className='text-white text-[230%]  mb-[5%] mt-8 ml-32'><strong>Sign in to X</strong></h1>
            <div className='bg-white relative w-[60%] ml-32 h-12 border rounded-3xl'>
                <button className='absolute mt-3 ml-28 text-[100%]'>Sign up with Google</button>
                <img className='mt-[5%] ml-20' src={google} alt="" />
            </div>

            <div className='bg-white relative w-[60%] h-12 border rounded-3xl mt-4 ml-32'>
                <button className='absolute mt-3 ml-28 text-[100%]'><strong>Sign up with Apple</strong></button>
                <svg className='w-5 mt-[2.5%] ml-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
            </div>

            <div className='flex mt-5 ml-[23%] mb-5'>
                <img className='h-[1%] w-[35%] mt-3 mr-1' src={linea} alt="" />
                <h3 className='text-white text-[100%] ml-2 mr-2'>or</h3>
                <img className='h-[1%] w-36 mt-3 ml-1' src={linea} alt="" />
            </div>

            <input type='text' placeholder='Phone, email, or username' className='bg-transparent border-[1px] border-gray-500 rounded-sm p-5 w-[59%] ml-[23%] mb-6 ' />

            <div className='ml-[%]'>
                <button className='bg-white w-[61%] p-2 ml-32 border-none rounded-3xl text-gray-800' ><strong>Next</strong></button>
                <button className=' bg-transparent w-[61%] p-2 rounded-3xl text-white border-[1px] border-gray-500 ml-32 mt-5' ><strong>Forgot password?</strong></button>

                <h3 className='text-gray-500 ml-[22%] mt-12'>Don't have an account? <span className='texto-azul'>Sign up</span></h3>
            </div>
        </div>
      </div> */}
    </div>

  )
}

export default Principal