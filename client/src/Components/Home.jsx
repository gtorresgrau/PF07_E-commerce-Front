import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card.jsx';
import Navbar from './NavBar.jsx';
import Paginado from './Paginado.jsx';
import { getAllSneackers, filterByBrand, sortPrice, sortAz } from '../Actions/Actions';
import S from './Styles/Home.module.css';
import Footer from './Footer.jsx';



export default function Home() {
    const dispatch = useDispatch();
    //const{id} = useParams ();
    const allSneakers = useSelector((state) => state.sneakers);

    const [currentPage, setCurrentPage] = useState(1);
    const [sneakersPerPage] = useState(8);
    const [, setOrden] = useState(1);

    let indexLastSneaker = currentPage * sneakersPerPage;
    let indexFirstSneaker = indexLastSneaker - sneakersPerPage

    const actualySneakers = allSneakers.slice(indexFirstSneaker, indexLastSneaker);
    //console.log('actualySneakers:',actualySneakers)


    useEffect(() => {
        dispatch(getAllSneackers())
    }, [dispatch]);

    function handlerFilterBrand(e) {
        setCurrentPage(1);
        e.preventDefault();
        dispatch(filterByBrand(e.target.value))
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
                    setCurrentPage={setCurrentPage}/>
                </div>

                {/* <div className="carrousel"><h1>Aca va el carrousel</h1></div> */}
                
                <form id='Filtros' className={S.filters}>
                    <div>
                        <span className={S.span}>Sort by Name</span>
                            <label htmlFor='az'>
                                <input name='sortName' id='az' value='az' type='radio' className='input-radio' onChange={e => handlerFilter(e)} />A-Z</label>
                            <label htmlFor="za">
                            <input name='sortName' id='za' value='za' type='radio' className='input-radio' onChange={e=>handlerFilter(e)}/>Z-A</label>
                    </div>
                    <div >
                        <span className={S.span}>Sort by Stock</span>
                        <label htmlFor='+a-'>
                        <input name='sortStock' id='+a-' value='+a-' type='radio' className='input-radio' onChange={e=>handlerFilterStock(e)}/> Mayor Stock </label>
                        <label htmlFor='-a+'>
                        <input name='sortStock' id='-a+' value='-a+' type='radio' className='input-radio' onChange={e=>handlerFilterStock(e)}/> Menor Stock</label>
                    </div>
                    <div>
                    <span className={S.span}>Filter by Brand</span>
                    <select onChange={e=>handlerFilterBrand(e)} defaultValue='Brands' id='filterbrands' className={S.select}>
                        <option value='Brands'>All Brands</option>
                        <option value='Puma'>Puma</option>
                        <option value='Adiddas'>Adiddas</option>
                        <option value='Nike'>Nike</option>
                        <option value='Reebook'>Reebook</option>
                        <option value='John Foos'>John Foos</option>
                        <option value='Converse'>Converse</option>
                        <option value='Vans'>Vans</option>
                    </select>
                    </div>
                </form>
            </div>
           
            <div className={S.container}>
                 { actualySneakers?.map( c => {
                    return (
                        <div key={c.id}>
                            <Link to={'/sneakers/'+ c.id} className={S.link}>
                                <Card image={c.image} title={c.title} price={c.price} type={c.type} key={c.id}/>
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
{/* 
            <footer>
                <div className={S.footer}><h1>Aca va un footer</h1></div>
             </footer> */}
        </div>
    )
};