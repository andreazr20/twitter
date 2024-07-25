import React from 'react'

const CreateAccount = () => {
  return (
    <div>
       <div className='modal-container ' id='modal_container'>
      <div className='modal p-10 border-black rounded-xl'>
        <div className='relative bg-black'>
          <svg onClick={close} id='close' className='fill-white w-3 absolute mt-5 ml-4'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
          <img className='w-[6%] ml-[50%] pt-2' src={logo} alt="" />
        </div>
        
          <h1 className='text-white text-[230%]  mb-[4%] mt-6'><strong>Create your account</strong></h1>
          <input type="text" placeholder='Name' className='bg-transparent border-[1px] border-gray-500 rounded-sm p-6 w-[95%] mb-8 '/><br />
          <input type="text" placeholder='Phone' className='bg-transparent border-[1px] border-gray-500 rounded-sm p-6 w-[95%] mb-3 ' />
          <h2><span className='texto-azul ml-[73%] '>Use email instead</span></h2>

          <div className='ml-[%]'>
            <h2 className='text-white text-left mb-3 mt-6'>Date of birth</h2>
            <p className='text-gray-400 text-left mb-5'>This will not be shown publicly. onfirm your own age,even if this account is for a <br /> business, a pet, or something else.</p>
            <div className=''>
            <input type="date" className='p-4 bg-transparent text-gray-400 border-[1px] border-gray-500 rounded-sm w-[95%] mb-10' />
            </div>
            <button className=' bg-gray-400 w-[95%] p-4 border-none rounded-3xl text-gray-800' ><strong>Next</strong></button>
            
          </div>
      </div>
      </div>
    </div>
  )
}

export default CreateAccount