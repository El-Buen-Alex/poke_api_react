import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import logo_Pokemon from '../resources/logo_pokemon.png'
import { ModalContext } from '../Contexts/ModalContext'
import UseFecth from '../shared/UseFecth'
export default function Header() {
  const [dataBusqueda, setDataBusqueda] = useState('')
  let timeout;
  const {state, dispatch}=useContext(ModalContext)
  let message_error;

  const fetchData=UseFecth(dataBusqueda.trim()!==''?`https://pokeapi.co/api/v2/pokemon/${dataBusqueda}`:'')

  
  useEffect(()=>{
    if(fetchData.data && !fetchData.error){
      dispatch({type:'set_pokemon', data:fetchData.data, backgroundColor:{backgroundColor:'#2a75bb'}})
    }
    if(dataBusqueda!=='' && fetchData.error){
      dispatch({type:'set_error', data:`Ha ocurrido un error, verifica si el nombre: ${dataBusqueda} está bien escrito`}) 
    }
    if(dataBusqueda.trim()===''){
      dispatch({type:'reset'}) 
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData])

  if(state.error_message && dataBusqueda!==''){
    message_error=<h5 className='message_error'>{state.error_message}</h5>
  }
  const setData=(event)=>{
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      setDataBusqueda(event.target.value)
    }
    ,1000)
  }


  return (
    <div className="header">
       <header className="logo_aplication">
       <div className='container_logo'><img className="logo" src={logo_Pokemon} alt='logo_pokemon'/></div>
        <h1 className="title">POKEMON REACT</h1>
       </header>
        <div className="container_input">
            <label className='label_pokemon_search'>Escriba el nombre del pokemon a buscar:</label>
            <input className="input search_components" type='text'  onChange={setData} />   
        </div>
        {message_error}
    </div>
  )
}
