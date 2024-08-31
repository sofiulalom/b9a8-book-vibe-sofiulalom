import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link, NavLink, replace, useNavigate } from 'react-router-dom';

const Book = ({ book }) => {
    const { id, title, image, rating, rating_by } = book;
   const navigate  =useNavigate()
    const handleClick = () => {
        
        navigate(`/book/${id}`, { state: { key: "value" } });
    }
   
    
    return (
        <div onClick={handleClick} className="card bg-base-100 w-96 shadow-xl">
           
            
            <figure>
                <img className='w-96 h-[300px]'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='font-bold'>By: {rating_by} </p>
                
                <div className="flex justify-between items-center">
                    <h3 className='font-bold'>Fation</h3>
                    <span className='flex items-center gap-2'> {rating} <FaRegStar /> </span>
                </div>
                <div>
                  
                </div>
            </div>
        </div>
    );
};

export default Book;