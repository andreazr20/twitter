import React from 'react'
import circuloverde from '../src/assets/img/circuloverde.png'
import { Link } from 'react-router-dom'
import MainPage from './MainPage'
import foto from '../src/assets/img/foto.png'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Modalpost = ({setEstado, estado, setPostsInMainPage}) => {
    const [profilePicture, setProfilePicture] = useState(foto);
    const [message, setMessage] = useState('');
    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState('Andrea Zárate');
    const [arroba, setArroba] = useState('@andreazara87326');


    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
          id: uuidv4(),
          message: message,
          profilePicture: profilePicture,
          username: username,
          arroba: arroba,
        };
        setPosts([...posts, newPost]);
        setMessage('');
        setEstado(false); // Cierra el modal
        setPostsInMainPage([...posts, newPost]); // Agrega el nuevo post a la lista de posts en MainPage
      };

  return (
    <div className='backdrop-blur-sm w-screen h-screen'>
        <div className='ml-[30vw] relative w-[30vw] h-[15vw] border border-gray-500 rounded-xl bg-black mt-[-7vw]'>
        <div className='flex'>
            <h3 className='text-white ml-[1vw] mt-[0.5vw]'  onClick={() => setEstado(!estado)}>X</h3>
            <h3 className='texto-azul mt-[0.5vw] ml-[24vw]'><strong>Drafts</strong></h3>
        </div>

        <div className='flex ml-[-24vw] mt-[-4vw] mb-[3vw]'>
            <div className='relative'>
                <img className='w-[3vw] ml-[25vw] mt-[5vw]' src={circuloverde} alt="" />
                <h3 className='relative text-white ml-[26.2vw] mt-[-2.3vw] text-[1vw]'><strong>a</strong></h3>
            </div> 
            <div className='relative'>
                <input type='text' className='text-[1vw] absolute mt-[6vw] border border-black  ml-[2vw] text-gray-400 bg-black'  placeholder='What is happening!?' />
            </div>  

            <div className='flex mb-[1vw] gap-7 mt-[5vw] ml-[-3vw]'>
                <svg className='w-[0.8vw] fill-blue-400 mt-[9vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 80c8.8 0 16 7.2 16 16l0 319.8-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3L48 96c0-8.8 7.2-16 16-16l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
                <svg className='w-[0.8vw] fill-blue-400 mt-[9vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z"/></svg>
                <svg className='w-[0.8vw] fill-blue-400 mt-[9vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg>
                <svg className='w-[0.8vw] fill-blue-400 mt-[9vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                <svg className='w-[0.7vw] fill-blue-400 mt-[9vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 0c13.3 0 24 10.7 24 24l0 40 144 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 40 0c35.3 0 64 28.7 64 64l0 16 0 48 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-48 0-16C0 92.7 28.7 64 64 64l40 0 0-40c0-13.3 10.7-24 24-24zM400 192L48 192l0 256c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-256zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                <svg className='w-[0.7vw] fill-indigo-300 mt-[9vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                <Link to={'/MainPage'} ><button className='fondo-btn text-white ml-[10vw] w-[3.5vw] border rounded-3xl  text-sm h-10 mt-[9vw]' onClick={handleSubmit}><strong>Post</strong></button></Link>
                
                
            </div>   
            
        <div className='flex mt-[12vw] ml-[-17vw] text-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-[0.8vw] fill-blue-400 mt-[-4vw] ml-[-10.5vw] mr-[0.5vw]' viewBox="0 0 512 512"><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
                <h3 className=' text-blue-400'><strong>Everyone can reply</strong></h3>
            </div>                 
        </div>
    </div>
    </div>
  )
}

export default Modalpost