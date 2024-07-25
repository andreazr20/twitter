import React from 'react'

const CreateAccount = ({setEstado, estado}) => {
  return (
    <div className='fixed w-screen h-screen backdrop-blur-sm flex items-center justify-center text-white top-0 left-0'>
      <div className='bg-black w-[30vw] h-[30vw] p-10 relative'>
        <div onClick={()=>setEstado(!estado)}>
          x
        </div>
        <h1 className='font-bolder text-[40px]'>Crea tu cuenta</h1>
        <input type="text" className='bg-black border border-gray-500 py-2 my-10 w-[100%] text-white' placeholder='Nombre' />
        <input type="text" className='bg-black border py-2 w-[100%] border-gray-500  text-white' placeholder='Numero' />
      </div>
    </div>
  )
}

export default CreateAccount