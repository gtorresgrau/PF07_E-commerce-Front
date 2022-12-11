import React from "react";
import {useState } from "react";
import { useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
import { addSneaker } from "../Actions/Actions.js";
import S from './Styles/AddSneaker.module.css'


export default function CreateActivity(){
    const dispatch = useDispatch();
    //const allSneakers = useSelector((state) => state.allSneakers)
    //console.log('countid: ',countriesId)
    
    const form = document.getElementById('newSneaker')
    const btn = document.getElementById('btn')

    const datos = {
        title:"", 
        price:"", 
        description:"", 
        size:[],
        image:"",
        stock:"",
        brand:"",
        genre:"",
        colour:"",
        type:"",
    };   

    const talles = ["5","10","15","20","25","30","35","36","37","38","39","40","41","42","43","44"]
    const [input, setInput] = useState(datos)
    const [errores, setErrores] = useState({});

    function validate(input){
        let errores = {};
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        if(!input.title)errores.title = 'Title is Required';
        else if(!input.price) errores.price = 'Price is Required';
        else if(!input.description.length>10000) errores.description = 'Duration is to long. It has to be less than 10000 ';
        else if(!input.size.length) errores.size = 'Size is Required';
        else if(!input.image) errores.image = 'Image is Required';
        else if(!input.stock) errores.stock = 'Stock is Required';
        else if(!input.brand.trim()){ 
            errores.brand = 'Brand is Required'
        }else if(!regexName.test(input.brand.trim())){
            errores.brand = 'Brand only accept leters and spaces';
        }        
        else if(!input.genre) errores.genre = 'Genre is Required';
        else if(!input.colour) errores.colour = 'Colour is Required';
        else if(!input.type) errores.type = 'type is Required';

        return errores;
    }


    function handlerOnChange(e){
        let valor = e.target.value
        console.log('valor:',valor)
            setInput({
                ...input,
                [e.target.name]: valor
            })
            setErrores(validate({
            ...input,
            [e.target.name]: valor
            }));
        }
    
    function handlerChecks(e){
        let valor = e.target.value
        setInput({
            ...input,
            [e.target.name]: valor
        })
        setErrores(validate({
           ...input,
           [e.target.name]: valor
        }));
        console.log(input)
    };

    const handlerSize=(e)=>{
        if(e.target.checked === true){    
        setInput({
            ...input,
            size: [...input.size, e.target.value ]
        })
        setErrores(validate({
            ...input,
            size: e.target.value
         }));
         console.log('true:',input.size)
        }
        if(e.target.checked === false){
            console.log('false:',input.size)
            setInput({
                ...input,
                size: input.size.filter((s) => s !== e.target.value)
            })
        }
    }

       

    function handlerSubmit(e){
        e.preventDefault();
        if(Object.keys(errores).length === 0 ){
                console.log(input)
                dispatch(addSneaker(input))
                alert('Sneaker added succesfully')
                setInput({
                    title:"", 
                    price:"", 
                    description:"", 
                    size:[],
                    image:"",
                    stock:"",
                    brand:"",
                    genre:"",
                    colour:"",
                    type:"",
                })
                console.log('input_salida:',input);
                form.reset();
                btn.disabled = true;     
        }else{
            btn.disabled = true;
            alert('The Sneaker was not created, the form contains errors.')
        }
    };

return (
    <div className={S.general}>
        <Link to='/sneakers'>
            <button className={S.back}>Back</button>
        </Link>
    <div className={S.container}>
        <header className={S.header}>
            <h1>Add a New Sneaker</h1>
            <p>Complete all required fields</p>
        </header>
        <form onSubmit={handlerSubmit} id='newSneaker' className={S.newSneaker}>
            <div className={S.groups}>
                <input type='text' className={S.input} name='title' placeholder=" " value={input.title} onChange={handlerOnChange} autoComplete='off'/>
                <label htmlFor='title' className={S.label}>Title</label>
                {errores.title && (<p className='errores'>{errores.title}</p>)}
            </div>
            <div className={S.groups}>
                <input type='number' className={S.input} name='price' placeholder=' ' value={input.price} onChange={handlerOnChange}  autoComplete='off' min='1'/>
                <label htmlFor='price' className={S.label}>Price</label>
                {errores.price && (<p className='errores'>{errores.price}</p>)}
            </div>
            <div className={S.groups}>
                <input type='text' className={S.input} name='description' placeholder=" " value={input.description} onChange={handlerOnChange} autoComplete='off'/>
                <label htmlFor='description' className={S.label}>Description</label>
                {errores.description && (<p className='errores'>{errores.description}</p>)}
            </div>
            <div className={S.select}>
                    <label htmlFor='size' className={S.label}>Size</label>
                        {talles?.map(e => (
                            <label htmlFor={e} key={e}><input type="checkbox" name="size" id={e} value={e} key={e} onChange={(e)=>handlerSize(e)}/>{e}</label>
                        ))}
                {errores.size && (<p className='errores'>{errores.size}</p>)}
            </div>
            <div className={S.groups}>
                <p>type</p>
                <label htmlFor="Sport"><input type='radio' name="type" value='Sports' onChange={handlerChecks}/>Sports</label>
                <label htmlFor="Training"><input type='radio' name="type" value='Training' onChange={handlerChecks}/>Training</label>
                <label htmlFor="Running"><input type='radio' name="type" value='Running' onChange={handlerChecks}/>Running</label>
                {errores.type && (<p className='errores'>{errores.type}</p>)}          
            </div>
            <div className={S.groups}>
                <p>Genre</p>
                <label htmlFor="Men"><input type='radio' name="genre" value='Men' onChange={handlerChecks}/>Men</label>
                <label htmlFor="Women"><input type='radio' name="genre" value='Women' onChange={handlerChecks}/>Women</label>
                <label htmlFor="Kids"><input type='radio' name="genre" value='Kids' onChange={handlerChecks}/>Kids</label>
                {errores.genre && (<p className='errores'>{errores.genre}</p>)}           
            </div>
            <div className={S.groups}>
                <input type='text' className={S.input} name='image' placeholder=" " value={input.image} onChange={handlerOnChange} autoComplete='off'/>
                <label htmlFor='image' className={S.label}>URL the Image</label>
                {errores.image && (<p className='errores'>{errores.image}</p>)}
            </div>
            <div className={S.groups}>
                <input type='number' className={S.input} name='stock' placeholder=" " value={input.stock} onChange={handlerOnChange} autoComplete='off' min='1'/>
                <label htmlFor='stock' className={S.label}>Stock</label>
                {errores.stock && (<p className='errores'>{errores.stock}</p>)}
            </div>
            <div className={S.groups}>
                <input type='text' className={S.input} name='brand' placeholder=" " value={input.brand} onChange={handlerOnChange} autoComplete='off'/>
                <label htmlFor='brand' className={S.label}>Brand</label>
                {errores.brand && (<p className='errores'>{errores.brand}</p>)}
            </div>
            <div className={S.groups}>
                <input type='text' className={S.input} name='colour' placeholder=" " value={input.colour} onChange={handlerOnChange} autoComplete='off'/>
                <label htmlFor='colour' className={S.label}>Colour</label>
                {errores.colour && (<p className='errores'>{errores.colour}</p>)}
            </div>
            <div className={S.submit}>
                <button className={S.btnSubmit} type="Submit" id ='btn' disabled={!input.title || !input.price || !input.description || !input.size || !input.image || !input.stock || !input.brand ||!input.genre ||!input.colour || !input.type}>CREATE</button>
            </div>
            <div>
            <Link to='/sneakers'>
                <button className={S.cancel}>CANCEL</button>
            </Link>
        </div>
        </form>
    </div>
    </div>
)
};
