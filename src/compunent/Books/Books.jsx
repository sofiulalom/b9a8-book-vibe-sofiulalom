import React, { useEffect, useState } from 'react';

import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
           .then(data => setBooks(data.books))

    }, [])
    
   
    return (
        <div className='mt-24'>
            <div className='mb-16'>
                <h1 className='text-3xl font-bold text-center'>Books</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    books.map(book => <Book
                        key={book.id}
                        book={book}
                      
                    >
                        
                        </Book>)
                }
            </div>
        </div>
    );
};

export default Books;