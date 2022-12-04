import React from 'react';
import portada from '../Images/portada.jpg';
import Cards from './cards/Cards';

function Home() {
    return (
        <div>
            
            {/* <div>
                <img src={portada} width="100%" alt="imagen no encontrada"/>
            </div> */}
            
            <div>
              <Cards />             
            </div>
            
        </div>
    )
}

export default Home