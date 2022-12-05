<<<<<<< HEAD
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
        
=======
import React from 'react';
//import portada from '../Images/portada.jpg';
import Cards from './cards/Cards';

export default function Home() {
    return (
        <div>
            
            {/* <div>
                <img src={portada} width="100%" alt="imagen no encontrada"/>
            </div> */}
            <div>
              <Cards />             
            </div>
            
        </div>
>>>>>>> b090ada3b2dc3f4d6f30fe4594801ea97ab160af
    )
};