import React from 'react';

const WishList = ({ book }) => {
    const { title, image, rating_by, rating, hashtags, Year_of_Publishing, Publisher, Number_of_Page, Catagory } = book;
    return (
        <div className="card card-side bg-base-100 shadow-xl mb-2">
            <figure>
                <img className='w-[200px]'
                    src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <div>
                    <h3> <span>By:</span> {rating_by} </h3>
                    <h3 className='flex items-center gap-2'>
                        <span className='font-bold '>Tags: </span>
                        {
                            hashtags.map(tag => <li className='list-none bg-green-200  text-green-500 rounded-lg px-3  py-2'><span>{tag} </span> </li>)
                        }
                        <span className='ml-5'>Year of Publishing: {Year_of_Publishing} </span>
                    </h3>
                </div>
                <div className='flex gap-5'>
                    <h1 className='font-bold'> Publisher: {Publisher} </h1>
                    <h1 className='font-bold'> Number of Page: {Number_of_Page} </h1>
                </div>
                <div className="card-actions flex items-center">
                    <h1 className='text-blue-300 font-bold rounded-xl bg-blue-100 px-3 py-2'>Catagory: {Catagory} </h1>
                    <h1 className='text-orange-300 rounded-xl font-bold bg-orange-100 px-3 py-2 '>Rating:  {rating} </h1>
                    <button className="btn bg-green-500 text-white font-bold ">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default WishList;