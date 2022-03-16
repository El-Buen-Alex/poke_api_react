import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import logo_Pokemon from '../resources/logo_pokemon.png'
import { ModalContext } from '../Contexts/ModalContext'
import UseFecth from '../shared/UseFecth'
export default function Header(props) {
  const [dataBusqueda, setDataBusqueda] = useState('no_data')
  let timeout;
  const {state, dispatch}=useContext(ModalContext)


  const fetchData=UseFecth(`https://pokeapi.co/api/v2/pokemon/${dataBusqueda}`)
  const {fetching, data, error}=fetchData
  useEffect(()=>{
    dispatch({type:'set_pokemon', data:data, backgroundColor:{backgroundColor:'#2a75bb'}})
  }, [data])

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
            <input className="input search_components" type='text'  onChange={setData} />
            <button className='button_search search_components' >Search</button>
        </div>
    </div>
  )
}
