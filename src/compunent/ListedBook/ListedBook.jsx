import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';



const ListedBook = () => {
   const books =useLoaderData()
 
   
    const { id } = useParams();
    const idint = parseInt(id)
    const book = books.books.find(book => book.id === idint)
     console.log(book)
   
    
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={book.image}
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-4xl">{book.title} </h2>
                <p className='text-xl'>By : {book.rating_by}</p>
                <h1 className='text-xl'>Fiction</h1>
                <p><span className='text-2xl font-bold'>Review:</span>{book.description} </p>
                <p className='gap-6'><span className='text-xl font-bold'>Tag:</span>{book.hashtags.map((tag, i) => <span className='ml-5 text-green-600 text-xl' key={i}>{tag}</span>)} </p>
                <div>
                    <div className='flex gap-6'>
                        <span className=' mr-6'>Numbeer of Page:</span>
                        <span className='font-bold'>{book.Number_of_Page} </span>
                    </div>
                    <div className='flex gap-5'>
                        <span className='mr-20'>Publisher:</span>
                        <span className='font-bold'>{book.Publisher}</span>
                    </div>
                    <div className='flex gap-6'>
                        <span className=' mr-4'>Year of Publishing:</span>
                        <span className='font-bold'>{book.Year_of_Publishing}</span>
                    </div>
                    <div className='flex gap-6'>
                        <span className=' mr-24'>Rating:</span>
                        <span className='font-bold'>{book.rating} </span>
                    </div>
                </div>
              
                <div className="card-actions ">
                    <button className="btn btn-outline btn-primary">Read</button>
                    <button className="btn btn-primary">Wishlist</button>
                    
                </div>
            </div>
        </div>
    );
};

export default ListedBook;