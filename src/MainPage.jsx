import React from 'react'
import logo from '../src/assets/img/logo.png'
import circuloverde from '../src/assets/img/circuloverde.png'
import lupa from '../src/assets/img/lupa.png'
import chef from '../src/assets/img/chef.png'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import foto from '../src/assets/img/foto.png'
import Modalpost from './Modalpost'



const MainPage = () => {


const [profilePicture, setProfilePicture] = useState(foto);
const [message, setMessage] = useState('');
const [posts, setPosts] = useState([]);
const [username, setUsername] = useState('Andrea Zárate');
const [arroba, setArroba] = useState('@andreazara87326');
const [estado, setEstado] = useState(false);


  // Function for handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, { id: uuidv4(), message: message, profilePicture: profilePicture, profilePicture: profilePicture, username: username, arroba: arroba}]);
    setMessage('');  
  }


  const [listaVisible, setListaVisible] = useState(false);

  const handleButtonClick = () => {
    setListaVisible(!listaVisible);
  };
// para borrar tweets

const [tweetVisible, setTweetVisible] = useState(true);

  const handleDeleteClick = () => {
    setTweetVisible(false);
  };

  return (
    <div>
        {/* LEFT BAR */}

        <div className='bg-black w-[23%] h-full fixed main4'>
            <img className='w-[7%] pt-[10%] ml-[30%]' src={logo} alt="" />
            <div className='flex'>
                <svg className='w-[5%] fill-white ml-[30%] mt-[10%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                <h3 className='text-white mt-[10%] ml-[3%] text-lg'><strong>Home</strong></h3>
            </div>

            <div className='flex'>
                <svg className='w-[5%] fill-white ml-[30%] mt-[7%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                <h3 className='text-white mt-[7%] ml-[3%] text-lg'><strong>Explore</strong></h3>
            </div>

            <div className='flex'>
                <svg className='w-[5%] fill-white ml-[30%] mt-[7%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/></svg>
                <h3 className='text-white mt-[7%] ml-[3%] text-lg'><strong>Notifications</strong></h3>
            </div>

            <div className='flex'>
                <svg className='w-[5%] fill-white ml-[30%] mt-[7%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>
                <h3 className='text-white mt-[7%] ml-[3%] text-lg'><strong>Messages</strong></h3>
            </div>

            <div className='flex'>
                <svg className='w-[5%] fill-white ml-[30%] mt-[7%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/></svg>
                <h3 className='text-white mt-[7%] ml-[3%] text-lg'><strong>Grok</strong></h3>
            </div>

            <div className='flex'>
                <svg className='w-[5%] fill-white ml-[30%] mt-[7%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z"/></svg>
                <h3 className='text-white mt-[7%] ml-[3%] text-lg'><strong>Communities</strong></h3>
            </div>

            <div className='flex'>
                <img className='w-[5%] fill-white ml-[30%] mt-[7%]' src={logo} alt="" />
                <h3 className='text-white mt-[7%] ml-[3%] text-lg'><strong>Premium</strong></h3>
            </div>

            <div className='flex'>
                <svg className='w-[5%] fill-white ml-[30%] mt-[7%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/></svg>
                <h3 className='text-white mt-[7%] ml-[3%] text-lg'><strong>Profile</strong></h3>
            </div>

            <div className='flex'>
                <svg className='w-[5%] mb-[10%] fill-white ml-[30%] mt-[7%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
                <h3 className='text-white mt-[7%] ml-[3%] mb-[9%] text-lg'><strong>More</strong></h3>
            </div>

            <button onClick={() => setEstado(!estado)} className='fondo-btn text-white w-[55%] ml-[29%] mt-[10%] border rounded-3xl h-12'><strong>Post</strong></button>
               
            
           

            <div className='flex'>
                <div className='relative ml-[29%] mt-[10%] pb-[10%]'> 
                    <img className='w-[92%] absolute' src={circuloverde} alt="" />
                    <h3 className='text-white relative ml-5 mr-5 mt-2 text-lg'><strong>a</strong></h3>
                </div>
                <div className='mt-10'>
                    <h3 className='text-white'><strong>andrea zarate</strong></h3>
                    <h3 className='text-white'>@andreazara87326</h3>
                </div>
            </div>
            
        </div>

    {/* NAVBAR SUPERIOR */}
    <div className='bg-black h-20 ml-[23%] w-full gap-60 fixed'>
        <div className=' flex pt-12 mt-1'>
            <div className='flex border border-b-gray-500  border-t-transparent border-l-transparent border-r-transparent'>
            <h3 className='text-white ml-[5vw] w-[28vw]'><strong>For you</strong></h3>
            <h3 className='text-gray-400 w-[10vw]'>Following</h3>
            </div>
            
        
            <img className='absolute ml-[46vw] mt-[-0.7%]' src={lupa} alt="" />
            <input type="text" placeholder='              Search' className='w-[22vw] h-12 bg-zinc-800  rounded-3xl mt-[-1.5%] ml-[2vw]' />
        </div>
        
    </div>



    {/* DIV WHAT'S HAPPENING  */}
    <div className='border border-slate-700 border-b-[0.1vw] max-w-[66vw] border-r-[0.1vw]'>
    <div className='flex bg-black'>
        <div className='relative'>
            <img className='w-[3vw] ml-[25vw] mt-[6vw]' src={circuloverde} alt="" />
            <h3 className='relative text-white ml-[26.2vw] mt-[-3.3vw] text-[1vw]'><strong>a</strong></h3>
        </div>
        <div className='relative'>
            <input value={message} onChange={(e) => setMessage(e.target.value)} type='text' className='text-[1vw] absolute mt-[6vw] border border-black  ml-[1vw] text-gray-400 bg-black'  placeholder='What is happening!?' />
        </div>
       

        <div className='flex mb-[1vw] gap-7'>
        <svg className='w-[1vw] fill-blue-400 mt-[9vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 80c8.8 0 16 7.2 16 16l0 319.8-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3L48 96c0-8.8 7.2-16 16-16l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
        <svg className='w-[1vw] fill-blue-400 mt-[9vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z"/></svg>
        <svg className='w-[1vw] fill-blue-400 mt-[9vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg>
        <svg className='w-[1vw] fill-blue-400 mt-[9vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
        <svg className='w-[0.8vw] fill-blue-400 mt-[9vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 0c13.3 0 24 10.7 24 24l0 40 144 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 40 0c35.3 0 64 28.7 64 64l0 16 0 48 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-48 0-16C0 92.7 28.7 64 64 64l40 0 0-40c0-13.3 10.7-24 24-24zM400 192L48 192l0 256c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-256zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
        <svg className='w-[0.8vw] fill-indigo-300 mt-[9vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
        
        </div>



        <div className='flex ml-[10vw]'>
            <button onClick={handleSubmit} className='fondo-btn text-white ml-[7vw] w-[5vw] border rounded-3xl mt-[8vw]  mb-[1vw] '><strong>Post</strong></button>
            <h2 className='text-blue-400 ml-[-28.5vw] mt-[11vw] h-[4vw] pt-4 pl-[21vw] border border-t-gray-500 border-b-gray-500 border-l-gray-500 border-r-gray-500  fixed w-[66vw] bg-black main3'>Show 35 post</h2>
            
        </div>
    </div>

    {/* DIV DE PERFIL   */}
    <div className='bg-black fixed'>
    <div className='relative'>
        <div className='fixed'>
            <ul className='bg-black text-cyan-600 mt-[3.95vw] absolute h-[80vw] ml-[22.9vw] w-[43.1vw] border border-t-transparent border-l-gray-700 border-r-gray-700 border-r-2'>
                    <li> 
                        <div className='flex'>
                            
                            {/* REEMPLAZO DE SURNAME */}
                            {tweetVisible && <div className='relative' >
                            {posts.map((post) => (
                            <ul>
                                <li key={uuidv4()} >
                            <div className='flex'>
                                <img className='w-[5vw]' src={post.profilePicture} alt="" />
                                <h3 className='text-white mt-5'><strong>{post.username}</strong></h3>
                                <div className='relative'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-6 fill-blue-400 absolute mt-5 ml-1' viewBox="0 0 512 512"><path d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-3 relative mt-6 ml-[0.5vw]' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                            <h3 className='ml-9 text-gray-400 mt-[-1vw]'>{post.arroba}</h3>
                            <div className='flex'>
                            <p className='text-white ml-[-6vw]'>{post.message}</p>
                            <svg id='boton1' onClick={handleButtonClick} xmlns="http://www.w3.org/2000/svg" className='fill-gray-500 w-[1vw] ml-[30vw] fixed' viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
                            

                                    {/* LISTA BOTON ELIMINAR */}
                            <ul id="lista" style={{ display: listaVisible ? 'block' : 'none' }} className='w-[25vw] border border-gray-500 h-[27vw] rounded-2xl fixed ml-[5vw] p-[1vw]'>
                                <li className=' bg-black'>
                                    <div className='flex mb-5'>
                                        <svg className='w-[1vw] fill-red-500 mr-3' id="delete-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg>
                                        <button className='text-red-500' id="delete-btn" onClick={handleDeleteClick}><strong>Delete</strong></button>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex mb-5'>
                                        <svg className='w-[1vw] mr-3 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                                        <button className='text-white'><strong>Edit</strong></button>
                                        
                                    </div>
                                </li>
                                <li>
                                    <div className='flex mb-5'>
                                        <svg className='w-[1vw] mr-3 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3L32 352c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 384l64 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96z"/></svg>
                                        <button className='text-white'><strong>Pin to your profile</strong></button>
                                    </div>
                                </li>
                                <li>
                                <div className='flex mb-5'>
                                    <svg className='w-[1vw] mr-3 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"/></svg>
                                        <button className='text-white'><strong>Highlights to your profile</strong></button>
                                    </div>
                                </li>
                                <li>
                                <div className='flex mb-5'>
                                    <svg className='w-[1vw] mr-3 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 0l0 64 64 0 0-64L64 96zm384 0L192 96l0 64 256 0 0-64zM64 224l0 64 64 0 0-64-64 0zm384 0l-256 0 0 64 256 0 0-64zM64 352l0 64 64 0 0-64-64 0zm384 0l-256 0 0 64 256 0 0-64z"/></svg>
                                        <button className='text-white'><strong>Add/remove @andreazara87326 from Lists</strong></button>
                                    </div>
                                </li>
                                <li>
                                <div className='flex mb-5'>
                                    <svg className='w-[1vw] mr-3 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z"/></svg>
                                        <button className='text-white'><strong>Change who can reply</strong></button>
                                    </div>
                                </li>
                                <li>
                                <div className='flex mb-5'>
                                    <svg className='w-[1vw] mr-3 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm128-64l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32zM480 96l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32s32 14.3 32 32z"/></svg>
                                        <button className='text-white'><strong>View posts engagements</strong></button>
                                    </div>
                                </li>
                                <li>
                                <div className='flex mb-5'>
                                    <svg className='w-[1vw] mr-3 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
                                    <button className='text-white'><strong>Embed post</strong></button>
                                    </div>
                                </li>
                                <li>
                                <div className='flex mb-5'>
                                    <svg className='w-[1vw] mr-3 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm128-64l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32zM480 96l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32s32 14.3 32 32z"/></svg>
                                    <button className='text-white'><strong>View posts analytics</strong></button>
                                    </div>
                                </li>
                                <li>
                                <div className='flex mb-4'>
                                    <svg className='w-[1vw] mr-3 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M319.4 372c48.5-31.3 80.6-85.9 80.6-148c0-97.2-78.8-176-176-176S48 126.8 48 224c0 62.1 32.1 116.6 80.6 148c1.2 17.3 4 38 7.2 57.1l.2 1C56 395.8 0 316.5 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 92.5-56 171.9-136 206.1l.2-1.1c3.1-19.2 6-39.8 7.2-57zm-2.3-38.1c-1.6-5.7-3.9-11.1-7-16.2c-5.8-9.7-13.5-17-21.9-22.4c19.5-17.6 31.8-43 31.8-71.3c0-53-43-96-96-96s-96 43-96 96c0 28.3 12.3 53.8 31.8 71.3c-8.4 5.4-16.1 12.7-21.9 22.4c-3.1 5.1-5.4 10.5-7 16.2C99.8 307.5 80 268 80 224c0-79.5 64.5-144 144-144s144 64.5 144 144c0 44-19.8 83.5-50.9 109.9zM224 312c32.9 0 64 8.6 64 43.8c0 33-12.9 104.1-20.6 132.9c-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8c0-35.1 31.1-43.8 64-43.8zm0-144a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
                                        <button className='text-white'><strong>Request Community Note</strong></button>
                                    </div>
                                </li>
                            </ul>
                            </div>
                            </div>  
                               
                            </div>
                            </li>
                            </ul>
                            
                             ))} 



                            </div>}  
                        </div>
                    </li>
                    
                </ul>
        </div>
                
        </div>
    </div>
    
    </div>
    

    {/* DIV SUBSCRIBE TO PREMIUM DEBAJO DE SEARCH  */}
    <div className='float-right bg-black  mt-[-7vw] w-[34vw] ml-[66vw] h-[55vw] fixed main1'>
        <div className='border border-gray-500 rounded-lg w-[21.5vw] ml-[2.5vw] mt-[1vw] p-2 pl-4'>
            <h1 className='text-white bg-black pt-2 pb-2 text-lg '><strong>Subscribe to Premium</strong></h1>
            <h2 className='text-white'>Subscribe to unlock new features and if <br /> elegible, receive a share of ads revenue</h2>
            <button className='fondo-btn text-white ml-[vw] w-[7vw] border h-10 rounded-3xl mt-[1vw]'><strong>Subscribe</strong></button>
        </div>

        {/* WHATS'S HAPPENING DIV */}
        <div className='border border-gray-500 rounded-lg w-[21.5vw] ml-[2.5vw] mt-[1vw] p-2 pl-4 main2'>
            <h1 className='text-white text-2xl'><strong>What's happening</strong></h1>
            <div className='flex mt-4'>
                <img className='w-16 h-16 mr-3' src={chef} alt="" />
                <div>
                <h2 className='text-white text-sm mt-3'><strong>Master Chef 2024</strong></h2>
                <h3 className='text-gray-500'>Award . LIVE</h3>

                <div className='mt-[2vw] ml-[-4vw] flex'>
                    <div>
                        <h3 className='text-zinc-400 relative'>Trending in Colombia</h3>
                        <h1 className='text-white text-lg'><strong>Claro Sports</strong></h1>
                        <h3 className='text-zinc-400'>1,453 posts</h3>
                    </div>
                    
                    <div  className='fill-zinc-400 w-5 ml-[8vw] mt-[1vw]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
                    </div>
                </div>


                <div className='mt-[2vw] ml-[-4vw] flex main'>
                    <div>
                        <h3 className='text-zinc-400 relative'>Trending in Colombia</h3>
                        <h1 className='text-white text-lg'><strong>Venezuela</strong></h1>
                    </div>
                    
                    <div  className='fill-zinc-400 w-5 ml-[8vw] mt-[1vw]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
                    </div>
                </div>


                <div className='mt-[2vw] ml-[-4vw] flex main5'>
                    <div>
                        <h3 className='text-zinc-400 relative'>Trending in Colombia</h3>
                        <h1 className='text-white text-lg'><strong>billie</strong></h1>
                        <h3 className='text-zinc-400'>33,2K posts</h3>
                    </div>
                    
                    <div  className='fill-zinc-400 w-5 ml-[8vw] mt-[1vw]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
                    </div>
                </div>

                <div className='mt-[2vw] ml-[-4vw] flex main5'>
                    <div>
                        <h3 className='text-zinc-400 relative'>Trending in Colombia</h3>
                        <h1 className='text-white text-lg'><strong>Totto</strong></h1>
                        <h3 className='text-zinc-400'>1,153 posts</h3>
                    </div>
                    
                    <div  className='fill-zinc-400 w-5 ml-[8vw] mt-[1vw]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
                    </div>
                </div>
                </div>
               
            </div>
        </div>
    </div>

     {estado && <Modalpost setEstado={setEstado} estado={estado} />}
    </div>

  )
}

export default MainPage