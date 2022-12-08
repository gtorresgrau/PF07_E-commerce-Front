import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card.jsx';
import Navbar from './NavBar.jsx';
import Paginado from './paginado.jsx';
import { getAllSneackers, filterByBrand, sortPrice, sortAz, filterByColour } from '../Actions/Actions';
import S from './Styles/Home.module.css';
import Footer from './Footer.jsx';
import header from '../Images/header2.jpg';

var filter=[]
var a=[]
export default function Home() {
    const dispatch = useDispatch();
  
    const allSneakers = useSelector((state) => state.sneakers);
   

    const [currentPage, setCurrentPage] = useState(1);
    const [sneakersPerPage] = useState(8);
    const [, setOrden] = useState(1);

    let indexLastSneaker = currentPage * sneakersPerPage;
    let indexFirstSneaker = indexLastSneaker - sneakersPerPage

    const actualySneakers = allSneakers.slice(indexFirstSneaker, indexLastSneaker);
 
   


    useEffect(() => {
        dispatch(getAllSneackers())
    }, [dispatch]);

    function handlerFilterBrand(e) {
        setCurrentPage(1);
        let v=e.target.value
        if (filter.includes(`brand=${v}&`)){
            a=filter.filter((e)=>e!==(`brand=${v}&`))
            filter=a
            if(filter.length===0){
                dispatch(getAllSneackers())
            }else{
                dispatch(filterByBrand(filter.join('')))
            }
        }else{  
        filter.push(`brand=${v}&`)
        dispatch(filterByBrand(filter.join('')))
        }
    }
      
       
   

    function handlerFilterColours(e) {
        
        setCurrentPage(1);
        let v=e.target.value
        if (filter.includes(`colour=${v}&`)){
            a=filter.filter((e)=>e!==(`colour=${v}&`))
            filter=a
            if(filter.length===0){
                dispatch(getAllSneackers())
            }else{
                dispatch(filterByColour(filter.join('')))
            }
        }else{  
        filter.push(`colour=${v}&`)
        dispatch(filterByColour(filter.join('')))
        }
    }
        
        
    

    function handlerFilter(e) {
        dispatch(sortAz(e.target.value))
        setOrden(e.target.value)
        setCurrentPage(1);
    }

    function handlerFilterStock(e) {
        dispatch(sortPrice(e.target.value))
        setOrden(e.target.value)
        setCurrentPage(1);
    }

    return (
        <div>
            <div className={S.header}>

                <div className={S.navigate}>
                    <Navbar currentPage={currentPage}
                        setCurrentPage={setCurrentPage} />
                </div>
                <img src={header} className={S.img} alt='frame'/>
                {/* <div className="carrousel"><h1>Aca va el carrousel</h1></div> */}
                <form id='Filtros' className={S.filters}>
                    <div>
                        <span className={S.span}>Sort by Name</span>
                        <label htmlFor='az'>
                            <input name='sortName' id='az' value='az' type='radio' className='input-radio' onChange={e => handlerFilter(e)} />A-Z</label>
                        <label htmlFor="za">
                            <input name='sortName' id='za' value='za' type='radio' className='input-radio' onChange={e => handlerFilter(e)} />Z-A</label>
                    </div>
                    <div >
                        <span className={S.span}>Sort by Price</span>
                        <label htmlFor='+a-'>
                            <input name='sortStock' id='+a-' value='+a-' type='radio' className='input-radio' onChange={e => handlerFilterStock(e)} /> Higher price </label>
                        <label htmlFor='-a+'>
                            <input name='sortStock' id='-a+' value='-a+' type='radio' className='input-radio' onChange={e => handlerFilterStock(e)} /> Lower price </label>
                    </div>
                    <div onChange={e => handlerFilterBrand(e)}>
                        <span className={S.span}></span>
                        
                        <label htmlFor='Puma'><input type="checkbox" name="brand" id="Puma" value='Puma'/>Puma</label>
                        <label htmlFor='Adidas'><input type="checkbox" name="brand" id="Adidas" value='Adidas'/>Adidas</label>
                        <label htmlFor='Nike'><input type="checkbox" name="brand" id="Nike" value='Nike'/>Nike</label>
                        <label htmlFor='Fila'><input type="checkbox" name="brand" id="Fila" value='Fila'/>Fila</label>
                        <label htmlFor='Reebok'><input type="checkbox" name="brand" id="Reebok" value='Reebok'/>Reebok</label>
                    </div>
                    <div onChange={e => handlerFilterColours(e)}>
                        <span className={S.span}></span>
                        <label htmlFor='White'><input type="checkbox" name="colour" id="White" value='White'/>White</label>
                        <label htmlFor='Black'><input type="checkbox" name="colour" id="Black" value='Black'/>Black</label>
                        <label htmlFor='Red'><input type="checkbox" name="colour" id="Red" value='Red'/>Red</label>
                        <label htmlFor='Blue'><input type="checkbox" name="colour" id="Blue" value='Blue'/>Blue</label>
                        <label htmlFor='Pink'><input type="checkbox" name="colour" id="Pink" value='Pink'/>Pink</label>
                    </div>

                </form>
                <Paginado
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    allSneakers={allSneakers}
                    sneakersPerPage={sneakersPerPage}
                />
            </div>

            <div className={S.container}>
                {actualySneakers?.map(c => {
                    return (
                        <div key={c.id}>
                            <Link to={'/sneakers/' + c.id} className={S.link}>
                                <Card image={c.image} title={c.title} price={c.price} type={c.type} key={c.id} />
                            </Link>
                        </div>
                    )
                })
                }
            </div>

            <Paginado
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                allSneakers={allSneakers}
                sneakersPerPage={sneakersPerPage}
            />
            <br />
            <footer>
                <div className={S.footer}><Footer /></div>
            </footer>
        </div>
    )
};