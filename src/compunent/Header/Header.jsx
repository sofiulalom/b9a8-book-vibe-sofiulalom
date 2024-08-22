import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        
                        <NavLink className='ml-5 ' to='/'>Home</NavLink> 
                        <NavLink className='ml-5' to='/books'>Listed Books</NavLink> 
                        <NavLink className='ml-5' to='/read'>Page to Read</NavLink> 
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Book vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal mr-5 px-1">
                    <NavLink className='ml-5 btn btn-outline  btn-success' to='/'>Home</NavLink>
                    <NavLink className='ml-5 btn btn-outline btn-success' to='/books'>Listed Books</NavLink>
                    
                    <NavLink className='ml-5 btn btn-outline btn-success' to='/read'>Page to Read</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <button className='btn btn-primary mr-2'>Sign-up</button>
                <button className='btn btn-primary'>Sign-in</button>
            </div>
        </div>
    );
};

export default Header;