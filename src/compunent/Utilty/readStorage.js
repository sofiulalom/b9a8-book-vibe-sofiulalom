const getHendleReadStorage = () => {
    const booksStorage = localStorage.getItem('books');
    if (booksStorage) {
        return JSON.parse(booksStorage)
    }
    return [];
}

const saveBooksReadStorage = (id) => {
    const storageBooks = getHendleReadStorage();
    const exzist = storageBooks.find(bookId => bookId === id);
  
    if (!exzist) {
        storageBooks.push(id);
       localStorage.setItem('books', JSON.stringify(storageBooks))
    }
}

export {getHendleReadStorage, saveBooksReadStorage}
    
