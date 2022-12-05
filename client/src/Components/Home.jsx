import React, { Fragment, useState } from 'react'
import Navbar from './NavBar'


const [filterO, setFilterO] = useState('')
const[currentPage,setCurrentPage] =useState(1)  

  function Home() {
    return (
        <div>
         <Navbar
         setCurrentPage={setCurrentPage}
         />
        <div>Home</div>

        </div>
        
    )
}

export default Home