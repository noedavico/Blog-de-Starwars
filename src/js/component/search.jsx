import { Link } from 'react-router-dom'
import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/appContext'
// import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export const Search = () => {
  const { store, actions } = useContext(Context)
  return (   
<div className='container' style={{ padding: 20 }}>
<input type="text" name="tarea"
   className="form-control  border border-ligth text-center text-ligth opacity-50" 
   icon='search'
   placeholder='Find your favorites.'
   onChange={(e) => {actions.searchItems(e.target.value)}}
  value={store.filtrados.name}
/>
<ul className="list-group glow opacity-75" > {store.filtrados.length> 0 ?  store.filtrados.map((item, index) =>  
          <li className="list-group-item glow d-flex opacity-75 " key={index++}> <span style={{width:"95%"}}> <Link to={`/personajes/${index++}`}>{item.name}</Link> </span>
           </li>  
           ) : null} 
           </ul>
    </div>
  );
};