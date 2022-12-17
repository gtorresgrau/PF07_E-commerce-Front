import React from "react";
import {useState } from "react";
import { useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
import { addSneaker } from "../Actions/Actions.js";
import S from './Styles/AddSneaker.module.css'


export default function AddSneaker(){
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

    const talles = ["5","10","15","20","25","30","35","36","37","38","39","40","41","42","43","44"];
    const types = ["Sports", "Training", "Running"];
    const genres = ["Men", "Women", "Kids"];
    const [input, setInput] = useState(datos);
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
        console.log(input)
    }
    
    
    const handlerSize = (e) => {
        setInput({
            ...input,
            size: [...input.size, e.target.value ]
        })
        setErrores(validate({
            ...input,
            size: e.target.value
         }));

        console.log(input.size)
    }

    const handleDeletePlatforms = (e) => {
        setInput({
          ...input, 
          size: input.size.filter(s => s !== e)
        })
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

    const [productImg,setProductImg] = useState('');
    console.log('productImg:',productImg)
    const handleImageUpload = (e) => {
        const file =e.target.files[0];
        transformFile(file)

        console.log(file)
    }

    const transformFile = (file) => {
        const reader = new FileReader();
        if(file){
            reader.readAsDataURL(file);
            reader.onloadend =() =>{
                setProductImg(reader.result);
            };
        }else{
            setProductImg('');
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
            <div className={S.containerInput}>
                <label className={S.label} >Title</label>
                <input type='text'  className={S.input} name='title' placeholder="Type title of product" value={input.title} onChange={handlerOnChange} autoComplete='off'/>
                {errores.title && (<span className={S.spanError}>{errores.title}</span>)}
            </div>
            <div className={S.containerInput}>
                <label className={S.label}  htmlFor='price' >Price</label>
                <input type='number' className={S.input}   name='price' placeholder='Enter price' value={input.price} onChange={handlerOnChange}  autoComplete='off' min='1'/>
                {errores.price && (<span className={S.spanError}>{errores.price}</span>)}
            </div>
            <div className={S.containerInput}>
                <label className={S.label}  htmlFor='description' >Description</label>
                <input type='text'  className={S.input}  name='description' placeholder="Product description" value={input.description} onChange={handlerOnChange} autoComplete='off'/>
                {errores.description && (<span className={S.spanError}>{errores.description}</span>)}
            </div>
            <div className={S.containerInput}>
                    <label className={S.label}  htmlFor='size' >Size</label>
                    <select name='size' className={S.select}  onChange={(e)=>handlerSize(e)}>
                        <option value='' defaultValue hidden>Select sizes</option>
                        {talles?.map(e => (
                            <option value={e} key={e}>{e}</option>
                        ))}
                    </select>
                {errores.size && (<span className={S.spanError}>{errores.size}</span>)}
                <div className={S.containerSelected}>
                    <ul>
                    {
                        input.size.map((s, i) => (
                        <div className={S.option} key={i}>
                            <li className={S.li} name={s} value={i+1}>{s}</li>
                            <button className={S.button} type="button" onClick={ () => handleDeletePlatforms(s)}>X</button>
                        </div>
                        ))
                    }
                    </ul>
                </div>
            </div>
            <div className={S.containerInput}>
                <label className={S.label}  htmlFor='type' >Types</label>
                <select className={S.select} onChange={handlerOnChange} name='type'>
                    <option value='' defaultValue hidden>Choose type</option>
                        {types?.map(t => (
                            <option value={t} key={t} >{t}</option>
                        ))}
                </select>
                {errores.type && (<span className={S.spanError}>{errores.type}</span>)}          
            </div>
            <div className={S.containerInput}>
                <label className={S.label}  htmlFor='type' >Genres</label>
                <select className={S.select} name='genre' onChange={handlerOnChange}>
                    <option value='' defaultValue hidden>Choose genre</option>
                        {genres?.map(g => (
                            <option  value={g} key={g} >{g}</option>
                        ))}
                </select>
                {errores.genre && (<span className={S.spanError}>{errores.genre}</span>)}         
            </div>
            
            <div className={S.containerInput}>
                <label className={S.label}  htmlFor='image'>URL the Image</label>
                <input type="file" id='btn-photo' accept='image/' onChange={handleImageUpload} />
                {/* <input type='text'  className={S.input} name='image' placeholder="Type URL" value={input.image} onChange={handlerOnChange} autoComplete='off'/> */}
                {errores.image && (<span className={S.spanError}>{errores.image}</span>)}
            </div>
            <div className={S.containerInput}>
                <label className={S.label}  htmlFor='stock' >Stock</label>
                <input type='number' className={S.input}   name='stock' placeholder="Enter stock" value={input.stock} onChange={handlerOnChange} autoComplete='off' min='1'/>
                {errores.stock && (<span className={S.spanError}>{errores.stock}</span>)}
            </div>
            <div className={S.containerInput}>
                <label className={S.label}  htmlFor='brand' >Brand</label>
                <input type='text' className={S.input}  name='brand' placeholder="Type brand" value={input.brand} onChange={handlerOnChange} autoComplete='off'/>
                {errores.brand && (<span className={S.spanError}>{errores.brand}</span>)}
            </div>
            <div className={S.containerInput}>
                <label className={S.label}  htmlFor='colour' >Colour</label>
                <input type='text' className={S.input}  name='colour' placeholder="Type colour" value={input.colour} onChange={handlerOnChange} autoComplete='off'/>
                {errores.colour && (<span className={S.spanError}>{errores.colour}</span>)}
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
        <div>
            {productImg?<> <img id="sneaker-photo" alt='sneaker' /></>: 'Not image'
            }
        </div>
    </div>
    </div>
)
};
