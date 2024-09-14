import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ReadBook from '../ReadBooks/ReadBook';
import { getHendleReadStorage } from '../Utilty/readStorage';

const ReadBooks = () => {
    const books = useLoaderData();
    
   
    
    const [bookItem, setBoookItem] =useState([]);
   
    useEffect(() => {
        const storadBooks = getHendleReadStorage();
        
        if (books?.books?.length > 0) {
            const bookAplid = [];
            for (const id of storadBooks) {
              
               
                const book = books.books.find(bok => bok.id === id)
              
                if(book) {
                    bookAplid.push(book)
                    
                }
                
            }
            
            setBoookItem(bookAplid)
           

        }
            
    },[books])
    

    return (
        <div>
           
            {
                bookItem.map(book => <ReadBook key={book.id} book={book}></ReadBook>)
           }
    
        </div>
    );
};

export default ReadBooks;