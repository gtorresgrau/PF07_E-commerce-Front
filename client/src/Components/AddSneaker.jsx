import React from "react";
import {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import { addActivity, getActivities, filterByContinent} from "../Actions/Actions.js";
import S from './Styles/AddSneaker.module.css'


export default function CreateActivity(){
    const dispatch = useDispatch();
    const allSneakers = useSelector((state) => state.allSneakers)
    //console.log('countid: ',countriesId)
    
    const form = document.getElementById('newActiviy')
    const btn = document.getElementById('btn')

    const datos = {
        title:'', 
        price:'', 
        description:'', 
        size:'',
        image:'',
        stock:'',
        brand:'',
        genre:'',
        colour:'',
        type:'',
    };   

    const [input, setInput] = useState(datos)
    const [errores, setErrores] = useState({});

    useEffect(()=>{
        dispatch(getActivities())
    },[dispatch]);

    function validate(input){
        let errores = {};
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        if(!input.title) errores.title = 'Title is Required';
        if(!input.price) errores.price = 'Price is Required';
        if(!input.description.length>10000) errores.description = 'Duration is to long. It has to be less than 10000 ';
        if(!input.size) errores.size = 'Size is Required';
        if(!input.image) errores.image = 'Image is Required';
        if(!input.stock) errores.stock = 'Stock is Required';
        if(!input.brand.trim()){ 
            errores.brand = 'Brand is Required'
        }else if(!regexName.test(input.brand.trim())){
            errores.brand = 'Brand only accept leters and spaces';
        };        
        if(!input.genre) errores.genre = 'Genre is Required';
        if(!input.colour) errores.colour = 'Colour is Required';
        if(!input.type) errores.type = 'type is Required';

        return errores;
    }


    function handlerOnChange(e){
        let valor = e.target.value
        setInput({
            ...input,
            [e.target.name]: valor
        })
        setErrores(validate({
           ...input,
           [e.target.name]: valor
        }));
    };
   
    function handlerFilterContinent(e){
        e.preventDefault();
        dispatch(filterByContinent(e.target.value))
      }
    
    function handlerSelect(e){
        if(!input.countriesId.includes(e.target.value)){
        setInput({
            ...input,
            countriesId: [...input.countriesId, e.target.value ]
        })
        setErrores(validate({
            ...input,
            countriesId: e.target.value
         }));
        }else{alert('The Country was already selected')}
    };

    function handleDelete(el){
        setInput({
            ...input,
            countriesId: input.countriesId.filter((country) => country !== el)
        })
    };

    function handlerSubmit(e){
        e.preventDefault();
        if(Object.keys(errores).length === 0 ){
                console.log(input)
                dispatch(addActivity(input))
                alert('Activity created succesfully')
                setInput({
                    name: '', 
                    difficulty:'', 
                    duration:'', 
                    season:'',
                    countriesId:[],
                })
                form.reset();
                btn.disabled = true;     
        }else{
            btn.disabled = true;
            alert('The activity was not created, the form contains errors.')
        }
    };

return (
    <div className={S.general}>
        <Link to='/countries'>
            <button className={S.back}>Back</button>
        </Link>
    <div className={S.container}>
        <header className={S.header}>
            <h1>Create a new Tourist Activity</h1>
            <p>Complete all required fields</p>
        </header>
        <form onSubmit={handlerSubmit} id='newActiviy' className={S.newActiviy}>
            <div className={S.groups}>
                <input type='text' className={S.input} name='name' placeholder=" " value={input.name} onChange={handlerOnChange} autoComplete='off'/>
                <label htmlFor='name' className={S.label}>Name</label>
                {errores.name && (<p className='errores'>{errores.name}</p>)}
            </div>
            <div className={S.groups}>
                <input type='number' className={S.input} name='difficulty' placeholder=' ' value={input.difficulty} onChange={handlerOnChange}  autoComplete='off' min='1' max='5'/>
                <label htmlFor='difficulty' className={S.label}>Difficulty 1-5</label>
                {errores.difficulty && (<p className='errores'>{errores.difficulty}</p>)}
            </div>
            <div className={S.groups}>
                <input type='number' className={S.input} placeholder=' ' name='duration' value={input.duration} onChange={handlerOnChange}  autoComplete='off' min='1' max='12'/>
                <label htmlFor='duration' className={S.label}>Duration</label>
                {errores.duration && (<p className='errores'>{errores.duration}</p>)}
            </div>
            <div className={S.groups}>
                <select name='season'className={S.input} onChange={handlerOnChange} defaultValue='Not'>
                        <option value="Not">Select a Season</option>
                        <option value="SUMMER">Summer</option>
                        <option value="FALL">Fall</option>
                        <option value="WINTER">Winter</option>
                        <option value="SPRING">Spring</option>
                        <option value="ALL SEASON">All Season</option>
                </select>
                {errores.season && (<p className='errores'>{errores.season}</p>)}
            </div>
            <div className={S.groups}>
                <label htmlFor='filterCont'></label>
                <select className={S.input} onChange={e=>handlerFilterContinent(e)} defaultValue='world'>
                     <option value='world' >All Continents</option>
                     <option value='Antarctica'>Antartica</option>
                     <option value='Africa'>Africa</option>
                     <option value='Asia'>Asia</option>
                     <option value='Europe'>Europe</option>
                     <option value='Oceania'>Oceania</option>
                     <option value='South America'>South America</option>
                     <option value='North America'>North America</option>
                </select>
            </div>
            <div className={S.groups}>
                    <label htmlFor='addCount'></label>
                    <select className={S.input} onChange={handlerSelect} name='countriesId' id='countrisId' defaultValue='Select'>
                        <option disabled value='Select'>Select a Country</option>
                        {countriesId.map((e)=>(<option key={e.id} value={e.id}>{e.name}</option> ))}
                    </select>
                    {errores.countriesId && (<p className='errores'>{errores.countriesId}</p>)}
            </div>
            <div className={S.submit}>
                <button className={S.btnSubmit} type="Submit" id ='btn' disabled={!input.name || !input.duration || !input.difficulty || !input.season || !input.countriesId.length}>CREATE</button>
            </div>
        </form>
        <div className={S.canceled}>
            <Link to='/countries'>
                <button className={S.colour}>CANCEL</button>
            </Link>
        </div>
        <div className={S.selected}>
                <label className={S.count}>Selected Colour: </label>
                    <div className={S.footer}>
                        { input.countriesId.map (el =>
                            <div key={el}>
                                <p>{el}</p> 
                                <button className={S.cancel} onClick={()=>handleDelete(el)} key={el.id}>x</button>
                            </div>
                        )}
                    </div>
        </div>
    </div>
    </div>
)
};
