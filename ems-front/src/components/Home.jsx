import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

function Home() {

  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve username from local storage
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
}, []);

  return (
    <div>

      <NavBar />

      <div className='flex justify-center items-center pt-60 '>
        <h1 className=' font-extrabold text-4xl'>Welcome back {username}!</h1>
      </div>

    </div>
  )
}

export default Home