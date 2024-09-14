import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getHendleReadStorage } from '../Utilty/readStorage';
import { getHandleWishLists } from '../Utilty/wishStorage';
import WishList from '../WishList/WishList';

const WishLLlists = () => {
    const wishBooks = useLoaderData();
    console.log(wishBooks.books)
    const [saveWishbooks, setSaveWishbooks]=useState([])

    useEffect(() => {
        const wishbooksStorge = getHandleWishLists();
        if (wishBooks.books.length > 0) {
            const wishbooks = [];
            for (const id of wishbooksStorge) {
                const book = wishBooks.books.find(book => book.id === id);
                if (book) {
                    wishbooks.push(book)
                }
            }
            setSaveWishbooks(wishbooks)
         }
    },[wishBooks])

    return (
        <div>
           
            {
                saveWishbooks.map(book => <WishList key={book.id} book={book}></WishList>)
            }
        </div>
    );
};

export default WishLLlists;