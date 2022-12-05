import React, { Fragment, useState } from 'react'
import NavBar from './NavBar'




 export default function Home() {


const[currenPage,setCurrenPage] =useState(1)  


    return (
        <div>
          <NavBar
          setCurrenPage={setCurrenPage}
          />
         <div>Home</div>

        </div>
        
    )
};