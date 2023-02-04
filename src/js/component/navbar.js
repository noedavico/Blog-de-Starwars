import { Link } from 'react-router-dom'
import logo from '../../img/Star-Wars-Logo-Transparent-PNG.png'
import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/appContext'

export const Navbar = () => {
  const { store, actions } = useContext(Context)

  return (
    <nav className='navbar col-xs-6  mb-3'>
      <Link to='/'>
        <p>
          
          <img
            src={logo}
            className='m-3 auto img-fluid'
            style={{ width: '250px' }}
          />
        </p>
      </Link>

      <div className='col-6 col-lg-3'>
        <div className='dropdown'>
          <button
            type='button'
            className='btn btn-outline-warning dropdown-toggle dropdown-toggle-split me-4 ps-3 fs-4'
            style={{ height: '50px' }}
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            {' '}
            Favorites{' '}
            <span className='fs-5 badge bg-secondary mx-2 text-warning '>
              {' '}
              {store.favorites.length}{' '}
            </span>{' '}
          </button>
          <ul className='dropdown-menu '>
            {store.favorites.map((item, index) => {
              return (
                <li className="d-flex" key={index}>
                  {' '}
                    {' '}
                    <p> {item} </p>{' '}
                    <button
                      onClick={() => {
                        actions.borrarFavoritos(item)
                      }}
                      className='btn-secondary float-start'
                    >
                      {' '}
                      X{' '}
                    </button>
                
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
