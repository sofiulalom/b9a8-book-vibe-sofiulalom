import React from 'react';
import banner  from '../../assets/517fX9HyWoL._SR290,290_.jpg'
const Banner = () => {
    return (
        
        <div className="hero mt-24 px-10 py-16 rounded-xl bg-gray-300">
            <div className="hero-content flex-col justify-around items-center gap-12 lg:flex-row-reverse">
                <img
                   src={banner}
                  className=" rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-5xl mb-5 font-bold">Books to freshen up  your bookshelf</h1>
                    <div className=''>
                        
                        <button className="btn bg-green-500 text-white font-bold">view the list</button>
                       </div>
                    </div>
                </div>
            </div>
      
    );
};

export default Banner;