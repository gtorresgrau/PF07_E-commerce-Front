import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
//import { Link } from 'react-router-dom';
import Card from './Card.jsx';
import Navbar from './NavBar.jsx';
import Paginado from './paginado.jsx';
import { getAllSneackers, filterByBrand, sortPrice, sortAz, filterByColour, filterByGenre, filterByType } from '../Actions/Actions';
import S from './Styles/Home.module.css';
import Footer from './Footer.jsx';
import header from '../Images/header2.jpg';

import SimpleSlider from './Carousel.jsx';
import CarouselBrands from './CarouselBrands.jsx';


import Loading from './Loading.jsx';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TuneIcon from '@mui/icons-material/Tune';
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { HashLink as Link } from 'react-router-hash-link';

const theme = createTheme({
    palette: {
      primary: {
        main: grey[800],
      },
    },
  });

const style = {
    position: 'absolute',
    top: '5.5rem',
    right: '-1%',
    // transform: 'translate(-50%, -50%)',
    width: 280,
    height: '100%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overflowX: 'scroll'
  };


var filter = []
var a = []
export default function Home() {
    const dispatch = useDispatch();

    const allSneakers = useSelector((state) => state.sneakers);
    const allCoul = useSelector((state) => state.allSneakers);
    const allTyp = useSelector((state) => state.allSneakers);
    const allBra = useSelector((state) => state.allSneakers);
    const allGen = useSelector((state) => state.allSneakers);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [currentPage, setCurrentPage] = useState(1);
    const [sneakersPerPage] = useState(10);
    const [, setOrden] = useState(1);

    let indexLastSneaker = currentPage * sneakersPerPage;
    let indexFirstSneaker = indexLastSneaker - sneakersPerPage

    const actualySneakers = allSneakers.slice(indexFirstSneaker, indexLastSneaker);

    useEffect(() => {
        dispatch(getAllSneackers())
    }, [dispatch]);

    let Colours = [];
    allCoul.map(e => (Colours.push(e.colour)));
    const datac = new Set(Colours)
    let allColours = [...datac]

    let Types = [];
    allTyp.map(e => (Types.push(e.type)));
    const datat = new Set(Types)
    let allTypes = [...datat]

    let Brands = [];
    allBra.map(e => (Brands.push(e.brand)));
    const datab = new Set(Brands)
    let allBrands = [...datab]

    let Genres = [];
    allGen.map(e => (Genres.push(e.genre)));
    const datag = new Set(Genres)
    let allGenres = [...datag]

    function handlerFilterBrand(e) {

        setCurrentPage(1);
        let v = e.target.value
        console.log('home:', v)
        if (filter.includes(`brand=${v}&`)) {
            a = filter.filter((e) => e !== (`brand=${v}&`))
            filter = a
            if (filter.length === 0) {
                dispatch(getAllSneackers())
            } else {
                dispatch(filterByBrand(filter.join('')))
                console.log('filterB:', filter)
            }
        } else {
            filter.push(`brand=${v}&`)
            dispatch(filterByBrand(filter.join('')))
            console.log('filterB:', filter)
        }
    }

    function handlerFilterColours(e) {
        setCurrentPage(1);
        let v = e.target.value
        console.log(v)
        if (filter.includes(`colour=${v}&`)) {
            a = filter.filter((e) => e !== (`colour=${v}&`))
            filter = a
            if (filter.length === 0) {
                dispatch(getAllSneackers())
            } else {
                dispatch(filterByColour(filter.join('')))
            }
        } else {
            filter.push(`colour=${v}&`)
            dispatch(filterByColour(filter.join('')))
        }
    }

    function handlerFilterGenre(e) {

        setCurrentPage(1);
        let v = e.target.value
        console.log(v)
        if (filter.includes(`genre=${v}&`)) {
            a = filter.filter((e) => e !== (`genre=${v}&`))
            filter = a
            if (filter.length === 0) {
                dispatch(getAllSneackers())
            } else {
                dispatch(filterByGenre(filter.join('')))
            }
        } else {
            filter.push(`genre=${v}&`)
            dispatch(filterByGenre(filter.join('')))
        }
    }

    function handlerFilterType(e) {
        setCurrentPage(1);
        let v = e.target.value
        console.log(v)
        if (filter.includes(`type=${v}&`)) {
            a = filter.filter((e) => e !== (`type=${v}&`))
            filter = a
            if (filter.length === 0) {
                dispatch(getAllSneackers())
            } else {
                dispatch(filterByType(filter.join('')))
            }
        } else {
            filter.push(`type=${v}&`)
            dispatch(filterByType(filter.join('')))
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

            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

            <img src={header} className={S.img} alt='frame' />
            <CarouselBrands />

            <h1 className={S.title1}>AMPLIFY YOUR ENERGY</h1>

            <Link 
                style={{ textDecoration: 'none', color: 'white' }}
                smooth
                to='/sneakers#displaySearch'><h1 className={S.button}>SHOP NOW</h1>
            </Link>

            <h1 className={S.title} >Trending This Week</h1>
            <div className={S.space}>
            <SimpleSlider />
            </div>
            <div id="displaySearch" className={S.shop}>
            <h1 className={S.title2} >Shop & Find Yours</h1>
            <Button
                theme={theme}
                color="primary"
                variant="outlined"
                size="large"
                sx={{ textTransform: 'capitalize', fontWeight: 'bold', color: '#242423', height: '3rem', mr:'4rem', mb:'2.5rem'}}
                endIcon={<TuneIcon />}
                onClick={handleOpen}>Filter & Sort
            </Button>
            </div>
            <div >
            <Modal
                open={open}
                onClose={handleClose}
                disableScrollLock="true"
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Filter and Sort
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2}}>
                    {/* <div>
                        <span className={S.filters}>Sort by Name</span>
                        <label htmlFor='az'>
                            <input name='sortName' id='az' value='az' type='radio' className='input-radio' onChange={e => handlerFilter(e)} />A-Z</label>
                            <br/>
                        <label htmlFor="za">
                            <input name='sortName' id='za' value='za' type='radio' className='input-radio' onChange={e => handlerFilter(e)} />Z-A</label>
                    </div> */}
                    <div >
                        <span className={S.filters}>Sort by Price</span>
                        <label htmlFor='+a-'>
                            <input name='sortStock' id='+a-' value='+a-' type='radio' className='input-radio' onChange={e => handlerFilterStock(e)} /> Higher price </label>
                            <br/>
                        <label htmlFor='-a+'>
                            <input name='sortStock' id='-a+' value='-a+' type='radio' className='input-radio' onChange={e => handlerFilterStock(e)} /> Lower price </label>
                    </div>
                    <span className={S.filters}>Filter by Genres</span>
                    <div className={S.checkout} onChange={e => handlerFilterGenre(e)}>
                        <span className={S.span}></span>
                        {allGenres.map(e => (
                            <label htmlFor={e} key={e}><input type="checkbox" name="genre" id={e} value={e} key={e} />{e}</label>
                        ))}
                    </div>
                    <span className={S.filters}>Filter by Brand</span>
                    <div className={S.checkout} onChange={e => handlerFilterBrand(e)}>
                        {allBrands.map(e => (
                            <label htmlFor={e} key={e}><input type="checkbox" name="brand" id={e} value={e} key={e} />{e}</label>
                        ))}
                    </div>
                    <span className={S.filters}>Filter by Colour</span>
                    <div className={S.checkout} onChange={e => handlerFilterColours(e)}>
                        {allColours.map(e => (
                            <label htmlFor={e} key={e}><input type="checkbox" name="colour" id={e} value={e} key={e} />{e}</label>
                        ))}
                    </div>
                    <span className={S.filters}>Filter by Types</span>
                    <div className={S.checkout} onChange={e => handlerFilterType(e)}>
                        {allTypes.map(e => (
                            <label htmlFor={e} key={e}><input type="checkbox" name="type" id={e} value={e} key={e} />{e}</label>
                        ))}
                    </div>
                </Typography>
                </Box>
            </Modal>
            </div>
            
            <div className={S.container}>
                {!actualySneakers.length ? <Loading /> : actualySneakers.map(c => {
                    return (
                        <div key={c.id}>
                            <Card image={c.image} title={c.title} price={c.price} type={c.type} key={c.id} id={c.id} stock={c.stock} />
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